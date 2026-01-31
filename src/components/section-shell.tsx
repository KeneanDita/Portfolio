import * as React from "react";

import { cn } from "@/lib/utils";

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
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
