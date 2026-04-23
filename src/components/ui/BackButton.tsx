import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  onClick?: () => void;
  label?: string;
  className?: string;
};

export function BackButton({
  onClick,
  label = "Back",
  className = "",
}: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center cursor-pointer gap-2
        px-4 py-2
        text-sm font-medium
        border border-slate-300 dark:border-slate-700
        rounded-sm
        bg-white dark:bg-slate-900
        text-slate-700 dark:text-slate-200
        hover:bg-slate-50 dark:hover:bg-slate-800
        transition-colors duration-200
       
        ${className}
      `}
    >
      <ArrowLeft size={16} />
      {label}
    </button>
  );
}
