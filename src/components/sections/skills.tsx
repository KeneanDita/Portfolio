import { SectionShell } from "@/components/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups } from "@/lib/portfolio";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Skills"
      description="Grouped for fast scanning no bars, just what I use."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <Card key={group.title} className="h-full">
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={skill.label}
                        className="flex items-center gap-2 rounded bg-muted px-3 py-1 font-mono text-sm text-foreground transition-colors hover:bg-muted/80"
                      >
                        {skill.iconSrc ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={skill.iconSrc}
                            alt={skill.label}
                            className="h-5 w-5"
                            loading="lazy"
                          />
                        ) : SkillIcon ? (
                          <SkillIcon className="h-5 w-5" aria-hidden="true" />
                        ) : null}
                        {skill.label}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
