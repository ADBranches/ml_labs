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

