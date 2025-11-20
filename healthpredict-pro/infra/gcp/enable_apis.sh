#!/bin/bash

# Enable Google Cloud APIs for HealthPredict Pro
gcloud services enable \
    bigquery.googleapis.com \
    bigquerystorage.googleapis.com \
    aiplatform.googleapis.com \
    run.googleapis.com \
    cloudbuild.googleapis.com \
    artifactregistry.googleapis.com \
    compute.googleapis.com

