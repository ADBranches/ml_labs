import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./UI/Input";
import Button from "./UI/Button";

const schema = z.object({
  age: z.string().min(1, "Age is required"),
  glucose: z.string().min(1, "Glucose level is required"),
  bmi: z.string().min(1, "BMI is required"),
});

export default function PredictionForm({ onSubmit }) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({ 
    resolver: zodResolver(schema) 
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-bold text-brand-primary">Patient Details</h2>

      <Input 
        {...register("age")}
        placeholder="Age"
      />
      {errors.age && (
        <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
      )}

      <Input 
        {...register("glucose")}
        placeholder="Glucose Level"
      />
      {errors.glucose && (
        <p className="text-red-500 text-sm mt-1">{errors.glucose.message}</p>
      )}

      <Input 
        {...register("bmi")}
        placeholder="BMI"
      />
      {errors.bmi && (
        <p className="text-red-500 text-sm mt-1">{errors.bmi.message}</p>
      )}

      <Button 
        type="submit" 
        className="w-full bg-brand-primary text-white py-2 px-4 rounded-lg"
      >
        Predict Risk
      </Button>
    </form>
  );
}