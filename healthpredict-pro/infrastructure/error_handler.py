from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from google.api_core.exceptions import GoogleAPIError
from pydantic import ValidationError
from healthpredict.core.logging_config import logger


def register_error_handlers(app: FastAPI):

    # Validation errors
    @app.exception_handler(ValidationError)
    async def validation_exception_handler(request: Request, exc: ValidationError):
        logger.error(f"❌ Validation Error: {exc.errors()}")
        return JSONResponse(
            status_code=422,
            content={"error": "Invalid request payload", "details": exc.errors()},
        )

    # Vertex AI / Google API errors
    @app.exception_handler(GoogleAPIError)
    async def vertex_exception_handler(request: Request, exc: GoogleAPIError):
        logger.error(f"❌ Vertex AI Error: {str(exc)}")
        return JSONResponse(
            status_code=500,
            content={"error": "Vertex AI prediction failed", "details": str(exc)},
        )

    # Unexpected internal errors
    @app.exception_handler(Exception)
    async def internal_exception_handler(request: Request, exc: Exception):
        logger.error(f"💥 Internal Server Error: {str(exc)}")
        return JSONResponse(
            status_code=500,
            content={"error": "Internal server error"},
        )

