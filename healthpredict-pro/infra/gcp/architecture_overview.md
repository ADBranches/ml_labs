# 🏗️ HealthPredict Pro – GCP Architecture Overview

This document provides a **high-level blueprint** of how the HealthPredict Pro system is deployed, structured, and secured within **Google Cloud Platform (GCP)**.  
It serves as the reference foundation for developers, cloud engineers, and donors evaluating the system’s scalability and sustainability.

---

# 🌐 1. Core GCP Components

HealthPredict Pro uses the following GCP services:

| Component | Purpose |
|----------|---------|
| **BigQuery** | Stores synthetic patient data + engineered features |
| **BigQuery ML (BQML)** | Baseline ML models, quick benchmarking |
| **Vertex AI AutoML** | Automated model selection & training |
| **Vertex AI Model Registry** | Stores trained models + model lineage |
| **Vertex AI Endpoints** | Real-time online prediction API for backend |
| **Cloud Run (Backend)** | FastAPI-based inference and API service |
| **Cloud Storage (GCS)** | Stores ML artifacts, logs, notebooks, and exports |
| **Cloud Build** | CI/CD deployment pipeline to Cloud Run |
| **IAM** | Fine-grained access control (least privilege) |
| **Cloud Logging & Monitoring** | Runtime metrics, prediction logs, drift monitoring |

---

# 🧩 2. High-Level Architecture Diagram

```mermaid
flowchart LR
    subgraph FE[Frontend - Next.js]
        FEUI[User Interface<br/>Patient Form & Results Page]
    end

    subgraph BE[Cloud Run - FastAPI Backend]
        APIRoute[/predict API/]
        Logger[Request Logger]
    end

    subgraph Vertex[Vertex AI]
        ModelRegistry[Model Registry]
        Endpoint[Prediction Endpoint]
    end

    subgraph Data[BigQuery Datasets]
        RawData[patients_raw]
        Engineered[patients_engineered]
    end

    FEUI -->|HTTP Request| BE
    BE -->|Request Payload| Endpoint
    Endpoint -->|Prediction Score| BE
    BE -->|JSON Response| FEUI

    Data -.-> Vertex
    RawData --> Engineered
