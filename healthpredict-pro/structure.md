## 📁 1. Repository Structure (Top-Level)

```bash
healthpredict-pro/
├── README.md
├── LICENSE
├── .gitignore
├── .env.example
├── docker-compose.yml                # Optional: local dev stack
├── backend/                          # FastAPI + Cloud Run service
│   ├── README.md
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── main.py
│   ├── healthpredict/
│   │   ├── __init__.py
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   └── v1/
│   │   │       ├── __init__.py
│   │   │       └── routes.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── logging_config.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   └── patient.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   └── vertex_ai_client.py
│   │   └── tests/
│   │       ├── __init__.py
│   │       └── test_api.py
│   └── scripts/
│       └── run_local.sh
│
├── frontend/                         # React / Next.js app
│   ├── README.md
│   ├── package.json
│   ├── next.config.js
│   ├── tsconfig.json (or jsconfig.json)
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── logo.svg
│   │   └── mock-screenshots/
│   └── src/
│       ├── pages/ (or app/ for Next 13+)
│       │   ├── index.tsx
│       │   └── predict.tsx
│       ├── components/
│       │   ├── Layout.tsx
│       │   ├── PatientForm.tsx
│       │   ├── RiskResultCard.tsx
│       │   └── Charts/
│       ├── lib/
│       │   └── apiClient.ts
│       └── styles/
│           └── globals.css
│
├── ml/                               # Data + training + evaluation
│   ├── README.md
│   ├── notebooks/
│   │   ├── 01_exploration.ipynb
│   │   ├── 02_feature_engineering.ipynb
│   │   └── 03_model_training.ipynb
│   ├── data/
│   │   ├── synthetic_patient_data_sample.csv
│   │   └── schema.md
│   ├── pipelines/
│   │   ├── bq_feature_engineering.sql
│   │   ├── train_custom_model.py
│   │   └── evaluate_model.py
│   └── vertex/
│       ├── automl_training.py
│       ├── deploy_to_vertex.py
│       └── model_card.md
│
├── infra/                            # GCP infra & deployment
│   ├── README.md
│   ├── gcp/
│   │   ├── enable_apis.sh
│   │   ├── setup_service_accounts.sh
│   │   └── cloudrun_deploy_backend.sh
│   ├── terraform/ (optional if you use IaC)
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── outputs.tf
│   └── k8s/ (optional, if you ever move off Cloud Run)
│
├── docs/
│   ├── README.md
│   ├── architecture/
│   │   ├── system_architecture.md
│   │   └── mermaid_architecture.md
│   ├── ui/
│   │   └── wireframes_overview.md
│   ├── ml/
│   │   └── model_explanation.md
│   └── pitch/
│       ├── pitch_deck_links.md
│       └── demo_script.md
│
└── .github/
    └── workflows/
        ├── backend-ci.yml
        ├── frontend-ci.yml
        └── lint-and-tests.yml
```

---

## 📌 2. Root `README.md`

````markdown
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
````

Each subfolder has its own `README.md` with setup instructions.

---

## ⚙️ Prerequisites

* Google Cloud project with billing enabled
* Python 3.10+
* Node.js (LTS)
* `gcloud` CLI installed and authenticated
* (Optional) Docker installed locally

---

## 🔧 Quickstart (Local Development)

### 1. Clone the repo

```bash
git clone https://github.com/<your-org>/healthpredict-pro.git
cd healthpredict-pro
```

### 2. Backend (FastAPI)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 3. Frontend (Next.js)

```bash
cd ../frontend
npm install
npm run dev
```

Then open: `http://localhost:3000`

---

## ☁️ Cloud Deployment (High-Level)

1. Enable GCP APIs (BigQuery, Vertex AI, Cloud Run, Cloud Build)
2. Upload synthetic data to BigQuery
3. Train model via `ml/pipelines` or Vertex AI AutoML
4. Deploy model to Vertex AI Endpoint
5. Build & deploy `backend/` to Cloud Run
6. Configure frontend to call Cloud Run API URL
7. Set up monitoring & dashboards

See: `infra/README.md` for detailed commands.

---

## 📄 License
Apache 2.0

---

## 🤝 Contributions

* Issues & PRs are welcome.
* This project is intended as an educational + demo system; not a medical device.

````

---

## 🧩 3. `backend/README.md`

```markdown
# 🧠 HealthPredict Pro – Backend (FastAPI + Vertex AI)

This service exposes a REST API that:
- Accepts patient data
- Calls **Vertex AI Endpoint** for risk prediction
- Returns risk score, risk level, and recommendations

It is designed to run locally and on **Cloud Run**.

---

## 📂 Structure

```bash
backend/
├── main.py                 # FastAPI entrypoint
├── requirements.txt
├── Dockerfile
├── healthpredict/
│   ├── api/
│   │   └── v1/routes.py    # /predict, /health endpoints
│   ├── core/
│   │   ├── config.py       # settings: project_id, endpoint_id, etc.
│   │   └── logging_config.py
│   ├── models/
│   │   └── patient.py      # Pydantic schemas
│   ├── services/
│   │   └── vertex_ai_client.py  # Calls Vertex AI endpoint
│   └── tests/
│       └── test_api.py
└── scripts/
    └── run_local.sh
````

---

## ⚙️ Local Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` or use environment variables:

* `GCP_PROJECT_ID`
* `GCP_LOCATION` (e.g. `us-central1`)
* `VERTEX_ENDPOINT_ID`
* `BACKEND_PORT` (optional, default: 8000)

Run the server:

```bash
uvicorn main:app --reload --port 8000
```

---

## 🔌 API Overview

* `GET /` – Health check
* `POST /api/v1/predict` – Accepts patient payload → returns risk score + recommendations

See OpenAPI docs at: `http://localhost:8000/docs`

---

## ☁️ Deploy to Cloud Run (High-Level)

1. Build container:

   ```bash
   gcloud builds submit --tag gcr.io/$GCP_PROJECT_ID/healthpredict-backend
   ```

2. Deploy:

   ```bash
   gcloud run deploy healthpredict-backend \
     --image gcr.io/$GCP_PROJECT_ID/healthpredict-backend \
     --region $GCP_LOCATION \
     --allow-unauthenticated
   ```

3. Note the **Cloud Run URL** and configure frontend to use it.

````

---

## 💻 4. `frontend/README.md`

```markdown
# 🌐 HealthPredict Pro – Frontend (React / Next.js)

The frontend is the **public-facing web app** where:
- Users enter patient data
- Clinicians review risk scores
- Donors see dashboards & impact visuals

---

## 📂 Structure

```bash
frontend/
├── package.json
├── next.config.js
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── mock-screenshots/
└── src/
    ├── pages/ (or app/)
    │   ├── index.tsx            # Landing page
    │   └── predict.tsx          # Prediction flow
    ├── components/
    │   ├── Layout.tsx
    │   ├── PatientForm.tsx
    │   ├── RiskResultCard.tsx
    │   └── Charts/
    ├── lib/
    │   └── apiClient.ts         # HTTP client for backend API
    └── styles/
        └── globals.css
````

---

## ⚙️ Setup

```bash
cd frontend
npm install
npm run dev
```

Default dev URL: `http://localhost:3000`

---

## 🔌 Backend Integration

Create a `.env.local`:

```bash
NEXT_PUBLIC_API_BASE_URL=https://<your-cloud-run-backend-url>
```

The `apiClient` uses this base URL to call `/api/v1/predict`.

---

## 🧪 Suggested Pages

* `/` – Landing (overview, CTA, “Start Assessment”)
* `/predict` – Patient input & results
* `/dashboard` – Aggregate risk insights for demo/judges

---

## 🎨 UI Notes

* Healthcare theme (blue/teal)
* Clear risk indicators (Low/Medium/High)
* Simple charts for impact storytelling (risk distribution, factors)

````

---

## 🤖 5. `ml/README.md`

```markdown
# 🤖 HealthPredict Pro – ML & Data

This folder contains:
- Synthetic data generation
- Feature engineering
- Model training & evaluation
- Vertex AI integration

---

## 📂 Structure

```bash
ml/
├── notebooks/
│   ├── 01_exploration.ipynb
│   ├── 02_feature_engineering.ipynb
│   └── 03_model_training.ipynb
├── data/
│   ├── synthetic_patient_data_sample.csv
│   └── schema.md
├── pipelines/
│   ├── bq_feature_engineering.sql
│   ├── train_custom_model.py
│   └── evaluate_model.py
└── vertex/
    ├── automl_training.py
    ├── deploy_to_vertex.py
    └── model_card.md
````

---

## 🔢 Data & Features

* **Source:** Synthetic patient health records
* **Core features:** age, BMI, blood pressure, cholesterol, diabetes, hypertension, smoking, exercise, previous hospitalizations
* **Target:** Binary risk label (hospitalization risk in next 6 months)

See `data/schema.md` for detailed schema.

---

## 🧪 Workflow (High-Level)

1. Generate or load synthetic data → `data/`
2. Explore & clean → `notebooks/01_exploration.ipynb`
3. Feature engineering (SQL + Python) → `bq_feature_engineering.sql`
4. Train:

   * Baseline: BigQuery ML
   * AutoML: `vertex/automl_training.py`
   * Custom: `pipelines/train_custom_model.py`
5. Evaluate: `pipelines/evaluate_model.py`
6. Deploy best model: `vertex/deploy_to_vertex.py`
7. Document model: `vertex/model_card.md`

---

## ☁️ Vertex AI Notes

You will need:

* `GCP_PROJECT_ID`
* `GCP_LOCATION`
* BigQuery dataset + table names
* GCS bucket for artifacts (if using custom model deployments)

See inline comments in the scripts for exact CLI / Python usage.

````

---

## 🏗️ 6. `infra/README.md`

```markdown
# 🏗️ HealthPredict Pro – Infrastructure & Deployment

This folder contains scripts and configs to set up and deploy the project on **Google Cloud**.

---

## 📂 Structure

```bash
infra/
├── gcp/
│   ├── enable_apis.sh
│   ├── setup_service_accounts.sh
│   └── cloudrun_deploy_backend.sh
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
└── k8s/
    └── (optional manifests if moving off Cloud Run)
````

---

## ⚙️ GCP Setup (High-Level)

1. **Enable core APIs**

Run from repo root:

```bash
cd infra/gcp
./enable_apis.sh
```

2. **Create service accounts + roles**

```bash
./setup_service_accounts.sh
```

3. **Deploy backend to Cloud Run**

```bash
./cloudrun_deploy_backend.sh
```

(Each script should be parameterized by `$PROJECT_ID`, `$LOCATION`, etc.)

---

## 🌍 Terraform (Optional)

If you choose IaC:

* `main.tf` manages:

  * BigQuery dataset
  * GCS bucket
  * Service accounts
  * Cloud Run service
  * IAM bindings

Populate `variables.tf` and use:

```bash
terraform init
terraform apply
```

---

## 🔐 Security

* Use least-privilege IAM roles for service accounts
* Restrict Cloud Run calls if you later add auth
* Do **not** commit real secrets; use `.env` and Secret Manager

````

---

## 📚 7. `docs/README.md`

```markdown
# 📚 HealthPredict Pro – Documentation

Central place for all project documentation.

---

## 📂 Structure

```bash
docs/
├── architecture/
│   ├── system_architecture.md
│   └── mermaid_architecture.md
├── ui/
│   └── wireframes_overview.md
├── ml/
│   └── model_explanation.md
└── pitch/
    ├── pitch_deck_links.md
    └── demo_script.md
````