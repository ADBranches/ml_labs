from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from healthpredict.core.config import settings
from healthpredict.core.cors import get_cors_config
from healthpredict.middleware.request_logger import RequestLoggerMiddleware
from healthpredict.infrastructure.error_handler import register_error_handlers

from healthpredict.api.v1.routes import router as api_router

app = FastAPI(
    title="HealthPredict Pro – Backend API",
    description="Cloud Run + Vertex AI powered medical risk prediction API",
    version="1.0.0",
)

# -------------------------------
# CORS CONFIGURATION
# -------------------------------
cors_config = get_cors_config()
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_config.allow_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# REQUEST LOGGING MIDDLEWARE
# -------------------------------
app.add_middleware(RequestLoggerMiddleware)

# -------------------------------
# ERROR HANDLERS
# -------------------------------
register_error_handlers(app)

# -------------------------------
# ROUTES
# -------------------------------
@app.get("/", tags=["Health Check"])
def health_check():
    return {"status": "OK", "message": "HealthPredict Pro Backend Running"}

app.include_router(api_router, prefix="/api/v1")

# -------------------------------
# RUN SERVER (for local dev only)
# -------------------------------
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host=settings.BACKEND_HOST,
        port=settings.BACKEND_PORT,
        reload=True,
    )
