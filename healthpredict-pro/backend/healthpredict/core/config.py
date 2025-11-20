import os
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field, field_validator, ValidationError


class Settings(BaseSettings):
    """
    PRODUCTION-GRADE APPLICATION SETTINGS
    -------------------------------------
    This file supports:
      ✔ Environment-based configuration (dev/staging/prod)
      ✔ Strict validation of required GCP/Vertex AI fields
      ✔ Automatic .env loading
      ✔ CORS + Backend + Logging configuration
      ✔ Reusable global settings object using cache
    """

    # ==============================
    # APPLICATION MODE
    # ==============================
    ENVIRONMENT: str = Field(
        default="development",
        description="Environment mode: development | staging | production",
    )

    # ==============================
    # BACKEND SETTINGS
    # ==============================
    APP_NAME: str = "HealthPredict Pro API"
    BACKEND_HOST: str = "0.0.0.0"
    BACKEND_PORT: int = 8000
    LOG_LEVEL: str = Field(default="info", description="info/debug/warning/error")
    API_V1_PREFIX: str = "/api/v1"

    # ==============================
    # CORS
    # ==============================
    CORS_ALLOWED_ORIGINS: str = "*"

    # ==============================
    # GOOGLE CLOUD / VERTEX AI
    # ==============================
    GCP_PROJECT_ID: str | None = Field(
        default=None, description="Google Cloud Project ID"
    )
    GCP_LOCATION: str = Field(
        default="us-central1", description="Default GCP region"
    )
    VERTEX_ENDPOINT_ID: str | None = Field(
        default=None, description="Vertex AI Endpoint ID"
    )

    # ==============================
    # MODEL CONFIG
    # ==============================
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        validate_default=True,
    )

    # ==============================
    # VALIDATION
    # ==============================
    @field_validator("ENVIRONMENT")
    def validate_environment(cls, v):
        allowed = {"development", "staging", "production"}
        if v not in allowed:
            raise ValueError(f"ENVIRONMENT must be one of {allowed}")
        return v

    @field_validator("GCP_PROJECT_ID", mode="after")
    def validate_gcp_project(cls, v, info):
        if info.data.get("ENVIRONMENT") == "production" and not v:
            raise ValueError("GCP_PROJECT_ID is REQUIRED in production.")
        return v

    @field_validator("VERTEX_ENDPOINT_ID", mode="after")
    def validate_vertex_endpoint(cls, v, info):
        if info.data.get("ENVIRONMENT") == "production" and not v:
            raise ValueError("VERTEX_ENDPOINT_ID is REQUIRED in production.")
        return v

    # ==============================
    # HELPER PROPERTIES
    # ==============================
    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == "production"

    @property
    def is_development(self) -> bool:
        return self.ENVIRONMENT == "development"

    @property
    def is_staging(self) -> bool:
        return self.ENVIRONMENT == "staging"


# Cache settings to avoid reloading .env repeatedly
@lru_cache()
def get_settings() -> Settings:
    try:
        return Settings()
    except ValidationError as e:
        print("\n❌ CONFIGURATION ERROR — FIX YOUR .env FILE\n")
        print(e.json(indent=2))
        raise SystemExit(1)


# Global settings object
settings = get_settings()
