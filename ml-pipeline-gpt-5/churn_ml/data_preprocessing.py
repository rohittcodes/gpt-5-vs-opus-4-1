from __future__ import annotations

from dataclasses import dataclass
from typing import List, Optional, Tuple

import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler


@dataclass
class DatasetSplit:
    X_train: pd.DataFrame
    X_test: pd.DataFrame
    y_train: pd.Series
    y_test: pd.Series


def infer_column_types(df: pd.DataFrame, target_column: str, id_columns: Optional[List[str]] = None) -> Tuple[List[str], List[str]]:
    """Infer numeric and categorical columns from a DataFrame.

    Excludes target and ID columns.
    """
    id_columns = id_columns or []
    excluded = set([target_column] + id_columns)

    numeric_columns: List[str] = [
        c for c in df.columns if c not in excluded and pd.api.types.is_numeric_dtype(df[c])
    ]
    categorical_columns: List[str] = [
        c for c in df.columns if c not in excluded and not pd.api.types.is_numeric_dtype(df[c])
    ]
    return numeric_columns, categorical_columns


def build_preprocessor(numeric_columns: List[str], categorical_columns: List[str]) -> ColumnTransformer:
    """ColumnTransformer handling numeric scaling and categorical one-hot encoding."""
    numeric_pipeline = Pipeline(
        steps=[
            ("impute", SimpleImputer(strategy="median")),
            ("scale", StandardScaler()),
        ]
    )

    categorical_pipeline = Pipeline(
        steps=[
            ("impute", SimpleImputer(strategy="most_frequent")),
            (
                "onehot",
                OneHotEncoder(handle_unknown="ignore", sparse_output=False),
            ),
        ]
    )

    preprocessor = ColumnTransformer(
        transformers=[
            ("num", numeric_pipeline, numeric_columns),
            ("cat", categorical_pipeline, categorical_columns),
        ],
        remainder="drop",
        verbose_feature_names_out=True,
    )
    return preprocessor


def split_dataset(
    df: pd.DataFrame,
    target_column: str,
    test_size: float,
    random_state: int,
) -> DatasetSplit:
    """Split a DataFrame into train/test sets with stratification by target."""
    from sklearn.model_selection import train_test_split

    X = df.drop(columns=[target_column])
    y = df[target_column].astype(int) if df[target_column].dtype == bool else df[target_column]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=test_size, random_state=random_state, stratify=y
    )
    return DatasetSplit(X_train=X_train, X_test=X_test, y_train=y_train, y_test=y_test)


def load_dataset(csv_path: str) -> pd.DataFrame:
    """Load dataset from a CSV path and perform basic cleaning."""
    df = pd.read_csv(csv_path)

    # Trim whitespace in string columns and standardize common binary string values
    for column in df.select_dtypes(include=["object"]).columns:
        df[column] = df[column].astype(str).str.strip()

    # Convert common churn targets to 0/1 if applicable
    if "Churn" in df.columns and df["Churn"].dtype == object:
        df["Churn"] = df["Churn"].map({"Yes": 1, "No": 0}).fillna(df["Churn"]).astype(int, errors="ignore")

    # Coerce numeric-like strings to numeric where possible
    for column in df.columns:
        if df[column].dtype == object:
            coerced = pd.to_numeric(df[column], errors="ignore")
            if not isinstance(coerced, pd.Series) or coerced.dtype != object:
                df[column] = coerced

    return df


