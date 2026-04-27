type MetricCardProps = {
  value: string;
  label: string;
};

export const MetricCard = ({ value, label }: MetricCardProps) => {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur px-6 py-5 shadow-sm border border-neutral-200 min-w-40">
      <h3 className="text-2xl font-bold text-(--accent)">{value}</h3>
      <p className="text-sm text-(--muted) mt-1">{label}</p>
    </div>
  );
};
  