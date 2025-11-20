import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    # GCP / Vertex AI
    GCP_PROJECT_ID: str
    GCP_LOCATION: str = "us-central1"
    VERTEX_ENDPOINT_ID: str

    # Backend Settings
    BACKEND_HOST: str = "0.0.0.0"
    BACKEND_PORT: int = 8000
    LOG_LEVEL: str = "info"

    # CORS
    CORS_ALLOWED_ORIGINS: str = "*"

    # Environment Mode
    ENVIRONMENT: str = "development"  # development / production

    class Config:
        env_file = ".env"  # load environment file
        env_file_encoding = "utf-8"


settings = Settings()

