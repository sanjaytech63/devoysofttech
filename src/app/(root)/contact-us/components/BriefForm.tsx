"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Stepper } from "./Stepper";
import { BriefFormValues, briefSchema } from "@/schema/schema";
import StepService from "./StepService";
import StepBudget from "./StepBudget";
import StepDetails from "./StepDetails";

type Step = 1 | 2 | 3;

export default function BriefForm() {
  const [step, setStep] = useState<Step>(1);

  const form = useForm<BriefFormValues>({
    resolver: zodResolver(briefSchema),
    mode: "onChange",
    defaultValues: {
      service: undefined,
      budget: undefined,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      timeline: "",
      description: "",
    },
  });

  const next = async () => {
    const fields: (keyof BriefFormValues)[] =
      step === 1 ? ["service"] : ["budget"];

    const valid = await form.trigger(fields);

    if (!valid) return;

    setStep((s) => (s < 3 ? ((s + 1) as Step) : s));
  };

  const back = () => setStep((s) => (s > 1 ? ((s - 1) as Step) : s));

  const onSubmit: SubmitHandler<BriefFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 bg-white rounded-2xl shadow">
      <Stepper step={step} />

      <form onSubmit={form.handleSubmit(onSubmit)}>
        {step === 1 && <StepService form={form} next={next} />}
        {step === 2 && <StepBudget form={form} next={next} back={back} />}
        {step === 3 && <StepDetails form={form} back={back} />}
      </form>
    </div>
  );
}
