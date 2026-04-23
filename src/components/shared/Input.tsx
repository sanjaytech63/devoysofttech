import {
  FieldError,
  Path,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input<T extends FieldValues>({
  name,
  register,
  error,
  ...props
}: InputProps<T>) {
  return (
    <div className="space-y-1">
      <input
        {...register(name)}
        {...props}
        className={`w-full px-3 py-2 border rounded-sm outline-none transition
        ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-slate-300 focus:ring-2 focus:ring-green-200"
        }`}
      />

      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
};
