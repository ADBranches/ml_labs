# 🏥 HealthPredict Pro

**HealthPredict Pro** is an end-to-end, cloud-native ML system that predicts a patient's short-term hospitalization risk using health, demographic, and lifestyle data.

It is designed to:
- Support **clinicians** with early risk signals
- Help **patients** understand their risk profile
- Show **donors & partners** a production-grade AI healthcare pipeline built on Google Cloud

---

## 🚀 High-Level Architecture

- **Frontend:** React / Next.js web app for patient input, risk visualization, and insights
- **Backend:** FastAPI service running on Cloud Run, calling Vertex AI for predictions
- **ML Stack:** BigQuery + BigQuery ML + Vertex AI (AutoML + custom models)
- **Data:** Synthetic, privacy-safe patient health records
- **MLOps:** Cloud Logging, Cloud Monitoring, Vertex AI Model Registry, (optional) scheduled retraining

See: `docs/architecture/system_architecture.md` for diagrams.

---

## 🧱 Tech Stack

- **Cloud:** Google Cloud Platform (BigQuery, Vertex AI, Cloud Run, Cloud Storage)
- **Backend:** Python, FastAPI, Docker
- **Frontend:** React / Next.js, TypeScript (or JavaScript), TailwindCSS (optional)
- **ML:** BigQuery ML, scikit-learn / XGBoost, Vertex AI
- **Monitoring:** Cloud Logging & Monitoring, BigQuery dashboards

---

## 📂 Repository Structure

```bash
backend/    # FastAPI + Vertex AI integration
frontend/   # Next.js-based web UI
ml/         # Data, notebooks, training, evaluation
infra/      # GCP setup, scripts, Terraform (optional)
docs/       # Architecture, ML docs, pitch materials
.github/    # CI/CD workflows

