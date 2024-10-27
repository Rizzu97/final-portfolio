"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  icon: React.ReactNode;
}

export function PriceCard({
  title,
  price,
  description,
  features,
  popular,
  ctaText = "Get Started",
  ctaLink = "#contact",
  icon,
}: PriceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card
        className={cn(
          "relative h-full backdrop-blur-sm border-2",
          "bg-card/80",
          popular ? "border-primary shadow-lg" : "border-border/50"
        )}
      >
        {popular && (
          <div className="absolute -top-3 -right-3">
            <div className="p-1.5 rounded-full bg-primary shadow-lg">
              <Check className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        )}
        <CardHeader className="space-y-4">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10">{icon}</div>
              <h3 className="font-bold text-2xl">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex items-baseline text-4xl font-bold">
            {price}
            <span className="ml-1 text-base font-normal text-muted-foreground">
              /hour
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <Button
            variant={popular ? "default" : "outline"}
            className="w-full font-medium text-sm h-11"
            asChild
          >
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
