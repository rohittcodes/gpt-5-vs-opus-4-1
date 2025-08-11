from __future__ import annotations

import json
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import joblib
import numpy as np
import pandas as pd
from imblearn.over_sampling import SMOTE
from imblearn.pipeline import Pipeline as ImbPipeline
from sklearn.base import BaseEstimator
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import make_scorer, roc_auc_score
from sklearn.model_selection import RandomizedSearchCV
from sklearn.ensemble import RandomForestClassifier


def _try_import_xgb() -> Optional[BaseEstimator]:
    try:
        from xgboost import XGBClassifier  # type: ignore

        return XGBClassifier
    except Exception:
        return None


@dataclass
class TrainedArtifacts:
    run_dir: Path
    model_path: Path
    preprocessor_path: Path
    metrics_path: Path
    label_encoder_path: Optional[Path]


def build_model_search_spaces(random_state: int) -> List[Tuple[str, BaseEstimator, Dict[str, List]]]:
    """Return list of (name, estimator, param_distributions) for model selection."""
    models: List[Tuple[str, BaseEstimator, Dict[str, List]]] = []

    models.append(
        (
            "logistic_regression",
            LogisticRegression(max_iter=2000, n_jobs=-1, class_weight="balanced", solver="saga"),
            {
                "model__C": np.logspace(-3, 2, 20),
                "model__penalty": ["l1", "l2", "elasticnet"],
                "model__l1_ratio": np.linspace(0, 1, 10),
            },
        )
    )

    models.append(
        (
            "random_forest",
            RandomForestClassifier(n_estimators=300, class_weight="balanced", random_state=random_state, n_jobs=-1),
            {
                "model__n_estimators": [200, 300, 500],
                "model__max_depth": [None, 5, 10, 20],
                "model__min_samples_split": [2, 5, 10],
                "model__min_samples_leaf": [1, 2, 4],
                "model__max_features": ["sqrt", "log2", None],
            },
        )
    )

    XGBClassifier = _try_import_xgb()
    if XGBClassifier is not None:
        models.append(
            (
                "xgboost",
                XGBClassifier(
                    random_state=random_state,
                    n_estimators=400,
                    learning_rate=0.1,
                    subsample=0.9,
                    colsample_bytree=0.9,
                    tree_method="hist",
                    n_jobs=-1,
                    eval_metric="auc",
                ),
                {
                    "model__max_depth": [3, 4, 5, 6, 8],
                    "model__min_child_weight": [1, 5, 10],
                    "model__gamma": [0.0, 0.1, 0.2],
                    "model__reg_alpha": [0.0, 0.001, 0.01, 0.1],
                    "model__reg_lambda": [0.5, 1.0, 2.0],
                    "model__subsample": [0.7, 0.9, 1.0],
                    "model__colsample_bytree": [0.7, 0.9, 1.0],
                },
            )
        )

    return models


def train_select_best_model(
    X_train: pd.DataFrame,
    y_train: pd.Series,
    preprocessor,
    random_state: int,
    scoring: str,
    cv_folds: int,
    search_iterations: int,
    use_smote: bool,
) -> Tuple[str, BaseEstimator, Dict[str, float]]:
    """Train multiple models with randomized hyperparameter search and select the best by CV metric."""
    models = build_model_search_spaces(random_state=random_state)
    best_name: Optional[str] = None
    best_estimator: Optional[BaseEstimator] = None
    best_score = -np.inf

    for name, estimator, param_distributions in models:
        steps = [("preprocess", preprocessor)]
        if use_smote:
            steps.append(("smote", SMOTE(random_state=random_state)))
        steps.append(("model", estimator))

        pipeline = ImbPipeline(steps=steps, verbose=False)

        search = RandomizedSearchCV(
            estimator=pipeline,
            param_distributions=param_distributions,
            n_iter=search_iterations,
            cv=cv_folds,
            scoring=scoring,
            n_jobs=-1,
            random_state=random_state,
            refit=True,
            verbose=1,
        )

        search.fit(X_train, y_train)
        mean_score = search.best_score_

        if mean_score > best_score:
            best_score = mean_score
            best_name = name
            best_estimator = search.best_estimator_

    assert best_name is not None and best_estimator is not None
    return best_name, best_estimator, {"cv_best_score": float(best_score)}


def save_artifacts(
    run_dir: Path,
    model_pipeline: BaseEstimator,
    preprocessor,
    metrics: Dict[str, float],
) -> TrainedArtifacts:
    run_dir.mkdir(parents=True, exist_ok=True)
    model_path = run_dir / "model_pipeline.joblib"
    preprocessor_path = run_dir / "preprocessor.joblib"
    metrics_path = run_dir / "metrics.json"

    joblib.dump(model_pipeline, model_path)
    joblib.dump(preprocessor, preprocessor_path)
    with metrics_path.open("w") as f:
        json.dump(metrics, f, indent=2)

    return TrainedArtifacts(
        run_dir=run_dir,
        model_path=model_path,
        preprocessor_path=preprocessor_path,
        metrics_path=metrics_path,
        label_encoder_path=None,
    )


def create_run_directory(base_dir: str = "artifacts") -> Path:
    timestamp = datetime.now().strftime("run_%Y%m%d_%H%M%S")
    run_dir = Path(base_dir) / timestamp
    return run_dir


