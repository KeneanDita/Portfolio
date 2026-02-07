import * as React from "react";

import { cn } from "@/lib/utils";

export type BackgroundDecorVariant =
  | "hero"
  | "warm"
  | "cool"
  | "mixed"
  | "neutral";

const VARIANT_COLORS: Record<BackgroundDecorVariant, { a: string; b: string }> = {
  hero: { a: "var(--chart-2)", b: "var(--chart-3)" },
  warm: { a: "var(--chart-2)", b: "var(--chart-5)" },
  cool: { a: "var(--chart-3)", b: "var(--chart-1)" },
  mixed: { a: "var(--chart-4)", b: "var(--chart-2)" },
  neutral: { a: "var(--chart-3)", b: "var(--chart-3)" },
};

function positionsFor(variant: BackgroundDecorVariant) {
  switch (variant) {
    case "hero":
      return {
        blobA: "-top-28 right-[-10rem]",
        blobB: "bottom-[-10rem] left-[-8rem]",
        ringA: "top-20 left-[8%]",
        ringB: "bottom-24 right-[10%]",
        sparkleCluster: "top-16 right-[18%]",
      };
    case "warm":
      return {
        blobA: "-top-24 left-[-10rem]",
        blobB: "bottom-[-9rem] right-[-7rem]",
        ringA: "top-24 right-[12%]",
        ringB: "bottom-24 left-[10%]",
        sparkleCluster: "top-10 left-[18%]",
      };
    case "cool":
      return {
        blobA: "-top-24 right-[-10rem]",
        blobB: "bottom-[-10rem] left-[-9rem]",
        ringA: "top-24 left-[14%]",
        ringB: "bottom-20 right-[12%]",
        sparkleCluster: "top-12 right-[22%]",
      };
    case "mixed":
      return {
        blobA: "-top-24 left-[-10rem]",
        blobB: "bottom-[-10rem] left-[55%]",
        ringA: "top-20 left-[10%]",
        ringB: "bottom-24 right-[16%]",
        sparkleCluster: "top-12 right-[18%]",
      };
    default:
      return {
        blobA: "-top-24 right-[-10rem]",
        blobB: "bottom-[-10rem] left-[-9rem]",
        ringA: "top-24 left-[12%]",
        ringB: "bottom-24 right-[12%]",
        sparkleCluster: "top-12 right-[20%]",
      };
  }
}

export function BackgroundDecor({
  variant = "neutral",
  className,
}: {
  variant?: BackgroundDecorVariant;
  className?: string;
}) {
  const colors = VARIANT_COLORS[variant];
  const pos = positionsFor(variant);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {/* Subtle dotted + gradient wash */}
      <div className="absolute inset-0 bg-decor-dots opacity-[0.55]" />
      <div className="absolute inset-0 bg-decor-vignette" />

      {/* Blobs */}
      <div
        className={cn(
          "decor-animate decor-float-slow absolute h-[26rem] w-[26rem] rounded-full blur-3xl",
          "opacity-[0.18] dark:opacity-[0.14]",
          pos.blobA,
        )}
        style={{ backgroundColor: colors.a }}
      />
      <div
        className={cn(
          "decor-animate decor-float-slower absolute h-[30rem] w-[30rem] rounded-full blur-3xl",
          "opacity-[0.16] dark:opacity-[0.12]",
          pos.blobB,
        )}
        style={{ backgroundColor: colors.b }}
      />

      {/* Rings */}
      <div
        className={cn(
          "decor-animate decor-spin-soft absolute h-44 w-44 rounded-full",
          "border border-foreground/10 dark:border-foreground/15",
          "bg-background/20 dark:bg-background/10",
          "shadow-sm",
          pos.ringA,
        )}
      />
      <div
        className={cn(
          "decor-animate decor-wobble absolute h-28 w-28 rounded-full",
          "border border-foreground/10 dark:border-foreground/15",
          "bg-background/20 dark:bg-background/10",
          "shadow-sm",
          pos.ringB,
        )}
      />

      {/* Sparkles / tiny shapes */}
      <div className={cn("absolute", pos.sparkleCluster)}>
        <div className="decor-animate decor-pop relative">
          <div className="absolute left-0 top-0 h-2.5 w-2.5 rotate-12 rounded-sm bg-foreground/15 dark:bg-foreground/20" />
          <div className="absolute left-8 top-5 h-2 w-2 -rotate-12 rounded-sm bg-foreground/10 dark:bg-foreground/15" />
          <div className="absolute left-4 top-10 h-3 w-3 rotate-45 rounded-sm bg-foreground/10 dark:bg-foreground/15" />
          <div className="absolute left-12 top-12 h-2.5 w-2.5 -rotate-45 rounded-full bg-foreground/10 dark:bg-foreground/15" />
        </div>
      </div>

      {/* Soft mask so decor stays near edges */}
      <div className="absolute inset-0 bg-decor-mask" />
    </div>
  );
}
