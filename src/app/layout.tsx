import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
