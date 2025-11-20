import os
import sys

REQUIRED = [
    "ENVIRONMENT",
    "GCP_PROJECT_ID",
    "GCP_LOCATION",
    "VERTEX_ENDPOINT_ID",
    "BACKEND_HOST",
    "BACKEND_PORT",
    "LOG_LEVEL",
    "CORS_ALLOWED_ORIGINS"
]

missing = [key for key in REQUIRED if key not in os.environ]

if missing:
    print("❌ Missing environment variables:")
    for m in missing:
        print(f" - {m}")
    sys.exit(1)

if os.environ["ENVIRONMENT"] == "production":
    if os.environ["VERTEX_ENDPOINT_ID"] in ["dev-placeholder", "", "your-endpoint-id"]:
        print("❌ Production requires a REAL Vertex AI endpoint ID.")
        sys.exit(1)

print("✅ Environment validated successfully.")

