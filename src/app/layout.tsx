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

const keywords = [
  ...DATA.skills,
  "React Developer",
  "Flutter Developer",
  "Sviluppatore React",
  "Sviluppatore Flutter",
  "Full-stack Developer",
  "Cross-platform Development",
  "Sviluppo Multi-piattaforma",
  "Mobile App Development",
  "Web Application Development",
  "Progressive Web Apps (PWA)",
  "Single Page Applications (SPA)",
  "UI/UX Design",
  "Responsive Design",
  "API Integration",
  "State Management",
  "Performance Optimization",
  "Code Refactoring",
  "Agile Methodologies",
  "Version Control (Git)",
  "Continuous Integration/Continuous Deployment (CI/CD)",
  DATA.name,
  ...DATA.work.map((job) => job.company),
  ...DATA.projects.map((project) => project.title),
  ...DATA.education.map((edu) => edu.school),
];

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - React & Flutter Developer | Full-stack & Cross-platform Expert`,
    template: `%s | ${DATA.name} - React & Flutter Developer`,
  },
  description: `${
    DATA.name
  }: Expert React and Flutter developer specializing in ${DATA.skills
    .slice(0, 3)
    .join(
      ", "
    )}. Crafting high-performance, cross-platform web and mobile applications. Full-stack capabilities with a focus on seamless user experiences. Available for challenging projects and collaborations. | Sviluppatore esperto in React e Flutter, specializzato in ${DATA.skills
    .slice(0, 3)
    .join(
      ", "
    )}. Creazione di applicazioni web e mobile multi-piattaforma ad alte prestazioni. Competenze full-stack con focus su esperienze utente impeccabili. Disponibile per progetti stimolanti e collaborazioni.`,
  openGraph: {
    title: `${DATA.name} - React & Flutter Developer | Full-stack & Cross-platform Expert`,
    description: `Hire ${
      DATA.name
    } for your next web or mobile project. Expertise in React, Flutter, ${DATA.skills
      .slice(0, 3)
      .join(
        ", "
      )}. Delivering scalable, high-performance solutions across platforms. | Assumi ${
      DATA.name
    } per il tuo prossimo progetto web o mobile. Esperienza in React, Flutter, ${DATA.skills
      .slice(0, 3)
      .join(
        ", "
      )}. Soluzioni scalabili e ad alte prestazioni su tutte le piattaforme.`,
    url: DATA.url,
    siteName: `${DATA.name} - Full-stack Developer Portfolio`,
    locale: "en_US",
    alternateLocale: "it_IT",
    type: "profile",
    firstName: DATA.name.split(" ")[0],
    lastName: DATA.name.split(" ")[1],
    images: [
      {
        url: `${DATA.url}/me`,
        width: 800,
        height: 600,
        alt: `${DATA.name} - React & Flutter Developer`,
      },
    ],
  },
  alternates: {
    canonical: DATA.url,
    languages: {
      "en-US": `${DATA.url}/en`,
      "it-IT": `${DATA.url}/it`,
    },
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
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - React & Flutter Expert | Full-stack Developer`,
    description: `Hire ${DATA.name} for cutting-edge web and mobile solutions. React and Flutter specialist with ${DATA.work[0].company} experience. From concept to deployment, delivering exceptional user experiences. | Assumi ${DATA.name} per soluzioni web e mobile all'avanguardia. Specialista React e Flutter con esperienza in ${DATA.work[0].company}.`,
    images: [`${DATA.url}/me`],
  },
  keywords: keywords,
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  category: "Technology",
  applicationName: `${DATA.name}'s Full-stack Developer Portfolio`,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
