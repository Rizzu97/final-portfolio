"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  href: string;
  badges: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Card className="relative overflow-hidden border border-border/50 hover:border-border/80 transition-colors duration-300">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-12 rounded-xl">
            <AvatarImage src={logoUrl} alt={altText} />
            <AvatarFallback className="rounded-xl">{altText[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-2">
              <p className="font-medium leading-none">{title}</p>
              {badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="rounded-md font-normal"
                >
                  {badge}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            <p className="text-xs text-muted-foreground">{period}</p>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
