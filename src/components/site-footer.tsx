import { Github, Linkedin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{siteConfig.name}</span> · © {year}
        </div>

        <div className="flex items-center gap-2">
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
    </footer>
  );
}
