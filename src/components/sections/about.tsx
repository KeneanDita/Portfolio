import { BookOpen, Target } from "lucide-react";

import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { about } from "@/lib/portfolio";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      title="About"
      description="A quick snapshot of what I do and what I’m focused on."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {about.summary.map((p) => (
              <p key={p} className="text-muted-foreground">
                {p}
              </p>
            ))}
            <Separator />
            <div>
              <div className="mb-2 text-sm font-medium">Focus areas</div>
              <div className="flex flex-wrap gap-2">
                {about.focusAreas.map((x) => (
                  <Badge key={x} variant="secondary">
                    {x}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Currently</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium">
                <BookOpen className="h-4 w-4" />
                Learning
              </div>
              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                {about.learningNow.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium">
                <Target className="h-4 w-4" />
                Roles I’m targeting
              </div>
              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                {about.targeting.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
