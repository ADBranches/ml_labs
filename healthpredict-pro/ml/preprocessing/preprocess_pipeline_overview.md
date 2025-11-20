# 🧪 HealthPredict Pro – Preprocessing & Feature Engineering Pipeline

This document explains how raw synthetic health records are transformed into an **ML-ready dataset** in BigQuery and Python.

---

## 1. Pipeline Goals

- Convert raw clinical-style fields into **model-friendly features**
- Capture known medical relationships (age, comorbidities, lifestyle)
- Keep the pipeline **reproducible, transparent, and auditable**

---

## 2. High-Level Steps

1. **Ingest raw data**  
   - Source: `patients_raw` (BigQuery) loaded from `synthetic_patient_data_sample.csv`.
   - Columns defined in `schema.md` and `data_dictionary.md`.

2. **Run BigQuery feature engineering SQL**  
   - Script: `ml/pipelines/bq_feature_engineering.sql`  
   - Output table: `patients_engineered`.

3. **Export or query engineered table from Python**  
   - Used by AutoML, BigQuery ML, and custom models.

4. **Split into train/validation/test sets** (Python or BQ)  
   - Ensure fixed random seed for reproducibility.

5. **Encode & scale features (if needed)**  
   - Categorical encodings (one-hot/ordinal).
   - Optional scaling for tree-based vs linear models.

6. **Log experiment details**  
   - `ml/experiments/experiment_log.md` records:
     - SQL version / commit
     - Feature set used
     - Model type + hyperparameters
     - Evaluation scores

---

## 3. BigQuery Transformation Logic

The SQL pipeline:

- Creates **age buckets** (18–29, 30–44, 45–59, 60–74, 75+).
- Derives **BMI**, **blood pressure**, and **cholesterol** categories.
- Converts lifestyle factors (`smoker`, `exercise_frequency`) into **ordinal scores**.
- Computes **comorbidity_count** from diabetes + hypertension.
- Generates an `engineered_risk_signal` feature that combines:
  - age, bmi, blood_pressure  
  - smoking level  
  - diabetes & hypertension indicators  
  - previous hospitalizations  
  - exercise frequency (protective)

All transformations are defined in a **single idempotent script** that can be re-run safely.

---

## 4. Python-Level Preprocessing (Custom Models)

When training custom models (e.g., XGBoost / sklearn):

1. Query `patients_engineered` directly from BigQuery.
2. Apply:
   - One-hot encoding for:
     - `age_bucket`
     - `bmi_category`
     - `blood_pressure_category`
     - `cholesterol_category`
   - Keep numeric:
     - `age`, `bmi`, `blood_pressure`, `cholesterol`
     - `exercise_score`, `smoker_score`
     - `comorbidity_count`, `previous_hospitalizations`
     - `engineered_risk_signal`
3. Split data into train/val/test.
4. Train models and record results in `experiment_log.md`.

---

## 5. Reproducibility & Governance

- SQL scripts are under version control (`ml/pipelines`).
- Any change to feature definitions must:
  - Update `features.md`
  - Append a row in `experiment_log.md`
- This ensures end-to-end **traceability** from raw data → features → model.


