# 🟠 Phase 5 — Backend API (Cloud Run + Vertex AI Integration)

This phase completes the backend of HealthPredict Pro with production-grade quality.  
The backend is now fully cloud-ready, secure, logged, and connected to Vertex AI.

---

# 1. Objectives

- Build FastAPI backend
- Add CORS + environment configuration
- Add logging middleware
- Add centralized error handling
- Connect to Vertex AI Online Prediction Endpoint
- Deploy backend to Cloud Run
- Add backend CI workflow

---

# 2. Work Completed

## ✔ Environment & Config
- `.env.example`
- `core/config.py`
- `core/cors.py`

## ✔ Base FastAPI Application
- `main.py`
- `/api/v1/predict` route
- Pydantic models for request/response

## ✔ Logging Middleware
- `middleware/request_logger.py`

## ✔ Error Handling
- `infrastructure/error_handler.py`

## ✔ Vertex AI Integration
- `services/vertex_ai_client.py`
- Live call to deployed model endpoint

## ✔ Cloud Run Deployment
- `infra/gcp/cloudrun_deploy_backend.sh`

## ✔ CI/CD
- `.github/workflows/backend-ci.yml`

---

# 3. Backend Flow Diagram (Production Flow)

```mermaid
flowchart LR
    A[Frontend (Next.js)] --> B[FastAPI Backend /api/v1/predict]
    B --> C[Request Logger Middleware]
    C --> D[Error Handler Layer]
    D --> E[Vertex AI Endpoint]
    E --> D
    D --> C
    C --> B
    B --> A
