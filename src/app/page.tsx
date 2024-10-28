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
  const [isExpanded, setIsExpanded] = useState<boolean[]>(
    new Array(DATA.work.length).fill(false)
  );

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

  const toggleExpand = (index: number) => {
    setIsExpanded((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (!isMounted) {
    return null; // o un loader/placeholder
  }

  return (
    <main className="flex flex-col min-h-[100dvh] relative overflow-x-hidden">
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
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-primary/10 rounded-full text-primary border border-primary/20"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for work</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Hi, I am{" "}
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
                    className="group flex items-center gap-2 hover:scale-105 transition-all duration-300 min-w-[120px] justify-center"
                  >
                    <FileText className="w-4 h-4 group-hover:rotate-6 transition-transform duration-300" />
                    <span>View CV</span>
                  </Button>
                </Link>

                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="group flex items-center gap-2 hover:scale-105 transition-all duration-300 min-w-[120px] justify-center"
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
      <section id="work" className="relative py-20">
        {" "}
        {/* Cambiato da py-24 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto px-4"
        >
          {/* Header centrato */}
          <div className="flex flex-col items-center text-center space-y-6 mb-16">
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
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 max-w-2xl"
            >
              My Professional Journey
            </motion.h2>
          </div>

          {/* Work Experience Cards */}
          <div className="relative space-y-8 sm:space-y-12">
            {/* Timeline line principale - ottimizzata per mobile */}
            <div className="absolute left-4 sm:left-12 top-0 bottom-0 flex flex-col items-center">
              <div className="w-[1px] h-full bg-gradient-to-b from-primary/40 via-primary/30 to-primary/20" />
            </div>

            {DATA.work.map((work, id) => (
              <motion.div
                key={work.company}
                className="relative pl-12 sm:pl-24 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: id * 0.1 }}
              >
                {/* Year marker adattato per mobile */}
                <div className="absolute left-0 top-[28px] hidden sm:flex items-center">
                  <div className="w-10 font-mono text-sm text-primary/60 font-medium tracking-wider">
                    {work.start.split(" ")[1]}
                  </div>
                </div>

                {/* Connection line adattata per mobile */}
                <div className="absolute left-4 sm:left-12 top-[31px] w-8 sm:w-12 h-[1px]">
                  <div className="w-full h-full bg-gradient-to-r from-primary/40 to-transparent" />
                </div>

                {/* Card ottimizzata per mobile */}
                <motion.div
                  className="relative transform-gpu cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => toggleExpand(id)}
                >
                  <div
                    className={cn(
                      "relative rounded-xl transition-all duration-500",
                      "bg-black/20 backdrop-blur-sm",
                      "border border-primary/[0.08]",
                      "group-hover:bg-black/30",
                      "group-hover:border-primary/20",
                      isExpanded[id] && "bg-black/40 border-primary/20"
                    )}
                  >
                    <div className="relative z-10 p-4 sm:p-7">
                      <div className="flex justify-between items-start gap-3 sm:gap-5">
                        <div className="flex gap-3 sm:gap-5">
                          {/* Avatar più piccolo su mobile */}
                          <Avatar
                            className={cn(
                              "size-12 sm:size-14 rounded-xl overflow-hidden",
                              "border border-primary/10",
                              "group-hover:border-primary/20 transition-colors duration-500",
                              "bg-black/40"
                            )}
                          >
                            <AvatarImage
                              src={work.logoUrl}
                              alt={work.company}
                              className="object-cover"
                            />
                            <AvatarFallback className="rounded-xl text-primary/60 font-medium">
                              {work.company[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1 sm:space-y-2">
                            {/* Anno visibile su mobile */}
                            <p className="text-xs text-primary/60 font-mono tracking-wider sm:hidden">
                              {work.start.split(" ")[1]}
                            </p>
                            <h3 className="font-semibold text-base sm:text-lg tracking-tight text-white">
                              {work.company}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-primary/80 font-medium tracking-wide">
                              {work.title}
                            </p>
                            <p className="text-[10px] sm:text-xs text-primary/60 font-light tracking-wider">
                              {work.start} - {work.end ?? "Present"}
                            </p>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "size-6 sm:size-8 flex items-center justify-center",
                            "text-primary/40 group-hover:text-primary/60",
                            "transition-all duration-500",
                            isExpanded[id] && "text-primary/80"
                          )}
                        >
                          <motion.span
                            animate={{ rotate: isExpanded[id] ? 180 : 0 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.32, 0.72, 0, 1],
                            }}
                            className="text-xs sm:text-sm"
                          >
                            ↓
                          </motion.span>
                        </div>
                      </div>

                      <motion.div
                        animate={{
                          height: isExpanded[id] ? "auto" : 0,
                          opacity: isExpanded[id] ? 1 : 0,
                        }}
                        initial={false}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className={cn(
                            "pt-4 sm:pt-7 space-y-4 sm:space-y-6",
                            "transition-opacity duration-500",
                            isExpanded[id] ? "opacity-100" : "opacity-0"
                          )}
                        >
                          <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed tracking-wide">
                            {work.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {work.badges.map((badge) => (
                              <Badge
                                key={badge}
                                variant="secondary"
                                className={cn(
                                  "rounded-md text-[10px] sm:text-[11px] font-medium tracking-wider py-1 px-2 sm:py-1.5 sm:px-3",
                                  "bg-primary/5 text-primary/70",
                                  "border border-primary/10",
                                  "hover:bg-primary/10 hover:border-primary/20",
                                  "transition-colors duration-500"
                                )}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        {" "}
        {/* Cambiato da py-16 */}
        <div className="space-y-8 w-full relative z-10">
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
        className="relative py-20 bg-gradient-to-b from-background via-background/50 to-background"
      >
        {/* Header della sezione */}
        <div className="container max-w-6xl mx-auto px-4 mb-16">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-xl opacity-20" />
              <span className="relative px-4 py-1.5 text-sm font-medium bg-primary/10 rounded-full text-primary border border-primary/20">
                Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
            >
              What I can help you with
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl"
            >
              Specialized in modern web and mobile development, offering
              end-to-end solutions for your digital needs
            </motion.p>
          </div>
        </div>

        {/* Cards container */}
        <div className="container relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group",
                  index === 2 ? "md:col-span-2 md:order-first" : ""
                )}
              >
                <div className="relative h-full">
                  {/* Popular badge come stripe diagonale */}
                  {index === 2 && (
                    <div
                      className={cn(
                        "absolute -right-[2px] top-0",
                        "w-[130px] h-[130px]",
                        "overflow-hidden",
                        "pointer-events-none",
                        "z-[1]"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute transform rotate-45 translate-x-[40px] -translate-y-[30px]",
                          "w-[200px] text-center",
                          "bg-emerald-500/40",
                          "py-1.5",
                          "border-b border-t border-emerald-500/50",
                          "text-[11px] font-medium tracking-wider",
                          "text-emerald-300",
                          "backdrop-blur-sm"
                        )}
                      >
                        Popular
                      </div>
                    </div>
                  )}

                  <div
                    className={cn(
                      "relative h-full rounded-xl",
                      "bg-black/20 backdrop-blur-sm",
                      "border border-white/[0.08]",
                      "group-hover:border-white/[0.15]",
                      "transition-all duration-700",
                      "flex flex-col"
                    )}
                  >
                    <div className="p-8 flex-1">
                      {" "}
                      {/* Aumentato da p-7 */}
                      {/* Service Header */}
                      <div className="flex items-start gap-5 mb-8">
                        <div
                          className={cn(
                            "p-3 rounded-lg",
                            "bg-white/[0.03]",
                            "ring-1 ring-white/[0.08]",
                            "group-hover:ring-white/[0.15]",
                            "transition-all duration-700"
                          )}
                        >
                          <service.icon className="w-5 h-5 text-white/90" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-[17px] font-medium text-white tracking-tight">
                              {service.title}
                            </h3>
                            {/* Badge Popular */}
                            {index === 2 && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={cn(
                                  "relative px-2 py-0.5",
                                  "bg-emerald-500/10",
                                  "border-l-2 border-emerald-500/50",
                                  "overflow-hidden"
                                )}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0"
                                  animate={{
                                    x: ["0%", "200%"],
                                  }}
                                  transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                  }}
                                />
                                <span className="relative text-[11px] font-medium text-emerald-400/90 tracking-wider">
                                  Popular
                                </span>
                              </motion.div>
                            )}
                          </div>
                          <p className="text-[13px] text-white/70 font-light leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      {/* Key Features */}
                      <ul
                        className={cn(
                          "space-y-4", // Aumentato da space-y-3
                          index === 2
                            ? "md:grid md:grid-cols-2 md:gap-6 md:space-y-0"
                            : "" // Aumentato gap
                        )}
                      >
                        {service.features.split("\n").map((feature, i) => (
                          <li key={i} className="flex items-start gap-4">
                            {" "}
                            {/* Aumentato gap */}
                            <Check className="w-4 h-4 text-white/50 mt-1 shrink-0" />{" "}
                            {/* Aumentato margin-top */}
                            <span className="text-[13px] text-white/70 font-light leading-relaxed">
                              {feature.trim()}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="px-8 pb-8 pt-3">
                      {" "}
                      {/* Aumentato padding */}
                      <Button
                        className={cn(
                          "w-full h-[42px]",
                          "bg-white/[0.02]",
                          "text-white/80 hover:text-white", // Aumentata opacità
                          "border border-white/[0.08]",
                          "hover:border-white/[0.15]",
                          "transition-all duration-700",
                          "font-light text-[13px]",
                          index === 2 ? "md:max-w-xs md:mx-auto" : ""
                        )}
                        variant="outline"
                        asChild
                      >
                        <a
                          href={`https://wa.me/${DATA.contact.tel.replace(
                            /[^0-9]/g,
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <span>Get Started</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                          >
                            →
                          </motion.div>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20">
        {" "}
        {/* Uniformato anche questa */}
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
