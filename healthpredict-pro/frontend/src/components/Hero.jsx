export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-white to-[#f4f6fa]">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        HealthPredict Pro
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
        AI-assisted medical risk prediction platform for faster, accurate, and
        data-driven clinical decision support.
      </p>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={onPrimaryClick}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow hover:bg-indigo-700 transition-all"
        >
          Get Prediction
        </button>

        <button
          onClick={onSecondaryClick}
          className="px-8 py-3 border-2 border-indigo-600 text-indigo-700 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-all"
        >
          View Dashboard
        </button>
      </div>
    </section>
  );
}
