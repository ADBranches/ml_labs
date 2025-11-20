import SEO from "../components/SEO";
import Card from "../components/UI/Card";

const mockStats = {
  totalPredictions: 128,
  highRiskCount: 34,
  avgInferenceTime: "2.8s",
  lastUpdated: "Today, 14:32",
};

export default function Dashboard() {
  return (
    <>
      <SEO title="Risk Dashboard" description="Overview of recent AI risk predictions." />

      <main className="min-h-screen bg-body">
        <div
          id="dashboard-section"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8"
        >
          <header className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-brand-primary">
              Risk Prediction Dashboard
            </h1>
            <p className="text-sm text-gray-600">
              Synthetic metrics showing how HealthPredict Pro can support clinicians.
            </p>
          </header>

          {/* Metrics */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <p className="text-xs text-gray-500">Total Predictions</p>
              <p className="text-2xl font-bold mt-2">{mockStats.totalPredictions}</p>
            </Card>
            <Card>
              <p className="text-xs text-gray-500">High Risk Cases</p>
              <p className="text-2xl font-bold mt-2 text-brand-accent">
                {mockStats.highRiskCount}
              </p>
            </Card>
            <Card>
              <p className="text-xs text-gray-500">Avg Inference Time</p>
              <p className="text-2xl font-bold mt-2">{mockStats.avgInferenceTime}</p>
            </Card>
            <Card>
              <p className="text-xs text-gray-500">Last Updated</p>
              <p className="text-sm font-medium mt-2">{mockStats.lastUpdated}</p>
            </Card>
          </section>

          {/* Future: chart / table */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <p className="text-sm font-semibold mb-2">Prediction Trend (Demo)</p>
              <p className="text-xs text-gray-500">
                Placeholder for chart – to be replaced with real data visualizations.
              </p>
            </Card>

            <Card>
              <p className="text-sm font-semibold mb-2">Recent Predictions (Demo)</p>
              <p className="text-xs text-gray-500">
                Placeholder for table – can show patient ID, score, risk level, timestamp.
              </p>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}
