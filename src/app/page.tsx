"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Check, FileText } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { Code2, GraduationCap, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react"; // Aggiungiamo questi import

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  // Spostiamo useTransform fuori dalla condizione
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0.7, 1],
    [0.1, 0.05]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // o un loader/placeholder
  }

  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              {/* Torniamo al bottone originale con la nuova icona */}
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 mt-4"
                  >
                    <FileText className="w-4 h-4" />
                    View CV
                  </Button>
                </Link>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* Work Section */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Spostiamo la sezione services prima di contact */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites and mobile apps to complex web applications. Here are
                  a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  projectUrl={project.projectUrl}
                  video={(project as any).video as string | undefined}
                  projectImage={
                    (project as any).projectImage as string | undefined
                  }
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative min-h-screen py-32 bg-gradient-to-b from-background via-background/50 to-background"
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_65%)]"
            style={{
              opacity: backgroundOpacity, // Usiamo la variabile creata sopra
            }}
          />
        </div>

        {/* Titolo migliorato con animazione più sottile */}
        <div className="container max-w-5xl mx-auto px-4 mb-12">
          {" "}
          {/* Ridotto da mb-16 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-xl opacity-20" />
              <span className="relative px-4 py-1.5 text-sm font-medium bg-primary/10 rounded-full text-primary border border-primary/20">
                Development & Mentoring
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                  Expert Guidance
                  <span className="block mt-2">& Development</span>{" "}
                  {/* Modificato il testo e la struttura */}
                </span>
              </h2>
              <p className="text-muted-foreground text-base">
                {" "}
                {/* Ridotto da text-lg */}
                From one-on-one mentoring to building your next startup project
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Cards container ottimizzato per mobile */}
        <div className="container relative max-w-5xl mx-auto">
          <div className="relative space-y-[15vh] md:space-y-[20vh]">
            {DATA.services.map((service, index) => (
              <div key={service.title} className="min-h-[60vh] md:h-[50vh]">
                <div className="sticky top-16 md:top-20">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-10% 0px" }}
                    transition={{ duration: 0.3 }}
                    className="group relative px-2 sm:px-4 md:px-0" // Ridotto padding su mobile molto piccolo
                  >
                    {/* Glow effect che si mantiene nella viewport */}
                    <motion.div
                      className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-2xl blur-md"
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: [0, 0.6, 0.4, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      viewport={{
                        once: false,
                        margin: "-20% 0px",
                      }}
                    />
                    <div
                      className={cn(
                        "relative backdrop-blur-sm border rounded-2xl p-4 sm:p-6 md:p-10", // Ridotto padding su mobile
                        "bg-card/95 transition-all duration-500",
                        "group-hover:border-primary/50 border-border/50",
                        "shadow-lg shadow-primary/0 group-hover:shadow-primary/5"
                      )}
                    >
                      <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-16">
                        {" "}
                        {/* Ridotto gap su mobile */}
                        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
                          {" "}
                          {/* Ridotto spacing su mobile */}
                          <div className="space-y-4 sm:space-y-6">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/[0.08] text-primary">
                              <service.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="text-xs sm:text-sm font-medium">
                                {service.title}
                              </span>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm sm:text-base text-foreground/90">
                                {" "}
                                {/* Cambiato da text-muted-foreground */}
                                {service.description}
                              </p>
                            </div>
                          </div>
                          <Button
                            className="w-full md:w-auto relative overflow-hidden group/button text-xs sm:text-sm" // Ridotto font su mobile
                            asChild
                          >
                            <a
                              href={`https://wa.me/${DATA.contact.tel.replace(
                                /[^0-9]/g,
                                ""
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              Contact on WhatsApp
                              <motion.div
                                className="relative w-3 h-3 sm:w-4 sm:h-4"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                →
                              </motion.div>
                            </a>
                          </Button>
                        </div>
                        <div className="w-full md:w-1/2">
                          <motion.p
                            className="text-sm sm:text-base text-foreground/90 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-10% 0px" }}
                            transition={{ duration: 0.5 }}
                          >
                            <Markdown>{service.features}</Markdown>
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Scrollbar personalizzata con supporto mobile migliorato */}
          <motion.div
            className="fixed right-0 top-0 h-screen w-[3px] md:w-[8px] overflow-hidden z-50" // Ridotta width su mobile
            style={{
              background: "hsl(var(--primary)/0.1)",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
                background: "hsl(var(--primary))",
                boxShadow: "0 0 20px 1px hsl(var(--primary))",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm and I&apos;ll respond whenever
                I can. I will ignore all soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
