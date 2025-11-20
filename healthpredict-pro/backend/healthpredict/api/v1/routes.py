from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from healthpredict.services.vertex_ai_client import predict_risk

# -------------------------
# ROUTER INITIALIZATION
# -------------------------
router = APIRouter(
    tags=["Prediction"],
)

# -------------------------
# REQUEST / RESPONSE MODELS
# -------------------------
class PatientInput(BaseModel):
    age: int
    bmi: float
    blood_pressure: float
    cholesterol: float
    has_diabetes: int
    has_hypertension: int
    exercise_score: int
    smoker_score: int
    previous_hospitalizations: int
    comorbidity_count: int
    engineered_risk_signal: float


class PredictionResponse(BaseModel):
    risk_score: float
    risk_label: int


# --------------------------------------------------------
# VERTEX AI INTEGRATION ENDPOINT
# --------------------------------------------------------
@router.post("/predict", response_model=PredictionResponse)
async def predict(payload: PatientInput):
    """
    Sends features to Vertex AI and returns model prediction.
    
    Replaces the temporary stub endpoint with real Vertex AI integration.
    Includes error handling and proper service layer integration.
    """
    try:
        result = await predict_risk(payload.dict())
        return PredictionResponse(**result)
    except Exception as e:
        # Add proper error handling for Vertex AI integration
        raise HTTPException(
            status_code=500,
            detail=f"Prediction service unavailable: {str(e)}"
        )


# --------------------------------------------------------
# LEGACY STUB ENDPOINT (COMMENTED FOR REFERENCE)
# --------------------------------------------------------
# @router.post("/predict", response_model=PredictionResponse)
# async def predict_stub(payload: PatientInput):
#     """
#     TEMPORARY prediction route used during backend setup.
#
#     This stub is replaced in Day 12/13 when we integrate:
#     - vertex_ai_client.predict()
#     - error handling
#     - logging middleware
#
#     Right now it returns a dummy prediction so:
#     - Frontend can integrate early
#     - Cloud Run deployment can be tested
#     """
#     # Dummy output (always low risk)
#     return PredictionResponse(
#         risk_score=0.12,
#         risk_label=0
#     )
