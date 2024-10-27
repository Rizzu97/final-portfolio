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
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react"; // Aggiungiamo questi import

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  // Definiamo tutte le trasformazioni qui insieme
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0.7, 1],
    [0.1, 0.05]
  );
  const projectsBackgroundOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    [0.1, 0]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Aggiungi questa funzione per calcolare il delay delle animazioni
  const getWorkItemDelay = (index: number) =>
    BLUR_FADE_DELAY * 10 + index * 0.15;

  if (!isMounted) {
    return null; // o un loader/placeholder
  }

  return (
    <main className="flex flex-col min-h-[100dvh] relative">
      {" "}
      {/* Aggiunto relative */}
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[85vh] flex items-center justify-center relative py-20"
      >
        {/* Background subtle gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
        />

        <div className="mx-auto w-full max-w-2xl relative">
          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gap-8 flex flex-col md:flex-row items-center justify-between"
          >
            {/* Text content */}
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary/80"></span>
                  </span>
                  <span className="text-sm text-primary/80">
                    Available for work
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Hi, I'm{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                      {DATA.name.split(" ")[0]}
                    </span>{" "}
                    👋
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base md:text-lg text-muted-foreground max-w-[600px] leading-relaxed"
                >
                  {DATA.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="default"
                    className="group flex items-center gap-2 hover:scale-105 transition-all duration-300"
                  >
                    <FileText className="w-4 h-4 group-hover:rotate-6 transition-transform duration-300" />
                    <span>View CV</span>
                  </Button>
                </Link>

                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="group flex items-center gap-2 hover:scale-105 transition-all duration-300"
                  >
                    <span>Contact me</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Avatar container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                type: "spring",
                stiffness: 125,
                damping: 10,
              }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-2xl opacity-20 animate-pulse" />
              <Avatar className="size-28 md:size-32 border-2 border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="scale-110 hover:scale-105 transition-transform duration-500"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>

          {/* Scroll indicator riposizionato e migliorato */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2" // Cambiato da absolute a relative con margin-top
          >
            <motion.div
              animate={{
                y: [0, 5, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-primary/40 font-light">
                Discover more
              </span>
              <motion.div className="text-primary/40">↓</motion.div>
            </motion.div>
          </motion.div>
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
      <section id="work" className="relative py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto px-4" // Aggiunto max-width e padding
        >
          {/* Header centrato */}
          <div className="flex flex-col items-center text-center space-y-6 mb-16">
            {" "}
            {/* Modificato spacing e allineamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-xl opacity-20" />
              <span className="relative px-4 py-1.5 text-sm font-medium bg-primary/10 rounded-full text-primary border border-primary/20">
                Experience
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 max-w-2xl" // Aggiunto max-width
            >
              My Professional Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground max-w-[600px] text-base sm:text-lg" // Aggiunto max-width e responsive text
            >
              A timeline of my professional experience and the amazing companies
              I&apos;ve worked with
            </motion.p>
          </div>

          {/* Timeline container con spacing migliorato */}
          <div className="relative space-y-12">
            {" "}
            {/* Aumentato spacing tra le card */}
            {/* Timeline line con gradient migliorato */}
            <motion.div
              className="absolute left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            {DATA.work.map((work, id) => (
              <motion.div
                key={work.company}
                className="relative pl-24 group"
                initial={{
                  opacity: 0,
                  x: -20,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: id * 0.2,
                  ease: [0.21, 1.11, 0.81, 0.99],
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Year marker con font migliorato */}
                <motion.div
                  className="absolute left-0 top-[12px] flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: id * 0.2 + 0.3 }}
                >
                  <div className="w-24 text-sm text-primary/50 font-mono tracking-wider">
                    {work.start.split(" ")[1]}
                  </div>
                </motion.div>

                {/* Connection line con gradient migliorato */}
                <div className="absolute left-12 top-[12px] w-12 h-[1px] overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-gradient-to-r from-primary/50 to-primary/10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: id * 0.2 + 0.2 }}
                    style={{ originX: 0 }}
                  />
                </div>

                {/* Card wrapper con hover migliorato */}
                <motion.div
                  className="relative transform-gpu"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ResumeCard
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="relative py-16">
        {" "}
        {/* Ridotto da py-24 */}
        <div className="space-y-8 w-full relative z-10">
          {" "}
          {/* Ridotto space-y da 16 a 8 */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-xl opacity-20" />
                <span className="relative px-4 py-1.5 text-sm font-medium bg-primary/10 rounded-full text-primary border border-primary/20">
                  My Projects
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
              >
                Check out my latest work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl"
              >
                I&apos;ve worked on a variety of projects, from simple websites
                and mobile apps to complex web applications.
              </motion.p>

              {/* Scroll indicator migliorato */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 mt-6 text-primary/40"
              >
                <motion.div
                  animate={{ x: [-10, 0, -10] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ←
                </motion.div>
                <span className="text-xs uppercase tracking-[0.2em] font-light">
                  Scroll horizontally
                </span>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.div>
              </motion.div>
            </div>
          </BlurFade>
          {/* Horizontal scroll container */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 px-4 md:px-8 pb-12 snap-x snap-mandatory hide-scrollbar">
              {DATA.projects.map((project, id) => (
                <div key={project.title} className="snap-center">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    projectUrl={project.projectUrl}
                    index={id}
                    total={DATA.projects.length}
                  />
                </div>
              ))}
            </div>

            {/* Scroll indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="relative py-24 bg-gradient-to-b from-background via-background/50 to-background" // Rimosso min-h-screen e modificato padding
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_65%)]"
            style={{
              opacity: backgroundOpacity,
            }}
          />
        </div>

        {/* Titolo con spacing ridotto */}
        <div className="container max-w-5xl mx-auto px-4 mb-8">
          {" "}
          {/* Ridotto da mb-12 */}
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

        {/* Cards container con spacing ottimizzato */}
        <div className="container relative max-w-5xl mx-auto">
          <div className="relative space-y-[10vh] md:space-y-[15vh]">
            {" "}
            {/* Ridotto da 15vh/20vh */}
            {DATA.services.map((service, index) => (
              <div key={service.title} className="min-h-[50vh] md:h-[40vh]">
                {" "}
                {/* Ridotto da 60vh/50vh */}
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

          {/* Scrollbar personalizzata migliorata */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-[3px] md:w-[5px] bg-black/5" // Modificato positioning e dimensioni
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent, transparent)",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full origin-top rounded-full"
              style={{
                scaleY: scrollYProgress,
                height: "100%",
                background: "hsl(var(--primary))",
                opacity: 0.3,
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
