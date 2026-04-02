"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.2),transparent_40%)]" />

      <div className="relative z-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
          <AlertCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
        </div>

        <h1 className="mt-6 bg-gradient-to-r from-emerald-500 via-lime-500 to-cyan-400 bg-clip-text text-7xl font-black text-transparent md:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold md:text-3xl">Page Not Found</h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-slate-600 dark:text-slate-300 md:text-base">
          The page you are looking for doesn’t exist or may have been moved. Try
          navigating back or explore other sections.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button className="flex items-center gap-2">
              <Home size={16} />
              Go Home
            </Button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Search size={16} />
          Try searching or check the menu
        </div>
      </div>
    </div>
  );
}
