import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  projectUrl?: string;
  index: number;
  total: number;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  projectUrl,
  index,
  total,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortDescription =
    description.slice(0, 120) + (description.length > 120 ? "..." : "");

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex-shrink-0 w-[85vw] md:w-[600px] rounded-2xl bg-black/20 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.12] transition-colors duration-700"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent rounded-2xl" />

      {/* Project number */}
      <div className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.2em] uppercase">
        <span className="text-white/30">
          Project {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Main content */}
      <div className="relative p-8 flex flex-col min-h-[320px]">
        <div className="space-y-6">
          {/* Title section */}
          <div className="space-y-2 max-w-[80%]">
            <h3 className="text-2xl font-light tracking-wide text-white/90 group-hover:text-white transition-colors duration-700">
              {title}
            </h3>
            {dates && (
              <p className="text-[12px] text-white/40 tracking-[0.2em] uppercase font-light">
                {dates}
              </p>
            )}
          </div>

          {/* Description with animation */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={isExpanded ? "expanded" : "collapsed"}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="text-sm leading-relaxed font-light tracking-wide"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
              >
                {isExpanded ? description : shortDescription}
              </motion.div>
            </AnimatePresence>

            {description.length > 120 && (
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 text-white/40 hover:text-white text-xs flex items-center gap-2 transition-all duration-300"
                whileHover={{ gap: "12px" }}
              >
                <span className="font-light tracking-wide">
                  {isExpanded ? "Show less" : "Read more"}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "anticipate" }}
                >
                  <ChevronDown className="w-3 h-3" />
                </motion.div>
              </motion.button>
            )}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-auto pt-8">
          <div className="flex flex-col gap-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/[0.02] hover:bg-white/[0.05] text-white/40 hover:text-white/90 border-white/[0.05] px-3 py-1 text-[11px] tracking-wider font-light transition-all duration-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* View project link */}
            {projectUrl && (
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link w-fit flex items-center gap-2 hover:gap-3 text-white/40 hover:text-white transition-all duration-500"
              >
                <span className="text-xs tracking-wider font-light">
                  View Project
                </span>
                <ArrowUpRight className="w-3 h-3 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
