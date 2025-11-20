Here is **exactly the structural timeline** for **PHASE 5 — BACKEND API**, broken into **days, tasks, file creation order, coding flow, and deployment flow**.

It is **short, practical, and tells you exactly what to build first → last**.

---

# 🟠 **PHASE 5 — BACKEND API (Day 11–13)**

### *Development Timeline & Structure (Clear, Step-by-Step)*

---

# ✅ **DAY 11 — Core Backend Foundations**

### **1. Create project environment**

* Create Python virtual environment
* Install FastAPI, Uvicorn, Google AI Platform SDK
* Structure backend folders

**Files created today:**

```
backend/.env.example
backend/main.py
backend/healthpredict/core/config.py
```

---

### **2. Implement CORS configuration**

Allows frontend → backend calls.

**Files:**

```
backend/healthpredict/core/cors.py
```

CORS is imported inside `main.py`.

---

### **3. Build base FastAPI app**

* Add root `/` health-check
* Add `/api/v1/predict` router import
* Load environment variables
* Configure CORS + logging middleware (added tomorrow)

**Files touched:**

```
backend/main.py
backend/healthpredict/api/v1/routes.py  (already exists)
```

---

# 🟢 **DAY 12 — Logging, Error Handling & Vertex Integration**

### **1. Logging middleware**

Captures:

* Request body
* Response status code
* Latency

**Files:**

```
backend/healthpredict/middleware/request_logger.py
backend/healthpredict/core/logging_config.py
```

Imported in `main.py`.

---

### **2. Centralized error handler**

Handles:

* Vertex errors
* Validation errors
* Internal errors (500)

**Files:**

```
backend/healthpredict/infrastructure/error_handler.py
```

Imported in `main.py`.

---

### **3. Implement Vertex AI inference client**

This is the file that will call the actual Vertex endpoint.

**Files:**

```
backend/healthpredict/services/vertex_ai_client.py
backend/services/inference_service.md (documentation)
```

Functionality:

* Receives JSON input
* Sends request to Vertex
* Parses `risk_score` & `risk_label`

---

### **4. Wire routes → inference client**

Inside `routes.py`:

* Validate incoming patient data
* Forward to Vertex client
* Return predictions to frontend

---

# 🔵 **DAY 13 — Deployment Setup & CI/CD**

### **1. Create Cloud Run deployment script**

**File:**

```
infra/gcp/cloudrun_deploy_backend.sh
```

Includes:

* Build image
* Submit to Cloud Build
* Deploy to Cloud Run
* Allow unauthenticated access (or secure with auth depending on setup)

---

### **2. Add GitHub CI for Backend**

**File:**

```
.github/workflows/backend-ci.yml
```

Steps included:

* Install Python
* Install FastAPI deps
* Lint (flake8)
* Run backend tests (pytest)
* (Optional) Build Docker image

---

### **3. Document Phase 5**

**File:**

```
docs/project/phase5_backend_api.md
```

Includes:

* Summary of work
* Flow diagrams
* Testing instructions
* Endpoint examples
* Next steps (integration in Phase 6)

---

# 🧱 **STRUCTURAL ORDER OF IMPLEMENTATION (VERY IMPORTANT)**

### **1️⃣ Config**

```
config.py
.env.example
```

### **2️⃣ Core app**

```
main.py
cors.py
```

### **3️⃣ Logging & Errors**

```
request_logger.py
error_handler.py
logging_config.py
```

### **4️⃣ API routes**

```
routes.py
patient.py  (model)
```

### **5️⃣ Vertex client**

```
vertex_ai_client.py
```

### **6️⃣ Deployment**

```
cloudrun_deploy_backend.sh
backend-ci.yml
```

### **7️⃣ Documentation**

```
phase5_backend_api.md
```

---

# 🚀 **END RESULT OF PHASE 5**

By the end of Day 13, you will have:

✔ Fully working FastAPI backend
✔ Cloud Run deployment script
✔ CORS + Logging + Error handling
✔ Vertex inference endpoint integrated
✔ Backend CI
✔ Predict endpoint ready for frontend

This completes the backend, making Phase 6 (Frontend UI) easy.

---

If you're ready:

👉 **“Proceed to Phase 5 — File Generation”**
(or tell me which file from Phase 5 you want generated first).

