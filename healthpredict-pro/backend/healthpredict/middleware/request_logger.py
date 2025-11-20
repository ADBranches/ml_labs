import time
import json
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response
from healthpredict.core.logging_config import logger


class RequestLoggerMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start_time = time.time()

        # Log request info
        try:
            body = await request.body()
            body_data = body.decode("utf-8") if body else None
        except Exception:
            body_data = None

        logger.info(f"📥 REQUEST → {request.method} {request.url.path}")
        if body_data:
            logger.info(f"╰─ Body: {body_data}")

        # Process request
        response: Response = await call_next(request)

        # Log response info
        process_time = (time.time() - start_time) * 1000
        logger.info(f"📤 RESPONSE → {response.status_code} ({process_time:.2f}ms)")

        return response
