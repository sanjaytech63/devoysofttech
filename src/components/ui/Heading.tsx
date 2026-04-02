interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Heading = ({ title, subtitle, className }: HeadingProps) => (
  <div className={className}> 
    <h2 className="text-3xl font-black leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">{title}</h2>
    {subtitle ? <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
  </div>
);
