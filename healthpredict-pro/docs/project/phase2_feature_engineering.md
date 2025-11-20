# 🟡 Phase 2 – Feature Engineering & Pipeline

Phase 2 transforms raw synthetic health records into a **medically meaningful, ML-ready feature set**.  
---

## 1. Objectives

- Create an engineered feature table in BigQuery (`patients_engineered`)
- Capture important risk factors in an interpretable way
- Keep the entire process reproducible via SQL + version control

---

## 2. What We Implement

1. **BigQuery feature engineering script**
   - File: `ml/pipelines/bq_feature_engineering.sql`
   - Reads from: `patients_raw`
   - Writes to: `patients_engineered`
   - Adds:
     - Age buckets
     - BMI / blood pressure / cholesterol categories
     - Lifestyle scores (smoking, exercise)
     - Comorbidity counts
     - A composite `engineered_risk_signal`

2. **Preprocessing pipeline documentation**
   - File: `ml/preprocessing/preprocess_pipeline_overview.md`
   - Describes:
     - Full transformation flow
     - How Python-level preprocessing connects to BigQuery
     - How we keep changes traceable over time

3. **Feature catalog**
   - File: `ml/preprocessing/features.md`
   - Lists:
     - All original and engineered features
     - Their meaning and medical rationale
     - Which models use which feature subsets

---

## 3. Why This Matters for Donors & Partners

- Shows that our model is not a “black box”; it is built on **clear clinical logic**.
- Demonstrates that:
  - We understand risk factors like age, BMI, hypertension, diabetes, lifestyle.
  - We can explain to a doctor exactly what the model is seeing.
- Provides a robust foundation for:
  - Vertex AI AutoML
  - BigQuery ML baselines
  - Custom XGBoost / sklearn models

---

## 4. Outputs of Phase 2

- ✅ Engineered BigQuery table: `patients_engineered`  
- ✅ Reproducible SQL pipeline under version control  
- ✅ Clear documentation of every feature and transformation  

These outputs feed directly into **Phase 3 – Model Training**.

