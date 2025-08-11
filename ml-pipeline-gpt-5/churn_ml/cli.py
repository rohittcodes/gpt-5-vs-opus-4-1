from __future__ import annotations

import sys
from pathlib import Path

import pandas as pd

from .config import PipelineConfig
from .data_preprocessing import build_preprocessor, infer_column_types, load_dataset, split_dataset
from .feature_engineering import FeatureEngineer
from .model_training import create_run_directory, save_artifacts, train_select_best_model
from .evaluation import evaluate_classifier, save_plots


def prompt(prompt_text: str, default: str | None = None) -> str:
    suffix = f" [{default}]" if default is not None else ""
    print(f"{prompt_text}{suffix}: ", end="", flush=True)
    value = input().strip()
    return value or (default or "")


def main() -> None:
    print("Welcome to the Churn ML Pipeline interactive CLI.")
    print("Let's set things up.")

    dataset_path = prompt("Enter path to CSV dataset", default=str(Path("data/sample_churn.csv").absolute()))
    target_column = prompt("Enter target column name", default="Churn")
    test_size_str = prompt("Enter test size fraction (0-1)", default="0.2")
    use_smote_str = prompt("Use SMOTE to balance classes? (y/n)", default="y")

    try:
        test_size = float(test_size_str)
    except ValueError:
        print("Invalid test size, using default 0.2")
        test_size = 0.2

    use_smote = use_smote_str.lower().startswith("y")

    config = PipelineConfig(target_column=target_column, test_size=test_size, use_smote=use_smote)

    print("\nLoading dataset...")
    df = load_dataset(dataset_path)
    print(f"Loaded {df.shape[0]} rows, {df.shape[1]} columns.")

    print("Applying feature engineering...")
    fe = FeatureEngineer()
    df_fe = fe.fit_transform(df)

    print("Inferring column types...")
    numeric_columns, categorical_columns = infer_column_types(df_fe, target_column=config.target_column, id_columns=config.id_columns)
    print(f"Numeric: {len(numeric_columns)} | Categorical: {len(categorical_columns)}")

    print("Building preprocessor...")
    preprocessor = build_preprocessor(numeric_columns, categorical_columns)

    print("Splitting dataset...")
    split = split_dataset(df_fe, target_column=config.target_column, test_size=config.test_size, random_state=config.random_state)

    print("Training and selecting the best model (this may take a few minutes)...")
    model_name, model_pipeline, cv_info = train_select_best_model(
        X_train=split.X_train,
        y_train=split.y_train,
        preprocessor=preprocessor,
        random_state=config.random_state,
        scoring=config.scoring,
        cv_folds=config.cv_folds,
        search_iterations=config.search_iterations,
        use_smote=config.use_smote,
    )
    print(f"Best model: {model_name} | CV {config.scoring}: {cv_info['cv_best_score']:.4f}")

    print("Evaluating on the test set...")
    metrics, curves = evaluate_classifier(model_pipeline, split.X_test, split.y_test)
    print("Metrics:")
    for k, v in metrics.items():
        print(f"  {k}: {v:.4f}")

    run_dir = create_run_directory()
    print(f"Saving artifacts to: {run_dir}")
    save_artifacts(run_dir, model_pipeline, preprocessor, {**cv_info, **metrics})
    save_plots(run_dir, curves)

    print("Done.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nInterrupted.")
        sys.exit(1)


