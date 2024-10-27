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
import { Check, FileText } from "lucide-react"; // Importiamo l'icona FileText da lucide-react
import Link from "next/link";
import Markdown from "react-markdown";
import { Code2, GraduationCap, Briefcase } from "lucide-react";
import { PriceCard } from "@/components/price-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { scrollYProgress } = useScroll();

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
              opacity: useTransform(scrollYProgress, [0.7, 1], [0.1, 0.05]),
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                {" "}
                {/* Ridotto size e margin */}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                  Expert Guidance &
                  <span className="block mt-1">Development Solutions</span>
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

        {/* Cards container con scrolling ottimizzato e spazi ridotti */}
        <div className="container relative max-w-5xl mx-auto">
          {/* Cards con spacing ridotto */}
          <div className="relative space-y-[20vh]">
            {" "}
            {/* Ridotto da 30vh */}
            {DATA.services.map((service, index) => (
              <div key={service.title} className="h-[50vh]">
                {" "}
                {/* Ridotto da 60vh */}
                <div className="sticky top-20">
                  {" "}
                  {/* Ridotto da top-24 */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      margin: "-5% 0px", // Ridotto da -10%
                      amount: 0.6,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative"
                  >
                    {/* Glow effect migliorato */}
                    <motion.div
                      className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-2xl blur-md"
                      whileInView={{
                        opacity: [0, 0.6, 0],
                        transition: {
                          duration: 1.5,
                          ease: "easeInOut",
                          times: [0, 0.5, 1],
                        },
                      }}
                      viewport={{
                        margin: "-15% 0px",
                        amount: 0.6,
                      }}
                    />
                    <div
                      className={cn(
                        "relative backdrop-blur-sm border rounded-2xl p-8 md:p-10",
                        "bg-card/95 transition-all duration-500",
                        "group-hover:border-primary/50 border-border/50",
                        "shadow-lg shadow-primary/0 group-hover:shadow-primary/5",
                        "transform transition-transform duration-300" // Aggiunto per una transizione più fluida
                      )}
                    >
                      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
                        <div className="w-full md:w-1/2 space-y-6">
                          <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/[0.08] text-primary">
                              <service.icon className="w-5 h-5" />
                              <span className="text-sm font-medium">
                                {service.title}
                              </span>
                            </div>
                            <div className="space-y-2">
                              <p className="text-base text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </div>
                          {/* CTA modificato per WhatsApp */}
                          <Button
                            className="w-full md:w-auto relative overflow-hidden group/button"
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
                                className="relative w-4 h-4"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                →
                              </motion.div>
                            </a>
                          </Button>
                        </div>
                        <div className="w-full md:w-1/2">
                          <ul className="grid gap-4">
                            {service.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-4 group/item"
                              >
                                <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-primary/20">
                                  <Check className="h-3 w-3 text-primary" />
                                </div>
                                <span className="text-sm leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Scrollbar più sottile e luminosa */}
          <motion.div
            className="fixed left-8 top-0 h-screen w-[1px] bg-foreground/5 rounded-full overflow-hidden z-50"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0.8]),
            }}
          >
            <motion.div
              className="w-full h-full origin-top"
              style={{
                scaleY: scrollYProgress,
                background:
                  "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primary)/0.5))",
                boxShadow: "0 0 15px hsl(var(--primary))",
                opacity: useTransform(scrollYProgress, [0, 0.1], [0.6, 1]),
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
