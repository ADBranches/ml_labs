# 🚀 Deployment Strategy — Vertex AI Model Registry & Endpoint

This document explains how the chosen model (XGBoost v1) is registered, deployed, and served for real-time predictions through a Vertex AI Online Prediction Endpoint.

---

# 1. Overview

The deployment pipeline consists of:

1. Upload model artifacts → Google Cloud Storage  
2. Register the model → Vertex AI Model Registry  
3. Deploy model → Vertex AI Endpoint  
4. Validate predictions using sample payloads  

The backend (FastAPI) will communicate with this endpoint for all real-time scoring.

---

# 2. Artifact Storage (GCS)

Model artifacts are stored in:

gs://PROJECT_ID-healthpredict-artifacts/models/xgb_model_v1/


Contents include:

- `model.bst` or `model.pkl`  
- `feature_metadata.json`  
- `requirements.txt` (if needed)  
- `preprocessing_config.json`

---

# 3. Registering the Model into Vertex Registry

Using Python SDK:

```python
from google.cloud import aiplatform

aiplatform.init(project=PROJECT_ID, location=REGION)

model = aiplatform.Model.upload(
    display_name="healthpredict-xgb-v1",
    artifact_uri="gs://PROJECT_ID-healthpredict-artifacts/models/xgb_model_v1",
    serving_container_image_uri="us-docker.pkg.dev/vertex-ai/prediction/xgboost-cpu.1-7:latest",
)


This registers the model and makes it visible in the Vertex console.

## 4. Endpoint Deployment

endpoint = model.deploy(
    machine_type="n1-standard-2",
    traffic_split={"0": 100},
)

This creates a public (or private) endpoint capable of processing prediction requests.