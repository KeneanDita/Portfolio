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

const PARTICLES = [
  { x: "8%", y: "26%", s: 2, o: 0.22, d: "0s" },
  { x: "16%", y: "62%", s: 3, o: 0.18, d: "-1.2s" },
  { x: "28%", y: "18%", s: 2, o: 0.16, d: "-2.1s" },
  { x: "42%", y: "70%", s: 2, o: 0.14, d: "-0.6s" },
  { x: "58%", y: "28%", s: 3, o: 0.16, d: "-1.8s" },
  { x: "66%", y: "54%", s: 2, o: 0.18, d: "-2.6s" },
  { x: "74%", y: "18%", s: 2, o: 0.14, d: "-0.9s" },
  { x: "84%", y: "66%", s: 3, o: 0.16, d: "-1.5s" },
  { x: "92%", y: "34%", s: 2, o: 0.14, d: "-2.3s" },
] as const;

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
      <div className="absolute inset-0 bg-decor-dots blur-[0.6px] opacity-[0.38]" />
      <div className="decor-animate decor-pan absolute inset-0 bg-decor-particles blur-[0.8px] opacity-[0.4]" />
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
          "blur-[0.25px]",
          pos.ringA,
        )}
      />
      <div
        className={cn(
          "decor-animate decor-wobble absolute h-28 w-28 rounded-full",
          "border border-foreground/10 dark:border-foreground/15",
          "bg-background/20 dark:bg-background/10",
          "shadow-sm",
          "blur-[0.25px]",
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

      {/* Smaller drifting particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="decor-animate decor-drift absolute rounded-full bg-foreground/20 dark:bg-foreground/25 blur-[0.6px]"
          style={{
            left: p.x,
            top: p.y,
            width: p.s,
            height: p.s,
            opacity: p.o,
            animationDelay: p.d,
          }}
        />
      ))}

      {/* Soft mask so decor stays near edges */}
      <div className="absolute inset-0 bg-decor-mask" />
    </div>
  );
}
