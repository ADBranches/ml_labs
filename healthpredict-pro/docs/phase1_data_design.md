# 🏥 HealthPredict Pro — Phase 1: Data Design & Generation  
**Directory:** `docs/project/`

---

# 📌 Phase Overview

Phase 1 builds the **entire data foundation** for HealthPredict Pro.  
It ensures the dataset is **well designed, ethically sound, reproducible**, and ready for downstream ML tasks.

This documentation provides transparency and credibility for:
- Donors & NGOs  
- Judges & evaluators  
- Clinicians reviewing the concept  
- Workshop participants  
- Future developers  

---

# 🎯 Objectives (Day 2–3)

### 1. Design the health dataset schema  
Define all columns, data types, acceptable ranges, and medical meaning.

### 2. Generate synthetic patient health records  
Use statistical distributions + Faker + medical logic.  
**No real patient data is used.**

### 3. Create data dictionary & ethics documentation  
Human-readable descriptions of all fields (age, BMI, blood pressure…).  
Document privacy protection & responsible AI choices.

### 4. Upload dataset to BigQuery  
Dataset: `healthpredict`  
Tables:  
- `patients_raw`  
- `patients_engineered`

### 5. Verify schema & value distributions  
Check for:
- Outliers  
- Balanced labels  
- Valid categorical levels  
- Correct numeric ranges  

---

# 📁 Deliverables for Phase 1

### ✔ Synthetic Dataset (5,000–20,000 records)
Generated using the script:  
`ml/data/generate_synthetic_data.py`

Exported file:  
`ml/data/synthetic_patient_data.csv`

### ✔ BigQuery Tables
| Table Name | Purpose |
|-----------|----------|
| `patients_raw` | Raw uploaded CSV |
| `patients_engineered` | Feature-engineered dataset for ML |

### ✔ Documentation Files
| File | Description |
|------|-------------|
| `ml/data/schema.md` | Data dictionary & field definitions |
| `ml/data/ethics.md` | Ethical considerations & privacy |
| `ml/data/distribution_report.md` | Value distribution checks |

---

# 📊 Dataset Schema (Summary)

The dataset contains a combination of **demographics**, **clinical indicators**, and **lifestyle factors**:

| Feature | Type | Reason / Medical Relevance |
|---------|------|----------------------------|
| age | INTEGER | Strong predictor of hospital risk |
| bmi | FLOAT | Obesity/underweight risk |
| blood_pressure | FLOAT | Hypertension risk |
| cholesterol | FLOAT | Cardiovascular risk |
| has_diabetes | BOOLEAN | Chronic condition risk |
| has_hypertension | BOOLEAN | BP-related complications |
| smoker | BOOLEAN | High-impact lifestyle risk |
| exercise_frequency | STRING | Preventive lifestyle factor |
| previous_hospitalizations | INTEGER | Predictive recurrence variable |
| hospitalization_risk | BOOLEAN | Target label (0/1) |

Full descriptions are in `schema.md`.

---

# 🧪 Synthetic Data Generation

We use:
- **NumPy** for distribution modeling  
- **Faker** for demographic diversity  
- **Controlled medical logic** (e.g., hypertensive patients have higher expected BP)  
- **Label generation rules** to produce realistic risk patterns  

Script file:  
`ml/data/generate_synthetic_data.py`

This ensures:
- Dataset realism  
- Zero privacy concerns  
- Repeatability  

---

# ☁️ Uploading to BigQuery (Steps)

### Step 1 — Create dataset  
`healthpredict`

### Step 2 — Upload CSV  
- File: `synthetic_patient_data.csv`  
- Target table: `patients_raw`

### Step 3 — Run feature engineering SQL  
File: `ml/pipelines/bq_feature_engineering.sql`  
Output: `patients_engineered`

### Step 4 — Validate schema  
Check:
- Column types  
- Null distribution  
- Categorical levels  
- Logical ranges (e.g., age 18–90)

---

# 📈 Distribution Verification

Results are recorded in:

`ml/data/distribution_report.md`

This includes:
- Histogram snapshots  
- Summary statistics  
- Risk label class balance  

Why this matters:
- Data quality directly affects ML performance  
- Donors need trust in data foundations  
- Clinicians need confidence the system is medically coherent  

---

# 🛡 Ethical & Transparency Notes

See: `ml/data/ethics.md`

Key guarantees:
- 100% synthetic data  
- Zero personally identifiable information  
- Clear documentation of generation process  
- Responsible ML practices (transparency, fairness, reproducibility)  
