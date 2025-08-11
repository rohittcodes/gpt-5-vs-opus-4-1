from dataclasses import dataclass, field
from typing import List, Optional


@dataclass
class PipelineConfig:
    """Configuration for the churn prediction pipeline."""

    target_column: str = "Churn"
    id_columns: List[str] = field(default_factory=lambda: ["customerID"])
    # If not provided, numeric/categorical columns are inferred from dtypes
    numeric_columns: Optional[List[str]] = None
    categorical_columns: Optional[List[str]] = None

    test_size: float = 0.2
    random_state: int = 42
    use_smote: bool = True
    n_jobs: int = -1

    # Model search settings
    cv_folds: int = 5
    search_iterations: int = 25
    scoring: str = "roc_auc"

    # Artifact output directory (run subfolders will be created)
    artifacts_dir: str = "artifacts"


