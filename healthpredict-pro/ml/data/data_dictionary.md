# 📘 HealthPredict Pro — Data Dictionary
This document describes every field used in the synthetic patient dataset (`synthetic_patient_data_sample.csv`).  
It defines column meaning, datatype, allowed values, and clinical rationale.

The dataset is designed for:
- Predicting short-term hospitalization risk
- Demonstrating a privacy-safe ML workflow
- Enabling feature engineering, AutoML, and custom ML pipelines

---

# 🧬 1. Overview of Columns

| Column Name            | Type        | Description |
|------------------------|-------------|-------------|
| `age`                  | Integer     | Patient age in years |
| `bmi`                  | Float       | Body Mass Index (BMI) |
| `blood_pressure`       | Float       | Systolic blood pressure (mmHg) |
| `cholesterol`          | Float       | Total cholesterol mg/dL |
| `has_diabetes`         | Integer     | Whether patient has diabetes (0 = No, 1 = Yes) |
| `has_hypertension`     | Integer     | Whether patient has hypertension (0 = No, 1 = Yes) |
| `smoker`               | String      | Smoking status (`none`, `light`, `moderate`, `heavy`) |
| `exercise_frequency`   | String      | Weekly exercise level (`none`, `light`, `moderate`, `high`) |
| `previous_hospitalizations` | Integer | Number of hospitalizations in the past 5 years |
| `risk_label`           | Integer     | ML target: hospitalization risk (0 = Low, 1 = High) |

---

# 🧪 2. Detailed Field Definitions

## **1. age**
- **Type:** Integer  
- **Range:** 18–90  
- **Meaning:** Current age of patient.  
- **Clinical note:** Older patients generally have higher hospitalization probability.

---

## **2. bmi**
- **Type:** Float  
- **Range:** ~15–45  
- **Meaning:** Calculated as weight (kg) / height² (m²).  
- **Categories (informal):**
  - <18.5 → Underweight  
  - 18.5–24.9 → Normal  
  - 25–29.9 → Overweight  
  - ≥30 → Obese  

---

## **3. blood_pressure**
- **Type:** Float  
- **Meaning:** Systolic blood pressure (SBP).  
- **Clinical ranges:**
  - <120 → Normal  
  - 120–139 → Pre-hypertension  
  - ≥140 → Hypertension  

---

## **4. cholesterol**
- **Type:** Float  
- **Meaning:** Total cholesterol mg/dL.  
- **Ranges:**
  - <200 → Desirable  
  - 200–239 → Borderline  
  - ≥240 → High  

---

## **5. has_diabetes**
- **Type:** Integer (Binary)  
- **Values:**  
  - `0` → No  
  - `1` → Yes  
- **Meaning:** Indicates whether patient has clinically diagnosed diabetes.  
- **Importance:** Strong predictor of chronic disease outcomes.

---

## **6. has_hypertension**
- **Type:** Integer (Binary)  
- **Values:**  
  - `0` → No  
  - `1` → Yes  
- **Meaning:** Approximates chronic hypertension diagnosis.  
- **Importance:** Common cause of cardiovascular complications.

---

## **7. smoker**
- **Type:** Categorical (String)  
- **Allowed Values:**  
  - `none`  
  - `light`  
  - `moderate`  
  - `heavy`  
- **Meaning:** Self-reported smoking level.  
- **Notes:** Encoded later during feature engineering (one-hot or ordinal).

---

## **8. exercise_frequency**
- **Type:** Categorical (String)  
- **Allowed Values:**  
  - `none`  
  - `light`  
  - `moderate`  
  - `high`  
- **Meaning:** Weekly exercise routine intensity.  
- **Importance:** Protective factor; inverse relationship with hospitalization risk.

---

## **9. previous_hospitalizations**
- **Type:** Integer  
- **Range:** 0–10  
- **Meaning:** Number of previous hospital admissions in the past 5 years.  
- **Importance:** Strongest immediate predictor of readmission.

---

## **10. risk_label**
- **Type:** Integer (Binary)  
- **Values:**  
  - `0` → Low hospitalization risk  
  - `1` → High hospitalization risk  
- **Meaning:** Prediction target for ML models.  
- **Generated:**  
  - Based on clinical risk scoring logic  
  - Tuned to produce balanced synthetic labels  
- **Used for:**  
  - Classification tasks  
  - AutoML  
  - XGBoost / sklearn models  
  - Evaluation metrics (AUC, F1, Recall)

---

# 🏥 3. Dataset Notes

### ✔ 100% synthetic — no real patient data  
Data is AI-generated using:
- Controlled distributions  
- Realistic clinical correlations (e.g., BMI ↔ BP, diabetes ↔ cholesterol)  
- Balanced risk labels for ML training  

### ✔ ML-Ready  
The dataset supports:
- BigQuery ML  
- Vertex AutoML Tables  
- Custom sklearn/XGBoost pipelines  

### ✔ No PII  
All fields are non-identifying and safe for public demos.

---

# 🔧 4. Next Steps

This data dictionary supports:
- `schema.md`  
- Feature engineering (`bq_feature_engineering.sql`)  
- Model training documentation  
- Pitch deck "Data & Ethics" section  

---

# ✔ End of Document
