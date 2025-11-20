# 🏥 HealthPredict Pro — Project Charter  
**Directory:** `docs/project/`

---

# 1. Project Overview

**HealthPredict Pro** is an AI-powered healthcare analytics platform designed to **predict short-term hospitalization risk** using synthetic patient health data, machine learning models, and cloud-native deployments.  
The system provides **clinicians, NGOs, and healthcare programs** with early warning indicators and personalized recommendations to improve patient outcomes.

This charter defines the goals, scope, constraints, stakeholders, and strategic relevance of the project.

---

# 2. Mission Statement

> **To enable early detection of hospitalization risk using affordable, accessible AI technology — supporting better decisions, healthier communities, and aligned progress toward SDG 3 (Good Health & Well-being).**

---

# 3. Problem Statement

- Preventable hospitalizations remain a major burden in low-resource settings.  
- Clinicians lack real-time analytics to support early intervention.  
- Patients receive care too late due to slow triage or limited expertise.  
- Traditional healthcare systems fail to provide personalized, predictive insights.

There is an urgent need for **low-cost, cloud-powered predictive systems** that support early detection and prevention.

---

# 4. Scope of the Project

### **In Scope**
- Synthetic dataset generation  
- Data engineering and feature construction  
- ML model development (AutoML + custom models)  
- Model registry and endpoint deployment via Vertex AI  
- FastAPI backend + Cloud Run deployment  
- Modern React/Next.js frontend  
- MLOps monitoring & drift detection  
- Branding, design system, pitch materials  

### **Out of Scope (For Now)**
- Real patient data  
- Integration with hospital EHRs  
- Mobile app development  
- Regulatory approval or clinical certification  
- Offline-first functionality  

---

# 5. Strategic Alignment (SDG 3)

The project directly contributes to **SDG 3: Good Health & Well-being** by:

- Supporting early detection and prevention  
- Reducing avoidable hospitalizations  
- Improving personalized care  
- Empowering clinics with data-driven decision support  
- Strengthening community health ecosystems  

This alignment strengthens donor confidence and project legitimacy.

---

# 6. Target Stakeholders

### **Primary Users**
- Clinicians  
- Nurses  
- Triage officers  
- Health centers & clinics  

### **Secondary Users**
- NGOs & donor organizations  
- Ministries of health  
- Public health analysts  
- Academic research teams  

### **Beneficiaries**
- Patients  
- Rural communities  
- Under-resourced health systems  

---

# 7. Project Goals & Deliverables

### **Core Goals**
1. Build an ethical, transparent, end-to-end ML system  
2. Provide real-time hospitalization risk predictions  
3. Deliver a professional UI for demonstration & stakeholder engagement  
4. Deploy a reliable backend and monitoring pipeline  
5. Showcase ML engineering excellence  

### **Phase 0 Deliverables**
- ✔ Project charter  
- ✔ GCP project initialized  
- ✔ BigQuery, Vertex AI, Cloud Run APIs enabled  
- ✔ GitHub repo scaffolded with folders & READMEs  
- ✔ Development workflow defined  
- ✔ Brand design: logo, colors, typography, UI direction  
- ✔ Workshop/hackathon structure prepared  

---

# 8. Constraints & Assumptions

### **Constraints**
- No real patient data allowed (use synthetic only)  
- Limited budget (optimize for GCP free tier where possible)  
- Must meet workshop/hackathon deadlines  
- Must ensure ethical ML practices  

### **Assumptions**
- Stable internet access  
- Access to GCP credits  
- Availability of team members  
- Participants can follow setup instructions  

---

# 9. Success Metrics

### **Technical Success**
- Model deployed on Vertex AI Endpoint  
- Cloud Run backend functioning with >99% uptime  
- Frontend delivering live predictions  
- MLOps pipeline detecting drift  

### **Stakeholder Success**
- Clear value demonstration to donors  
- Visual dashboards for impact measurement  
- Usability validated by health professionals (demo mode)  

### **Learning Success**
- Participants understand ML lifecycle  
- Team builds a fully deployable production-grade system  

---

# 10. Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Complexity of ML pipeline | Medium | Modular architecture + clear documentation |
| API cost scaling | Low | Use on-demand Vertex AI predictions |
| Team bandwidth | Medium | Parallel tracks (ML, backend, UI) |
| Misinterpretation of predictions | High | Add disclaimers & explainability notes |
| Poor donor communication | Medium | Strong visuals + storytelling in pitch deck |

---

# 11. High-Level Timeline (Phase 0 → Final Pitch)

| Phase | Duration | Outcome |
|-------|----------|---------|
| Phase 0 | Day 0–1 | Setup & strategy |
| Phase 1 | Day 2–3 | Data foundation |
| Phase 2 | Day 4–5 | Feature engineering |
| Phase 3 | Day 6–8 | Model training |
| Phase 4 | Day 9–10 | Deployment |
| Phase 5 | Day 11–13 | Backend API |
| Phase 6 | Day 14–17 | UI/Frontend |
| Phase 7 | Day 18–20 | MLOps |
| Phase 8 | Day 21–24 | Pitch & demo |

---

# 12. Version Control Strategy

- `main`: stable production  
- `dev`: staging branch  
- Feature branches: `feature/<task-name>`  
- PRs reviewed before merge  
- GitHub Actions for formatting, linting, CI  

---

# 13. Approval

This charter is approved by the project owner and serves as the guiding document for the project’s initiation and planning.

---


