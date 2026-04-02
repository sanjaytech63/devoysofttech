"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="w-full max-w-lg rounded-2xl border border-red-200 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-red-900 dark:bg-slate-900/70">
            <div className="flex justify-center">
              <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/30">
                <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
            </div>

            <h1 className="mt-6 text-center text-2xl font-bold text-slate-900 dark:text-white">
              Something went wrong
            </h1>

            <p className="mt-3 text-center text-sm text-slate-600 dark:text-slate-300">
              An unexpected error occurred. You can try refreshing or go back to
              the homepage.
            </p>

            {process.env.NODE_ENV === "development" && (
              <div className="mt-4 rounded-md bg-red-50 p-3 text-xs text-red-700 dark:bg-red-900/20 dark:text-red-300">
                {error.message}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => reset()}
                className="flex w-full items-center justify-center gap-2"
              >
                <RefreshCcw size={16} />
                Try Again
              </Button>

              <Link href="/" className="w-full">
                <Button
                  variant="secondary"
                  className="flex w-full items-center justify-center gap-2"
                >
                  <Home size={16} />
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
