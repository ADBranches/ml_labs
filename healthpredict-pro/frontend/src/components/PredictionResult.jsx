export default function PredictionResult({ data, loading }) {
  if (loading) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
        <p className="text-primary font-semibold">Processing prediction...</p>
      </div>
    );
  }

  if (!data || data.error) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
        <p className="text-gray-400">No prediction yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
      <h3 className="text-lg font-semibold text-primary">Prediction Result</h3>

      <p className="text-gray-700">
        <span className="font-semibold">Risk Score:</span> {data.risk_score}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Risk Level:</span> {data.risk_label}
      </p>
    </div>
  );
}
