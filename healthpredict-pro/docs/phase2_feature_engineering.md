
---

# 📄 **FILE:**

`docs/project/phase2_feature_engineering.md`

---

```markdown
# 🟡 HealthPredict Pro — Phase 2: Feature Engineering & Data Pipeline  
**Directory:** `docs/project/`

---

# 📌 Phase Overview

Phase 2 transforms the **raw synthetic dataset** into a **medically meaningful, machine-learning-ready dataset** through SQL engineering, categorical mappings, and automated preprocessing pipelines.

This stage proves to donors, clinicians, and technical reviewers that the team understands:  
- Healthcare domain signals  
- Feature importance  
- Data quality standards  
- ML pipeline best practices  

---

# 🎯 Objectives (Day 4–5)

### 1. Transform raw patient data  
Perform cleaning, type enforcement, and logical consistency checks in BigQuery.

### 2. Create medically meaningful engineered features  
Convert raw numerical inputs into domain-relevant categories such as:
- Age group  
- BMI category  
- Lifestyle level  
- Condition indicators  

### 3. Build SQL + Python preprocessing pipelines  
Ensure repeatable feature engineering for AutoML, custom models, and MLOps retraining.

### 4. Produce a clean ML-ready dataset  
Store this engineered dataset inside BigQuery for downstream model training.

---

# 🧭 Steps for Phase 2

### **Step 1 — BigQuery SQL Transformation**  
Process raw data into structured, consistent formats.

SQL file:  
`ml/preprocessing/bq_feature_engineering.sql`

This script will:
- Standardize feature types  
- Create categorization columns  
- Add medically-informed feature bins  
- Ensure target variable structure  

---

### **Step 2 — Create Engineered Dataset Table**  
Output table:  
`healthpredict.patients_engineered`

This table is used by:
- BigQuery ML  
- Vertex AutoML  
- Custom ML scripts  

---

### **Step 3 — Feature Categorization Rules**  
| Feature | Categories | Why |
|---------|------------|-----|
| **Age Group** | young / middle / senior | Risk increases with age |
| **BMI Category** | underweight / normal / overweight / obese | Common clinical classification |
| **Exercise Frequency** | none / light / moderate / heavy | Lifestyle risk indicator |
| **Blood Pressure Levels** | normal / elevated / high | Hypertension risk |
| **Risk Label** | 0 / 1 | Target variable |

Full definitions included in:  
`ml/preprocessing/features.md`

---

### **Step 4 — Automated Preprocessing Job**  
A Python pipeline that:
- Pulls raw data  
- Applies the SQL or Python transformations  
- Validates column counts, types, distributions  
- Saves final dataset for modeling  

Python pipeline file:  
`ml/preprocessing/preprocess_pipeline.py`

---

# 📁 Deliverables for Phase 2

| Deliverable | File Location | Purpose |
|-------------|----------------------------|---------|
| Feature Engineering SQL | `ml/preprocessing/bq_feature_engineering.sql` | BigQuery transformation pipeline |
| Python Preprocessing Script | `ml/preprocessing/preprocess_pipeline.py` | Programmatic feature engineering |
| Feature Documentation | `ml/preprocessing/features.md` | Human-readable description |
| Engineered Dataset Table | BigQuery → `patients_engineered` | Final ML-ready dataset |

---

# 🧪 Quality Verification

Before moving to Phase 3, verify:

### ✔ Column count is consistent  
### ✔ All categorical values fall within defined categories  
### ✔ No missing values for required fields  
### ✔ Target label properly balanced  
### ✔ Numerical fields within clinical ranges  

Record all findings in:  
`ml/preprocessing/verification_report.md`

---

# 🌍 Impact of Phase 2

This phase demonstrates that the HealthPredict Pro team understands:

- Medical reasoning  
- Feature importance  
- Data engineering best practices  
- ML input requirements  

To donors and judges, this shows **credible domain knowledge** and **technical maturity**, strengthening investment confidence.

---

# 📚 Next Step  
Proceed to:  
`docs/project/phase3_model_training.md` → **Phase 3: Model Training (AutoML + Custom ML)**

```

---

If you'd like, I can now generate:

### ✔ `ml/preprocessing/bq_feature_engineering.sql`

### ✔ `ml/preprocessing/features.md`

### ✔ `ml/preprocessing/preprocess_pipeline.py`

### ✔ `docs/project/phase3_model_training.md`

Just say:
**“Next file: bq_feature_engineering.sql”**
or
**“Next file: phase3”**
