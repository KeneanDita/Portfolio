import { ExternalLink, Github, Package } from "lucide-react";

import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/portfolio";

function LinkIcon({ label }: { label: "GitHub" | "Docker" | "Live" }) {
  if (label === "GitHub") return <Github className="h-4 w-4" />;
  if (label === "Docker") return <Package className="h-4 w-4" />;
  return <ExternalLink className="h-4 w-4" />;
}

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      description="A selection of ML, backend, and CLI work-focused on outcomes and clarity."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <Card
              key={project.title}
              className="h-full transition-shadow hover:shadow-md"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
                      <div className="mt-1">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{project.problem}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="text-sm">
                  <span className="font-medium">Result:</span>{" "}
                  <span className="text-muted-foreground">{project.outcome}</span>
                </p>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <Button key={link.href} asChild size="sm" variant="outline">
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <span className="mr-2 inline-flex">
                        <LinkIcon label={link.label} />
                      </span>
                      {link.label}
                    </a>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
