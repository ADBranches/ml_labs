from google.cloud import aiplatform
from healthpredict.core.config import settings
from healthpredict.core.logging_config import logger


# Initialize Vertex AI
aiplatform.init(
    project=settings.GCP_PROJECT_ID,
    location=settings.GCP_LOCATION,
)


async def predict_risk(instance: dict) -> dict:
    """
    Sends an instance to Vertex AI Online Prediction endpoint.
    Returns: {"risk_score": float, "risk_label": int}
    """
    logger.info("🔄 Sending prediction request to Vertex AI...")

    endpoint = aiplatform.Endpoint(settings.VERTEX_ENDPOINT_ID)

    response = endpoint.predict(instances=[instance])

    prediction = response.predictions[0]

    logger.info(f"✅ Vertex Prediction Response: {prediction}")

    return {
        "risk_score": float(prediction.get("risk_score", 0.0)),
        "risk_label": int(prediction.get("risk_label", 0)),
    }

