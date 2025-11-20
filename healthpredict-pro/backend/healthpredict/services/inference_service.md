# 🔮 Inference Service — Vertex AI Client

This file describes how the backend communicates with the deployed Vertex AI model.

---

## 1. Overview

The backend sends a single JSON instance to the Vertex Online Prediction Endpoint:

- Input: engineered patient features
- Output: risk prediction (score + label)

File:  
`backend/healthpredict/services/vertex_ai_client.py`

---

## 2. Responsibilities

- Initialize Vertex AI SDK
- Format prediction payload
- Send request to endpoint
- Parse returned prediction structure
- Return standardized response to the API route

---

## 3. Data Flow

Frontend → FastAPI → Vertex AI → FastAPI → Frontend

---

## 4. Error Handling

Errors from Google cloud are captured by:

`backend/healthpredict/infrastructure/error_handler.py`

---

## 5. Future Enhancements

- Add retry logic for intermittent cloud failures  
- Add logging for feature drift flags  
- Add model version tracking  

