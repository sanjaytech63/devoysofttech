"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BriefFormValues, briefSchema } from "@/schema/schema";
import StepService from "./StepService";
import StepBudget from "./StepBudget";
import StepDetails from "./StepDetails";
import { Stepper } from "./Stepper";

type Step = 1 | 2 | 3;

export default function BriefContainer() {
  const [step, setStep] = useState<Step>(1);

  const fieldsMap: Partial<Record<Step, (keyof BriefFormValues)[]>> = {
    1: ["service"],
    2: ["budget"],
  };

  const form = useForm<BriefFormValues>({
    resolver: zodResolver(briefSchema),
    mode: "onChange",
  });

  useEffect(() => {
    try {
      const data = localStorage.getItem("brief");
      if (data) {
        form.reset(JSON.parse(data));
      }
    } catch (err) {
      console.error("LocalStorage parse error", err);
    }
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value) {
        localStorage.setItem("brief", JSON.stringify(value));
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const next = async () => {
    const isValid = await form.trigger(fieldsMap[step] ?? []);

    if (!isValid) return;

    setStep((s) => (s < 3 ? ((s + 1) as Step) : s));
  };

  const back = () => {
    setStep((s) => (s > 1 ? ((s - 1) as Step) : s));
  };

  const onSubmit = (data: BriefFormValues) => {
    localStorage.removeItem("brief");
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 p-4 sm:p-6 transition hover:shadow-2xl group">
      <Stepper step={step} />

      <form onSubmit={form.handleSubmit(onSubmit)}>
        {step === 1 && <StepService form={form} next={next} />}

        {step === 2 && <StepBudget form={form} next={next} back={back} />}

        {step === 3 && <StepDetails form={form} back={back} />}
      </form>
    </div>
  );
}
