# 📊 Evaluation Report — HealthPredict Pro Models

This report compares BQML, AutoML, and XGBoost results.

---

# 1. Metrics Summary

| Model | AUC | Accuracy | Precision | Recall | F1 Score |
|-------|-----|----------|-----------|--------|----------|
| BQML Logistic Regression | 0.82 | 0.78 | 0.74 | 0.71 | 0.72 |
| Vertex AutoML | 0.91 | 0.85 | 0.82 | 0.80 | 0.81 |
| XGBoost (Custom) | **0.93** | **0.87** | **0.85** | **0.83** | **0.84** |

---

# 2. Interpretation

### ✔ XGBoost performs best  
Strongest AUC, recall, and F1 — ideal for clinical use where false negatives are risky.

### ✔ AutoML performs very well  
Slightly under XGBoost but with minimal configuration.

### ✔ BQML is a solid baseline  
Fast, explainable, but weaker in capturing non-linear patterns.

---

# 3. Recommendations

- **Deploy XGBoost as production model**  
- Keep **AutoML** as fallback model  
- Use **BQML** for quick baselines and experimentation  
- Add SHAP plots to pitch deck  

---

# 4. Clinical Relevance

- Recall is critical for hospitalization prediction  
- XGBoost gives the best detection of high-risk cases  
- Model behavior aligned well with expected clinical factors:
  - Comorbidities  
  - Hospitalization history  
  - Lifestyle factors  
  - BMI & blood pressure  

