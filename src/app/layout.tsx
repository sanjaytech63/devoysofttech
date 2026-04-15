import type { Metadata } from "next";
import { Manrope, Syne, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar/Navbar";
import { Footer } from "@/components/shared/footer/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "DevoySoftTech | SaaS Product Growth Platform",
  description:
    "DevoySoftTech builds digital products that grow businesses with modern SaaS solutions.",
  openGraph: {
    title: "DevoySoftTech | SaaS Product Growth Platform",
    description:
      "Modern design-driven web and mobile solutions for scaling digital businesses.",
    type: "website",
    url: "https://devoysofttech.example",
    siteName: "DevoySoftTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevoySoftTech | SaaS Product Growth Platform",
    description:
      "Modern design-driven web and mobile solutions for scaling digital businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        manrope.variable,
        syne.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
            try {
              var theme = localStorage.getItem("theme");
              var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              
              if (theme === "dark" || (!theme && systemDark)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            } catch (e) {}
          })();
        `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
