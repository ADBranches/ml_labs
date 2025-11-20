import { api } from "./client";

export function predictRisk(payload) {
  return api("/api/v1/predict", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
