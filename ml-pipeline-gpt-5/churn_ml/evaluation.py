from __future__ import annotations

import json
from pathlib import Path
from typing import Dict, Tuple

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn import metrics as skm


def evaluate_classifier(
    estimator,
    X_test: pd.DataFrame,
    y_test: pd.Series,
) -> Tuple[Dict[str, float], Dict[str, np.ndarray]]:
    """Compute a standard set of classification metrics and curves."""
    y_prob = None
    if hasattr(estimator, "predict_proba"):
        y_prob = estimator.predict_proba(X_test)[:, 1]
    elif hasattr(estimator, "decision_function"):
        df = estimator.decision_function(X_test)
        # Squash to [0, 1]
        y_prob = (df - df.min()) / (df.max() - df.min() + 1e-8)
    else:
        # Fallback to predictions, not ideal but robust
        y_prob = estimator.predict(X_test)

    y_pred = (y_prob >= 0.5).astype(int)

    metrics = {
        "roc_auc": float(skm.roc_auc_score(y_test, y_prob)),
        "pr_auc": float(skm.average_precision_score(y_test, y_prob)),
        "f1": float(skm.f1_score(y_test, y_pred)),
        "accuracy": float(skm.accuracy_score(y_test, y_pred)),
        "precision": float(skm.precision_score(y_test, y_pred, zero_division=0)),
        "recall": float(skm.recall_score(y_test, y_pred)),
    }

    fpr, tpr, _ = skm.roc_curve(y_test, y_prob)
    precision, recall, _ = skm.precision_recall_curve(y_test, y_prob)
    cm = skm.confusion_matrix(y_test, y_pred)

    curves = {
        "fpr": fpr,
        "tpr": tpr,
        "precision": precision,
        "recall": recall,
        "confusion_matrix": cm,
    }
    return metrics, curves


def save_plots(run_dir: Path, curves: Dict[str, np.ndarray]) -> None:
    run_dir.mkdir(parents=True, exist_ok=True)

    # ROC curve
    plt.figure(figsize=(6, 5))
    plt.plot(curves["fpr"], curves["tpr"], label="ROC curve")
    plt.plot([0, 1], [0, 1], "k--", alpha=0.5)
    plt.xlabel("False Positive Rate")
    plt.ylabel("True Positive Rate")
    plt.title("ROC Curve")
    plt.legend()
    plt.tight_layout()
    plt.savefig(run_dir / "roc_curve.png", dpi=150)
    plt.close()

    # PR curve
    plt.figure(figsize=(6, 5))
    plt.plot(curves["recall"], curves["precision"], label="PR curve")
    plt.xlabel("Recall")
    plt.ylabel("Precision")
    plt.title("Precision-Recall Curve")
    plt.legend()
    plt.tight_layout()
    plt.savefig(run_dir / "pr_curve.png", dpi=150)
    plt.close()

    # Confusion matrix
    cm = curves["confusion_matrix"]
    plt.figure(figsize=(4, 4))
    plt.imshow(cm, cmap="Blues")
    plt.colorbar()
    plt.xticks([0, 1], ["Pred 0", "Pred 1"])
    plt.yticks([0, 1], ["True 0", "True 1"])
    for (i, j), v in np.ndenumerate(cm):
        plt.text(j, i, str(v), ha="center", va="center")
    plt.title("Confusion Matrix")
    plt.tight_layout()
    plt.savefig(run_dir / "confusion_matrix.png", dpi=150)
    plt.close()


