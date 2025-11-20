#!/bin/bash

# -----------------------------------------
# HealthPredict Pro – Cloud Run Deployment
# -----------------------------------------

# Fail if any command fails
set -e

SERVICE_NAME="healthpredict-backend"
REGION="us-central1"
PROJECT_ID=${GCP_PROJECT_ID:-"your-project-id"}

IMAGE="gcr.io/$PROJECT_ID/$SERVICE_NAME"

echo "🚀 Building backend Docker image..."
gcloud builds submit --tag $IMAGE

echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image $IMAGE \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --memory 512Mi \
  --timeout 300 \
  --max-instances 3

echo "✅ Deployment complete!"
echo "🌍 Cloud Run URL:"
gcloud run services describe $SERVICE_NAME \
  --region $REGION \
  --format "value(status.url)"
