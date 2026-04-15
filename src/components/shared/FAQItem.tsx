"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQItemType } from "@/types";

export const FAQItem = ({ item }: { item: FAQItemType }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "border rounded-xl p-4 transition-all duration-300",
        open
          ? "border-(--accent) bg-(--primary-soft)"
          : "border-(--border)",
      )}
    >
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-base font-medium text-foreground">
          {item.question}
        </h3>

        {open ? (
          <Minus className="text-(--accent)" size={18} />
        ) : (
          <Plus className="text-(--accent)" size={18} />
        )}
      </button>

      {/* CONTENT */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-50 mt-3" : "max-h-0",
        )}
      >
        <p className="text-sm text-(--muted) leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};
