from __future__ import annotations

from typing import Iterable, Optional

import numpy as np
import pandas as pd
from sklearn.base import BaseEstimator, TransformerMixin


class FeatureEngineer(BaseEstimator, TransformerMixin):
    """Create domain-inspired features for churn prediction.

    - `charges_per_tenure`: TotalCharges / max(tenure, 1)
    - `charges_to_monthly_ratio`: TotalCharges / max(MonthlyCharges, 1)
    - `is_long_tenure`: tenure >= 24
    - `tenure_bucket`: categorical bucketization
    """

    def __init__(self, tenure_column: str = "tenure", monthly_column: str = "MonthlyCharges", total_column: str = "TotalCharges"):
        self.tenure_column = tenure_column
        self.monthly_column = monthly_column
        self.total_column = total_column
        self._fitted_columns: Optional[Iterable[str]] = None

    def fit(self, X: pd.DataFrame, y=None):  # type: ignore[override]
        self._fitted_columns = list(X.columns)
        return self

    def transform(self, X: pd.DataFrame) -> pd.DataFrame:  # type: ignore[override]
        X = X.copy()

        if self.tenure_column in X.columns:
            tenure = pd.to_numeric(X[self.tenure_column], errors="coerce").fillna(0)
            X["is_long_tenure"] = (tenure >= 24).astype(int)
            X["tenure_bucket"] = pd.cut(
                tenure,
                bins=[-np.inf, 6, 12, 24, 48, np.inf],
                labels=["<=6", "6-12", "12-24", "24-48", ">48"],
            ).astype(str)

        if self.total_column in X.columns and self.tenure_column in X.columns:
            total = pd.to_numeric(X[self.total_column], errors="coerce").fillna(0)
            tenure = pd.to_numeric(X[self.tenure_column], errors="coerce").fillna(0)
            X["charges_per_tenure"] = total / np.maximum(tenure, 1)

        if self.total_column in X.columns and self.monthly_column in X.columns:
            total = pd.to_numeric(X[self.total_column], errors="coerce").fillna(0)
            monthly = pd.to_numeric(X[self.monthly_column], errors="coerce").fillna(1)
            X["charges_to_monthly_ratio"] = total / np.maximum(monthly, 1)

        return X


