"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Users } from "lucide-react";

const team = [
  { name: "Asha Gupta", role: "Founder & CEO", bio: "20+ years bringing tech products from idea to scale." },
  { name: "Rohan Mehta", role: "Chief Technology Officer", bio: "Architect of distributed systems and performance delivery." },
  { name: "Neha Jain", role: "Head of Design", bio: "Designs experiences that drive engagement and retention." },
  { name: "Ankit Singh", role: "Delivery Lead", bio: "Ensures delivery reliability with strong engineering discipline." },
];

export const TeamSection = () => (
  <Section id="team" className="bg-[var(--surface)]">
    <Container>
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-black text-[var(--foreground)] md:text-5xl">
          The People Behind Every Build
        </h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
          A multidisciplinary team powering your product journey.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {team.map((member) => (
          <Card key={member.name} className="border-emerald-100 p-5">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <Users size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--foreground)]">{member.name}</h3>
              <p className="text-sm font-semibold text-emerald-700">{member.role}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{member.bio}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </Section>
);
