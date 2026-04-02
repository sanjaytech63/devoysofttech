import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const TestimonialCard = ({ quote, name, role, company, avatar, rating }: TestimonialCardProps) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 transition-transform duration-300 hover:-translate-y-1">
    <div className="mb-4 flex items-center gap-2">
      <Image src={avatar} alt={`${name} avatar`} width={48} height={48} className="rounded-full object-cover" />
      <div>
        <p className="font-bold text-slate-900 dark:text-white">{name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-300">{role}, {company}</p>
      </div>
    </div>
    <p className="mb-4 text-slate-700 dark:text-slate-200">“{quote}”</p>
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={16} fill={index < rating ? "#f59e0b" : "none"} stroke={index < rating ? "#f59e0b" : "#cbd5e1"} aria-hidden="true" />
      ))}
    </div>
  </article>
);
