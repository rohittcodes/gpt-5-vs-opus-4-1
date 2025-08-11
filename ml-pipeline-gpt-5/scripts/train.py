from __future__ import annotations

from pathlib import Path

from churn_ml.config import PipelineConfig
from churn_ml.data_preprocessing import build_preprocessor, infer_column_types, load_dataset, split_dataset
from churn_ml.evaluation import evaluate_classifier, save_plots
from churn_ml.feature_engineering import FeatureEngineer
from churn_ml.model_training import create_run_directory, save_artifacts, train_select_best_model


def run_default_training() -> None:
    config = PipelineConfig()
    csv_path = Path("data/sample_churn.csv")
    df = load_dataset(str(csv_path))
    fe = FeatureEngineer()
    df = fe.fit_transform(df)

    numeric_columns, categorical_columns = infer_column_types(df, target_column=config.target_column, id_columns=config.id_columns)
    preprocessor = build_preprocessor(numeric_columns, categorical_columns)
    split = split_dataset(df, target_column=config.target_column, test_size=config.test_size, random_state=config.random_state)

    model_name, model_pipeline, cv_info = train_select_best_model(
        split.X_train,
        split.y_train,
        preprocessor,
        config.random_state,
        config.scoring,
        config.cv_folds,
        config.search_iterations,
        config.use_smote,
    )

    metrics, curves = evaluate_classifier(model_pipeline, split.X_test, split.y_test)

    run_dir = create_run_directory()
    save_artifacts(run_dir, model_pipeline, preprocessor, {**cv_info, **metrics})
    save_plots(run_dir, curves)

    print(f"Saved artifacts to {run_dir}")


if __name__ == "__main__":
    run_default_training()


