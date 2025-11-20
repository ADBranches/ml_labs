import { useState } from "react";

export function usePrediction() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Use environment variable OR fallback to 127.0.0.1 (stable)
  const API_BASE =
    import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  const submit = async (payload) => {
    setLoading(true);
    setData(null);

    try {
      const response = await fetch(`${API_BASE}/api/v1/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 🔥 Check if backend responded properly
      if (!response.ok) {
        throw new Error(
          `Backend returned ${response.status}: ${response.statusText}`
        );
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Prediction failed:", error);

      setData({
        error:
          "Unable to connect to prediction service. Ensure backend is running on port 8000.",
      });
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, submit };
}
