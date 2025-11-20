# 🧬 HealthPredict Pro – Feature Catalog

This document lists all **input features** used for modeling, including both original and engineered fields.

---

## 1. Original Input Features (from `patients_raw`)

| Feature                    | Type      | Description |
|----------------------------|-----------|-------------|
| `age`                      | Numeric   | Patient age in years |
| `bmi`                      | Numeric   | Body Mass Index |
| `blood_pressure`           | Numeric   | Systolic BP (mmHg) |
| `cholesterol`              | Numeric   | Total cholesterol (mg/dL) |
| `has_diabetes`             | Binary    | 0 = No, 1 = Yes |
| `has_hypertension`         | Binary    | 0 = No, 1 = Yes |
| `smoker`                   | Categorical | `none`, `light`, `moderate`, `heavy` |
| `exercise_frequency`       | Categorical | `none`, `light`, `moderate`, `high` |
| `previous_hospitalizations`| Numeric   | Count in last 5 years |
| `risk_label`               | Binary    | ML target (0 = low risk, 1 = high risk) |

> Note: `risk_label` is the **target**, not a model feature.

---

## 2. Engineered Features (from `patients_engineered`)

### 2.1 Demographic & Clinical Buckets

| Feature         | Type        | Description |
|-----------------|-------------|-------------|
| `age_bucket`    | Categorical | Age grouped into bands (18–29, 30–44, 45–59, 60–74, 75+) |
| `bmi_category`  | Categorical | BMI grouped into underweight / normal / overweight / obese |
| `blood_pressure_category` | Categorical | BP grouped into normal / prehypertension / hypertension |
| `cholesterol_category`    | Categorical | Cholesterol grouped into desirable / borderline / high |

These buckets help models capture **non-linear clinical patterns**.

---

### 2.2 Lifestyle Scores

| Feature          | Type      | Description |
|------------------|-----------|-------------|
| `exercise_score` | Numeric   | Ordinal score 0–3 derived from `exercise_frequency` |
| `smoker_score`   | Numeric   | Ordinal score 0–3 derived from `smoker` |

- Higher `smoker_score` → higher risk  
- Higher `exercise_score` → lower risk

---

### 2.3 Comorbidities & History

| Feature             | Type    | Description |
|---------------------|---------|-------------|
| `comorbidity_count` | Numeric | Count of chronic conditions (currently diabetes + hypertension) |

This captures multi-disease burden, which is strongly associated with hospitalization.

---

### 2.4 Composite Risk Signal

| Feature                  | Type    | Description |
|--------------------------|---------|-------------|
| `engineered_risk_signal` | Numeric | Weighted combination of age, bmi, BP, smoking, comorbidities, exercise, and previous hospitalizations |

This is **not** the final prediction output, but a **hand-crafted signal** that can help:

- Provide an additional informative feature.
- Act as a sanity check against learned model behavior.

---

## 3. Features Used Per Model Type

### BigQuery ML / AutoML
- Can ingest:
  - All numeric features
  - One-hot encoded categorical features (if needed)
- Typical set:
  - `age`, `bmi`, `blood_pressure`, `cholesterol`
  - `exercise_score`, `smoker_score`
  - `comorbidity_count`, `previous_hospitalizations`
  - `engineered_risk_signal`
  - Encoded buckets: `age_bucket`, `bmi_category`, `blood_pressure_category`, `cholesterol_category`

### Tree-Based Custom Models (e.g., XGBoost)
- Handle non-linear relationships well.
- Can use:
  - Raw numeric features
  - Ordinal scores
  - Buckets (optionally one-hot encoded)

---

## 4. Design Principles

1. **Clinically interpretable**  
   - Every feature has a clear medical meaning.

2. **Simple but expressive**  
   - Avoid extremely complex transformations that are hard to explain.

3. **Reproducible**  
   - Entire feature set is generated via `bq_feature_engineering.sql`.

4. **Safe for synthetic data**  
   - No PII; focuses solely on risk-related patterns.

