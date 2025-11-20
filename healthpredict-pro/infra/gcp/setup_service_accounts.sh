#!/bin/bash

PROJECT_ID=$(gcloud config get-value project)

# Create a service account for Vertex AI + Cloud Run
gcloud iam service-accounts create healthpredict-sa \
  --display-name="HealthPredict Pro Service Account"

# Assign roles
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:healthpredict-sa@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/aiplatform.user"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:healthpredict-sa@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/bigquery.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:healthpredict-sa@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:healthpredict-sa@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/storage.admin"
