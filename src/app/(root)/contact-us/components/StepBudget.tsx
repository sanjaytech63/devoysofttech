import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/Button";
import { BriefFormValues, BUDGET_VALUES, BudgetType } from "@/schema/schema";
import { UseFormReturn } from "react-hook-form";

export default function StepBudget({
  form,
  next,
  back,
}: {
  form: UseFormReturn<BriefFormValues>;
  next: () => void;
  back: () => void;
}) {
  const selected = form.watch("budget");

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">What’s your budget?</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {BUDGET_VALUES.map((b: BudgetType) => (
          <button
            key={b}
            type="button"
            onClick={() =>
              form.setValue("budget", b, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            className={`p-5 rounded-xl border text-left transition
              ${
                selected === b
                  ? "bg-green-600 text-white border-green-600 shadow-md"
                  : "bg-green-50 hover:bg-green-100 border-green-100"
              }`}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <BackButton onClick={back} />

        <Button
          onClick={next}
          disabled={!selected}
          className="group hidden! md:flex! items-center btn-gradient"
        >
          Next
          <OptimizedImage
            src="/images/arrow.svg"
            alt="arrow-icon"
            fill={false}
            containerClassName="w-6! h-6! transition-transform duration-300 group-hover:rotate-30"
            priority
            blurDataURL="/images/arrow.svg"
          />
        </Button>
      </div>
    </>
  );
}
