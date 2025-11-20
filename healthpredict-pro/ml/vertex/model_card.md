# 🗂 Vertex AI Model Card — HealthPredict Pro (XGBoost v1)

A model card provides transparency, explainability, and governance for the deployed ML model.

---

# 1. Model Overview

- **Name:** xgboost_hospitalization_risk_v1  
- **Version:** 1.0  
- **Framework:** XGBoost (sklearn API)  
- **Hosted on:** Vertex AI Model Registry  
- **Endpoint:** Vertex AI Online Prediction Endpoint  
- **Purpose:** Predict 6-month hospitalization risk  

---

# 2. Intended Use

### Appropriate Use
- Early-warning clinical risk screening  
- Resource allocation and triage support  
- Educational demonstrations  
- Donor presentations  

### Not for
- Diagnostic decisions  
- Emergency medical treatment  
- Real patient data (demo only)

---

# 3. Dataset Used

Source: `patients_engineered` (synthetic)

Rows: ~5,000  
Features: 20 engineered features  
Target: `risk_label`

---

# 4. Key Features

Top contributors (SHAP):

1. previous_hospitalizations  
2. comorbidity_count  
3. engineered_risk_signal  
4. smoker_score  
5. exercise_score  
6. blood_pressure_category  
7. bmi_category  

---

# 5. Performance

| Metric | Value |
|--------|-------|
| AUC | 0.93 |
| Precision | 0.85 |
| Recall | 0.83 |
| F1 | 0.84 |

---

# 6. Ethical Considerations

- Fully synthetic dataset — no patient identity risk  
- Transparent model logic  
- Explainability via SHAP  
- Regular re-training recommended to avoid drift  

---

# 7. Deployment Metadata

- Cloud Run backend calls this model  
- Logs prediction requests via Cloud Logging  
- Auto-scaling enabled  
- Version-controlled via GitHub + Vertex Registry  

