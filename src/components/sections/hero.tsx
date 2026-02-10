import Image from "next/image";
import { Github, Linkedin, MapPin, Send } from "lucide-react";

import { BackgroundDecor } from "@/components/background-decor";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/portfolio";
export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden border-b"
    >
      <BackgroundDecor variant="hero" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid w-full items-center gap-10 md:grid-cols-[1fr_360px]">
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <h1 className="font-integral text-4xl font-bold tracking-tight sm:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">{siteConfig.title}</p>
            </div>

            <p className="max-w-2xl text-muted-foreground">{siteConfig.headline}</p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.resumeHref} download>
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Badge>Open to work</Badge>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Button asChild variant="ghost" size="icon">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <Send className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border bg-card/60 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-muted/40">
                <Image
                  src="/headshot.png"
                  alt={`${siteConfig.name} headshot`}
                  fill
                  priority
                  unoptimized
                  sizes="(min-width: 768px) 360px, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
