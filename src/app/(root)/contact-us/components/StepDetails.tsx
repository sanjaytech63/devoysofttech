import { Input } from "@/components/shared/Input";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/Button";
import { BriefFormValues } from "@/schema/schema";
import { UseFormReturn } from "react-hook-form";

export default function StepDetails({
  form,
  back,
}: {
  form: UseFormReturn<BriefFormValues>;
  back: () => void;
}) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Tell us about yourself</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="firstName"
          register={register}
          error={errors.firstName}
          placeholder="First Name"
        />
        <Input
          name="lastName"
          register={register}
          error={errors.lastName}
          placeholder="Last Name"
        />
        <Input
          name="email"
          register={register}
          error={errors.email}
          placeholder="Email"
        />
        <Input
          name="phone"
          register={register}
          error={errors.phone}
          placeholder="Phone"
        />
        <Input
          name="company"
          register={register}
          error={errors.company}
          placeholder="Company"
        />
        <Input
          name="timeline"
          register={register}
          error={errors.timeline}
          placeholder="Timeline"
        />
      </div>

      <div className="mt-4">
        <textarea
          {...register("description")}
          placeholder="Project description"
          className="w-full p-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-green-200 outline-none h-32"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <BackButton onClick={back} />

        <Button
          type="submit"
          className="group hidden md:flex items-center btn-gradient"
        >
          Submit
        </Button>
      </div>
    </>
  );
}
