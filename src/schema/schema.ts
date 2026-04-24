import { z } from "zod";
export const SERVICE_VALUES = [
  "Website",
  "E-commerce",
  "Mobile App",
  "Design",
  "SEO",
  "Hire Developer",
] as const;

export const BUDGET_VALUES = ["10k-30k", "30k-1L", "1L-5L", "5L+"] as const;

export const briefSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),

  firstName: z.string().min(2, "First name must be at least 2 characters"),

  lastName: z.string().min(2, "Last name must be at least 2 characters"),

  email: z.string().email("Enter a valid email address"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone")
    .optional()
    .or(z.literal("")),

  company: z.string().optional(),
  timeline: z.string().optional(),

  description: z
    .string()
    .min(10, "Project description must be at least 10 characters"),
});

export type BriefFormValues = z.infer<typeof briefSchema>;
export type BudgetType = (typeof BUDGET_VALUES)[number];
export type ServiceType = (typeof SERVICE_VALUES)[number];
