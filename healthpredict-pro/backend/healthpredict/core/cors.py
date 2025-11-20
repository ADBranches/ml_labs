from pydantic import BaseModel
from healthpredict.core.config import settings


class CORSConfig(BaseModel):
    allow_origins: list[str]


def get_cors_config() -> CORSConfig:
    origins = settings.CORS_ALLOWED_ORIGINS.split(",")
    return CORSConfig(
        allow_origins=[origin.strip() for origin in origins]
    )

