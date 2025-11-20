import { useState } from "react";

export default function PredictionForm({ onSubmit }) {
  const [form, setForm] = useState({
    age: "",
    bmi: "",
    blood_pressure: "",
    cholesterol: "",
    has_diabetes: "",
    has_hypertension: "",
    exercise_score: "",
    smoker_score: "",
    previous_hospitalizations: "",
    comorbidity_count: "",
    engineered_risk_signal: "",
  });

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const payload = {
      age: Number(form.age),
      bmi: Number(form.bmi),
      blood_pressure: Number(form.blood_pressure),
      cholesterol: Number(form.cholesterol),
      has_diabetes: Number(form.has_diabetes),
      has_hypertension: Number(form.has_hypertension),
      exercise_score: Number(form.exercise_score),
      smoker_score: Number(form.smoker_score),
      previous_hospitalizations: Number(form.previous_hospitalizations),
      comorbidity_count: Number(form.comorbidity_count),
      engineered_risk_signal: Number(form.engineered_risk_signal),
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={submitForm} className="space-y-8">
      {/* -------------------- */}
      {/* PATIENT DETAILS */}
      {/* -------------------- */}
      <SectionTitle title="Patient Details" />

      <InputField label="Age" type="number" value={form.age}
        onChange={(e) => update("age", e.target.value)} />

      <InputField label="BMI" type="number" value={form.bmi}
        onChange={(e) => update("bmi", e.target.value)} />

      <InputField label="Blood Pressure (mmHg)" type="number" value={form.blood_pressure}
        onChange={(e) => update("blood_pressure", e.target.value)} />

      <InputField label="Cholesterol (mg/dL)" type="number" value={form.cholesterol}
        onChange={(e) => update("cholesterol", e.target.value)} />

      {/* -------------------- */}
      {/* HEALTH FLAGS */}
      {/* -------------------- */}
      <SectionTitle title="Health Conditions" />

      <InputField label="Diabetes (0 or 1)" type="number" value={form.has_diabetes}
        onChange={(e) => update("has_diabetes", e.target.value)} />

      <InputField label="Hypertension (0 or 1)" type="number" value={form.has_hypertension}
        onChange={(e) => update("has_hypertension", e.target.value)} />

      <InputField label="Exercise Score (0–10)" type="number" value={form.exercise_score}
        onChange={(e) => update("exercise_score", e.target.value)} />

      <InputField label="Smoker Score (0–10)" type="number" value={form.smoker_score}
        onChange={(e) => update("smoker_score", e.target.value)} />

      {/* -------------------- */}
      {/* HOSPITAL HISTORY */}
      {/* -------------------- */}
      <SectionTitle title="Hospitalization History" />

      <InputField label="Previous Hospitalizations" type="number"
        value={form.previous_hospitalizations}
        onChange={(e) => update("previous_hospitalizations", e.target.value)} />

      <InputField label="Comorbidity Count" type="number"
        value={form.comorbidity_count}
        onChange={(e) => update("comorbidity_count", e.target.value)} />

      {/* -------------------- */}
      {/* ENGINEERED SIGNAL */}
      {/* -------------------- */}
      <SectionTitle title="AI Engineered Signal" />

      <InputField label="Engineered Risk Signal" type="number"
        value={form.engineered_risk_signal}
        onChange={(e) => update("engineered_risk_signal", e.target.value)} />

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-primary text-white font-semibold
                   hover:opacity-90 transition shadow-md"
      >
        Predict Risk
      </button>
    </form>
  );
}

/* ------------------------- */
/* REUSABLE COMPONENTS       */
/* ------------------------- */

function SectionTitle({ title }) {
  return (
    <h2 className="text-lg font-semibold text-primary mt-6 mb-2">
      {title}
    </h2>
  );
}

function InputField({ label, type, value, onChange }) {
  return (
    <div className="space-y-1">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm
                   focus:ring-2 focus:ring-primary focus:outline-none text-gray-800"
      />
    </div>
  );
}
