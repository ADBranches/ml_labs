
---

# ✅ **2️⃣ `ml/registry/endpoint_configuration.md`**

```markdown
# ⚙️ Endpoint Configuration — Vertex AI Online Prediction

This document defines how the deployed model endpoint is configured, accessed, and utilized by the backend API.

---

# 1. Endpoint Properties

| Property | Value |
|----------|-------|
| **Model Name** | `healthpredict-xgb-v1` |
| **Endpoint Name** | `healthpredict-endpoint-v1` |
| **Region** | `us-central1` |
| **Machine Type** | `n1-standard-2` |
| **Scaling** | Auto-scale |
| **Traffic Split** | 100% to version 1 |

---

# 2. Request Format (Backend → Vertex)

Example payload sent from FastAPI:

```json
{
  "instances": [
    {
      "age": 55,
      "bmi": 31.2,
      "blood_pressure": 145,
      "cholesterol": 230,
      "has_diabetes": 1,
      "has_hypertension": 1,
      "exercise_score": 1,
      "smoker_score": 2,
      "previous_hospitalizations": 2,
      "comorbidity_count": 2,
      "engineered_risk_signal": 12.7
    }
  ]
}
