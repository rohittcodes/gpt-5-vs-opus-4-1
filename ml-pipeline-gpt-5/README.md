## Customer Churn ML Pipeline

This project provides a complete, reproducible ML pipeline for customer churn prediction:

- Data preprocessing and cleaning
- Feature engineering
- Model selection and training
- Evaluation and metrics (ROC-AUC, PR-AUC, F1, confusion matrix)
- Artifact saving (trained model, preprocessor, metrics, plots)

### Quickstart

1) Create a Python 3.10+ environment and install dependencies:

```
pip install -r requirements.txt
```

2) Run interactively (recommended):

```
python -m churn_ml.cli
```

3) Or train with the included sample dataset using defaults:

```
python scripts/train.py
```

Artifacts (model, preprocessor, metrics, plots) will be saved under `artifacts/run_YYYYMMDD_HHMMSS/`.

### Project Structure

```
.
├── churn_ml/
│   ├── __init__.py
│   ├── config.py
│   ├── data_preprocessing.py
│   ├── feature_engineering.py
│   ├── model_training.py
│   ├── evaluation.py
│   └── cli.py
├── data/
│   └── sample_churn.csv
├── scripts/
│   └── train.py
├── artifacts/            # created at runtime
├── requirements.txt
└── README.md
```

### Notes

- The interactive CLI will prompt for the dataset path, target column (default `Churn`), whether to use SMOTE, and test split size. It guides you step-by-step and prints progress.
- The sample dataset is a small synthetic Telco-style dataset to validate the pipeline end-to-end.

### Reproducibility

- All modules use a fixed `random_state` for deterministic behavior where applicable.

### Extending

- Add/modify engineered features in `churn_ml/feature_engineering.py`.
- Add/modify models and search spaces in `churn_ml/model_training.py`.
- Adjust preprocessing in `churn_ml/data_preprocessing.py`.


