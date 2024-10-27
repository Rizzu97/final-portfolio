import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Ottimizzazione keywords con long-tail e intent-based
const keywords = [
  // Development service keywords
  "hire react developer",
  "hire flutter developer",
  "freelance react developer",
  "remote flutter developer",
  "full stack developer for hire",
  "mobile app developer available",
  "expert react developer",
  "senior flutter developer",
  "web application development",
  "mobile app development services",

  // Project-specific keywords
  "custom web application development",
  "enterprise app development",
  "startup mvp development",
  "cross platform app development",
  "react next.js development",
  "flutter mobile development",
  "legacy code modernization",
  "application maintenance services",

  // Mentoring keywords
  "one on one programming mentor",
  "private coding tutor",
  "react development tutoring",
  "flutter development mentoring",
  "personal tech mentor",
  "software development consulting",

  // Expertise keywords
  ...DATA.skills,
  "full stack development",
  "mobile app architecture",
  "cross platform development",
  "software architecture design",
  "react next.js expert",
  "flutter specialist",
  "technical consultant",
  "software architect",

  // Brand keywords
  DATA.name,
  ...DATA.work.map((job) => job.company),
];

export const metadata: Metadata = {
  metadataBase: new URL("https://pierluigirizzu.it"),
  title: {
    default: `${DATA.name} | Development Mentoring & Technical Consulting`,
    template: `%s | ${DATA.name} - Expert Development Mentor`,
  },
  description: `Expert software developer and mentor specializing in one-on-one tutoring for React and Flutter. Offering personalized learning paths, startup consulting, and enterprise solutions. With ${DATA.work.length}+ years of experience, I help developers and businesses achieve their technical goals through dedicated mentoring and professional development.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pierluigirizzu.it",
    siteName: `${DATA.name} - Development Mentoring`,
    title: `${DATA.name} | Expert Development Mentoring & Consulting`,
    description:
      "Transform your development skills with personalized one-on-one mentoring. Expert guidance in React, Flutter, and modern software architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Development Mentor & Consultant`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | Development Mentoring & Technical Consulting`,
    description:
      "Personalized mentoring for web and mobile development. Transform your skills with one-on-one guidance.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://pierluigirizzu.it",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: DATA.name, url: "https://pierluigirizzu.it" }],
  creator: DATA.name,
  publisher: DATA.name,
  keywords: keywords.join(", "),
  category: "Technology",
  applicationName: `${DATA.name} - Development Mentoring`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
