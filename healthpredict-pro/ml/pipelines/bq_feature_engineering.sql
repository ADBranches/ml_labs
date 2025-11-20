-- ---------------------------------------------------------
-- HealthPredict Pro – BigQuery Feature Engineering Pipeline
-- ---------------------------------------------------------
-- INPUT  : `PROJECT_ID.DATASET.patients_raw`
-- OUTPUT : `PROJECT_ID.DATASET.patients_engineered`
--
-- NOTE:
--  - Replace `PROJECT_ID` and `DATASET` with your actual IDs.
--  - This script is idempotent (CREATE OR REPLACE).
-- ---------------------------------------------------------

CREATE OR REPLACE TABLE `PROJECT_ID.DATASET.patients_engineered` AS
SELECT
  -- Primary key (if exists) or synthetic row id
  GENERATE_UUID() AS patient_id,

  -- Original features
  age,
  bmi,
  blood_pressure,
  cholesterol,
  has_diabetes,
  has_hypertension,
  smoker,
  exercise_frequency,
  previous_hospitalizations,
  risk_label,

  -- -----------------------------
  -- 1. AGE BUCKETS
  -- -----------------------------
  CASE
    WHEN age < 30 THEN '18-29'
    WHEN age BETWEEN 30 AND 44 THEN '30-44'
    WHEN age BETWEEN 45 AND 59 THEN '45-59'
    WHEN age BETWEEN 60 AND 74 THEN '60-74'
    ELSE '75+'
  END AS age_bucket,

  -- -----------------------------
  -- 2. BMI CATEGORY
  -- -----------------------------
  CASE
    WHEN bmi < 18.5 THEN 'underweight'
    WHEN bmi < 25 THEN 'normal'
    WHEN bmi < 30 THEN 'overweight'
    ELSE 'obese'
  END AS bmi_category,

  -- -----------------------------
  -- 3. BLOOD PRESSURE CATEGORY
  --    Using systolic BP thresholds
  -- -----------------------------
  CASE
    WHEN blood_pressure < 120 THEN 'normal'
    WHEN blood_pressure < 140 THEN 'prehypertension'
    ELSE 'hypertension'
  END AS blood_pressure_category,

  -- -----------------------------
  -- 4. CHOLESTEROL CATEGORY
  -- -----------------------------
  CASE
    WHEN cholesterol < 200 THEN 'desirable'
    WHEN cholesterol < 240 THEN 'borderline'
    ELSE 'high'
  END AS cholesterol_category,

  -- -----------------------------
  -- 5. EXERCISE SCORE (ORDINAL)
  -- -----------------------------
  CASE exercise_frequency
    WHEN 'none' THEN 0
    WHEN 'light' THEN 1
    WHEN 'moderate' THEN 2
    WHEN 'high' THEN 3
    ELSE 0
  END AS exercise_score,

  -- -----------------------------
  -- 6. SMOKER SCORE (ORDINAL)
  -- -----------------------------
  CASE smoker
    WHEN 'none' THEN 0
    WHEN 'light' THEN 1
    WHEN 'moderate' THEN 2
    WHEN 'heavy' THEN 3
    ELSE 0
  END AS smoker_score,

  -- -----------------------------
  -- 7. COMORBIDITY COUNT
  -- -----------------------------
  (CAST(has_diabetes AS INT64)
   + CAST(has_hypertension AS INT64)) AS comorbidity_count,

  -- -----------------------------
  -- 8. SIMPLE RISK SIGNAL (FEATURE)
  --    Not the final label; used as a numeric feature.
  -- -----------------------------
  (
    0.03 * age
    + 0.05 * bmi
    + 0.04 * blood_pressure
    + 0.03 * (CASE smoker
                WHEN 'none' THEN 0
                WHEN 'light' THEN 1
                WHEN 'moderate' THEN 2
                WHEN 'heavy' THEN 3
                ELSE 0
              END)
    + 0.5  * CAST(has_diabetes AS INT64)
    + 0.4  * CAST(has_hypertension AS INT64)
    + 0.8  * previous_hospitalizations
    - 0.3  * (CASE exercise_frequency
                WHEN 'none' THEN 0
                WHEN 'light' THEN 1
                WHEN 'moderate' THEN 2
                WHEN 'high' THEN 3
                ELSE 0
              END)
  ) AS engineered_risk_signal

FROM `PROJECT_ID.DATASET.patients_raw`;
