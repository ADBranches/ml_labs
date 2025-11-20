# HealthPredict Pro – UI Style Guide

Last updated: Phase 6 (Frontend UI)

---

## 1. Brand Identity

### 1.1 Brand Purpose

HealthPredict Pro is an AI-powered medical risk prediction platform. The UI must communicate:

- **Trust** – clinical, credible, clean
- **Clarity** – minimal noise, simple flows
- **Care** – human-centered, not just “data-heavy dashboards”

---

## 2. Design Tokens (as implemented in `src/index.css` via Tailwind v4)

These tokens are defined in the `@theme` block:

```css
@theme {
  --color-brand-primary: #1b76ff;
  --color-brand-primary-dark: #0f4db3;
  --color-brand-secondary: #34c6eb;
  --color-brand-accent: #24d180;
  --color-body: #f7f9fc;
  --color-surface: #ffffff;
  --color-text: #1c1c1c;

  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;

  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.06);
}
