
---

# 🚀 Architectural Principles

### 1. **Separation of Concerns**
Each layer is isolated:
- ML pipelines  
- Backend inference  
- Frontend UI  
- Infrastructure configs  

### 2. **Scalable ML Workflow**
Supports:
- AutoML  
- Custom models  
- Registry + deployment  
- Monitoring + retraining  

### 3. **Production-Ready Cloud Architecture**
Cloud-native services such as:
- BigQuery  
- Vertex AI  
- Cloud Run  

### 4. **Developer Productivity**
- Clear directories  
- Well-labeled documentation  
- Modular folder layout  

---

# 🧩 How Developers Should Navigate the Repo

| Area | Purpose |
|-------|---------|
| `ml/data/` | Raw + synthetic data + schema |
| `ml/preprocessing/` | Feature engineering + transformation logic |
| `ml/training/` | Model training scripts |
| `ml/evaluation/` | Metrics + evaluation reports |
| `ml/registry/` | Model registration + deployment configs |
| `backend/api/` | FastAPI endpoints |
| `backend/services/` | Vertex AI request handlers |
| `frontend/pages/` | UI screens |
| `frontend/components/` | Reusable UI components |
| `infra/` | Cloud setup + IAM + deployment |

---

# 🎯 Outcome

This structure guarantees:
- Clean project navigation  
- Clear responsibilities  
- Donor-friendly clarity  
- Developer efficiency  
- Easy onboarding for new team members  

