import { Github, Linkedin, Mail, Send } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/portfolio";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      title="Contact"
      description="If you want to collaborate or chat about a role, reach out."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              The fastest way to reach me is email. I usually reply within 24-48 hours.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a className="hover:text-foreground" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <a
                  className="hover:text-foreground"
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                <a
                  className="hover:text-foreground"
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a
                  className="hover:text-foreground"
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild>
                <a href={`mailto:${siteConfig.email}`}>
                  Email me
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.resumeHref} download>
                  Download Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
