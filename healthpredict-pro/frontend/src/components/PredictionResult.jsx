import Skeleton from "./UI/Skeleton";
import Card from "./UI/Card";

export default function PredictionResult({ data, loading }) {
  if (loading) {
    return (
      <Card>
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </Card>
    );
  }

  if (!data) return null;

  return (
    <Card>
      <h3 className="text-xl font-semibold text-brand-primary">Prediction Result</h3>
      <p className="mt-3 text-gray-700">Risk Score: {data.prediction_score}</p>
      <p className="text-gray-700">Risk Level: {data.risk_level}</p>
      <p className="text-gray-600 mt-4">{data.explanation}</p>
    </Card>
  );
}
