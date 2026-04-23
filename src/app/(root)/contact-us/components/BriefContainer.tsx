"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { briefSchema } from "@/schema/schema";
import StepService from "./StepService";
import StepBudget from "./StepBudget";
import StepDetails from "./StepDetails";
import { Stepper } from "./Stepper";

export default function BriefContainer() {
  const [step, setStep] = useState(1);

  const form = useForm({
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
      localStorage.setItem("brief", JSON.stringify(value));
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const next = async () => {
    const fieldsMap = {
      1: ["service"],
      2: ["budget"],
    };

    const isValid = await form.trigger(fieldsMap[step] || []);
    if (isValid) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const onSubmit = (data: any) => {
    console.log("FINAL DATA", data);

    localStorage.removeItem("brief");
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 p-4 sm:p-6  transition hover:shadow-2xl group">
      <Stepper step={step} />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {step === 1 && <StepService form={form} next={next} />}
        {step === 2 && <StepBudget form={form} next={next} back={back} />}
        {step === 3 && <StepDetails form={form} back={back} />}
      </form>
    </div>
  );
}
