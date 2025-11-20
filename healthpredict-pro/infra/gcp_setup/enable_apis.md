# ☁️ GCP Setup — Enabling Required APIs  
**Directory:** `infra/gcp_setup/`

This document defines the APIs required to run HealthPredict Pro on Google Cloud.

---

# 🎯 Purpose

HealthPredict Pro depends on several Google Cloud services for:
- Data storage  
- Model training  
- Deployment  
- Monitoring  
- Serverless backend hosting  

Enabling the correct APIs ensures the infrastructure is fully functional before development begins.

---

# ✅ Required Google Cloud APIs

Enable the following APIs in the GCP console or via CLI:

| Service | API Name |
|--------|----------|
| BigQuery | `bigquery.googleapis.com` |
| Cloud Storage | `storage.googleapis.com` |
| Vertex AI | `aiplatform.googleapis.com` |
| Cloud Run | `run.googleapis.com` |
| Cloud Build | `cloudbuild.googleapis.com` |
| IAM Service Usage | `iam.googleapis.com` |
| Cloud Logging | `logging.googleapis.com` |
| Cloud Monitoring | `monitoring.googleapis.com` |
| Cloud Scheduler | `cloudscheduler.googleapis.com` |

---

# 📌 CLI Enabling Reference

This is the **list of required APIs** (no commands here — commands belong in code files).

---

# 🔐 IAM Roles Required

| Role | Purpose |
|------|---------|
| BigQuery Admin | Dataset + table creation |
| Vertex AI Admin | Model training + deployment |
| Storage Admin | Bucket + artifact storage |
| Cloud Run Admin | Backend deployment |
| Service Account User | Secure service access |

---

# 🧩 Outcome

After this step:
- All APIs are enabled  
- Permissions are ready  
- Cloud environment is fully prepared for development  

This ensures smooth progress for Phase 1–Phase 9.


