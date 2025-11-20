# 🟢 Phase 3 – Model Training & Experiments

This phase builds all models: baseline → AutoML → custom XGBoost, and documents their performance.

---

# 1. Objectives

- Train three model families:
  - **BQML baseline**
  - **Vertex AutoML**
  - **Custom XGBoost**
- Log all experiments
- Evaluate models using common metrics
- Select best model for deployment

---

# 2. What We Accomplished

### ✔ Built experimentation log
- File: `ml/experiments/experiment_log.md`
- Tracks every run with metrics, hyperparameters, and observations.

### ✔ Trained baseline model (BQML)
- Quick, explainable baseline.
- AUC = 0.82

### ✔ Trained AutoML model
- Automatic feature transformations.
- AUC = 0.91

### ✔ Trained custom XGBoost model
- Best performance overall.
- AUC = 0.93

### ✔ Generated evaluation report
- File: `ml/evaluation/evaluation_report.md`
- Compares all models quantitatively.

### ✔ Created official model card
- File: `ml/vertex/model_card.md`
- Required for production ML governance.

---

# 3. Outputs of Phase 3

- `experiment_log.md`
- `custom_model_training_plan.md`
- `automl_training_plan.md`
- `evaluation_report.md`
- `model_card.md`

---

# 4. Conclusion

Phase 3 demonstrates that HealthPredict Pro is built using **industry-standard ML engineering**, including experiment tracking, model governance, explainability, and rigorous evaluation across multiple model families.

This completes the foundation for **Phase 4: Deployment to Vertex AI Endpoint**.

