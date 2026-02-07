import * as React from "react";

import { cn } from "@/lib/utils";
import { BackgroundDecor, type BackgroundDecorVariant } from "@/components/background-decor";

function variantForSection(id: string): BackgroundDecorVariant {
  // Small variation per section to avoid visual repetition while keeping a consistent vibe.
  if (id === "about") return "warm";
  if (id === "skills") return "cool";
  if (id === "projects") return "mixed";
  if (id === "contact") return "warm";
  return "neutral";
}

export function SectionShell({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 relative overflow-hidden py-16 sm:py-20",
        "border-b border-border/60 last:border-b-0",
        className,
      )}
    >
      <BackgroundDecor variant={variantForSection(id)} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {description ? (
            <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
