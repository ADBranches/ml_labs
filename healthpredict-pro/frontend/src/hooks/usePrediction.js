import { useState } from "react";

export function usePrediction() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (payload) => {
    setLoading(true);
    setData(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Backend returned ${response.status}`);
      }

      const result = await response.json();
      setData(result);

    } catch (err) {
      console.error("Prediction failed:", err);
      setData({ error: true });
    }

    setLoading(false);
  };

  return { data, loading, submit };
}
