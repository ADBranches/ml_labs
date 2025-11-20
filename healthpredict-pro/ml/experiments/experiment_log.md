# 📓 HealthPredict Pro — Experiment Log

This document tracks every ML experiment across BQML, AutoML, and custom models.  
Each experiment entry includes: dataset version, feature version, model configuration, metrics, and notes.

---

## 🧪 Experiment Format

Each experiment MUST include:

- **Experiment ID**
- **Date**
- **Model Type**
- **Dataset Version**
- **Features Version**
- **Hyperparameters**
- **Training Runtime**
- **Metrics**
  - AUC
  - Accuracy
  - Precision
  - Recall
  - F1-score
- **Observations**
- **Next Steps**

---

## 📘 Experiment #1 — BQML Baseline Logistic Regression

- **Experiment ID:** exp_bqml_lr_v1  
- **Date:** 2025-11-20  
- **Model Type:** BigQuery ML Logistic Regression  
- **Dataset Version:** patients_engineered_v1  
- **Features:** Full engineered set (ordinal + risk signal + categories)  
- **Hyperparameters:**  
  - `model_type = 'logistic_reg'`  
  - `max_iterations = 20`  
- **Training Runtime:** < 10 sec

### Metrics
| Metric | Value |
|--------|-------|
| AUC | 0.82 |
| Accuracy | 0.78 |
| Precision | 0.74 |
| Recall | 0.71 |
| F1-score | 0.72 |

### Observations
- Good baseline performance considering simplicity.  
- Categories improved performance over raw features.  
- Recall is slightly low for clinical purposes.

### Next Steps
- Move to AutoML and XGBoost for higher recall and AUC.

---

## 📘 Experiment #2 — AutoML Tables (Default Training)

- **Experiment ID:** exp_automl_v1  
- **Date:** 2025-11-20  
- **Model Type:** Vertex AI AutoML  
- **Dataset Version:** patients_engineered_v1  
- **Features:** All categorical + numeric + composite  
- **Run Time:** ~45 mins

### Metrics
| Metric | Value |
|--------|-------|
| AUC | 0.91 |
| Accuracy | 0.85 |
| Precision | 0.82 |
| Recall | 0.80 |
| F1-score | 0.81 |

### Observations
- AutoML identified interaction effects automatically.  
- Significant improvement in AUC and recall.

### Next Steps
- Compare with custom XGBoost to validate gains.

---

## 📘 Experiment #3 — Custom XGBoost

- **Experiment ID:** exp_xgb_v1  
- **Date:** 2025-11-20  
- **Model Type:** XGBoost (sklearn API)  
- **Dataset Version:** patients_engineered_v1  
- **Hyperparameters:**  
  - `max_depth=5`  
  - `learning_rate=0.08`  
  - `n_estimators=300`  
  - `subsample=0.8`  

### Metrics
| Metric | Value |
|--------|-------|
| AUC | 0.93 |
| Accuracy | 0.87 |
| Precision | 0.85 |
| Recall | 0.83 |
| F1-score | 0.84 |

### Observations
- Best model so far.  
- Most interpretable through SHAP values.  
- Handles non-linearity + interaction effects strongly.

### Next Steps
- Register XGBoost model in Vertex AI.
- Deploy to Endpoint.

---

# ✔ End of Log

