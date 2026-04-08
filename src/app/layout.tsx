import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope, Syne } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar/Navbar";
import { Footer } from "@/components/shared/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${manrope.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-accent text-white px-4 py-2 z-50">Skip to main content</a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main id="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
