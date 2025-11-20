# 🧠 Custom Model Training Plan — XGBoost / sklearn

This document describes how the custom ML model is trained outside BigQuery/AutoML using Python and XGBoost.

---

# 1. Goals

- Build a highly accurate, explainable classifier.
- Achieve:
  - AUC ≥ 0.90
  - High recall (≥ 0.80) for clinical utility
- Provide SHAP-based interpretability.

---

# 2. Data Source

Model is trained on:

