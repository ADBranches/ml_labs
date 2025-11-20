
---

# ✅ **3️⃣ `ml/registry/endpoint_tests.md`**

```markdown
# 🧪 Vertex Endpoint Test Suite

This file documents how to manually validate the Vertex AI endpoint before connecting it to the backend.

---

# 1. Test Using Python

```python
from google.cloud import aiplatform

aiplatform.init(project=PROJECT_ID, location=REGION)

endpoint = aiplatform.Endpoint(endpoint_name=ENDPOINT_ID)

sample_instance = {
    "age": 50,
    "bmi": 29.5,
    "blood_pressure": 130,
    "cholesterol": 210,
    "has_diabetes": 0,
    "has_hypertension": 1,
    "exercise_score": 2,
    "smoker_score": 1,
    "previous_hospitalizations": 1,
    "comorbidity_count": 1,
    "engineered_risk_signal": 8.4
}

response = endpoint.predict([sample_instance])
print(response)
