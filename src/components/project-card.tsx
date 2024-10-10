import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { useRef, useState } from "react";
import Image from "next/image";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  video?: string;
  projectUrl: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  projectImage?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  video,
  projectUrl,
  links,
  className,
  projectImage,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && video) {
      videoRef.current.play();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current && video) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsHovered(false);
  };

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full cursor-pointer",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden bg-white dark:bg-black">
          {video ? (
            <video
              ref={videoRef}
              src={video}
              loop
              muted
              playsInline
              className={cn(
                "absolute top-1/2 left-1/2 w-full h-full",
                "transform -translate-x-1/2 -translate-y-1/2",
                "transition-transform duration-300 ease-out",
                isHovered && "scale-105"
              )}
              style={{
                objectFit: "contain",
              }}
            >
              Your browser does not support the video tag.
            </video>
          ) : projectImage ? (
            <Image
              src={projectImage}
              alt={title}
              layout="fill"
              objectFit="contain"
              className={cn(
                "transition-transform duration-300 ease-out",
                isHovered && "scale-105"
              )}
            />
          ) : null}
        </div>
      </div>
      <Link
        href={projectUrl || href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
      </Link>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
