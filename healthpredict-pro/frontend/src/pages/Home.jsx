import SEO from "../components/SEO";
import Hero from "../components/Hero";
import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";
import { usePrediction } from "../hooks/usePrediction";
import Card from "../components/UI/Card";

export default function Home() {
  const { data, loading, submit } = usePrediction();

  return (
    <>
      <SEO
        title="HealthPredict Pro"
        description="AI-assisted medical risk prediction platform for clinicians."
      />

      <main className="min-h-screen bg-body">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Hero
            onPrimaryClick={() => {
              const el = document.getElementById("prediction-form");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            onSecondaryClick={() => {
              const el = document.getElementById("dashboard-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Prediction Section */}
          <section id="prediction-form" className="pb-12 space-y-6">

            {/* Form inside Card */}
            <Card>
              <PredictionForm onSubmit={submit} />
            </Card>

            {/* Result inside Card (handled inside component) */}
            <PredictionResult data={data} loading={loading} />

          </section>
        </div>
      </main>
    </>
  );
}
