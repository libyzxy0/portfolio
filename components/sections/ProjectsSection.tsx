import { Code, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS } from "@/data/portfolio";

export const ProjectsSection = () => (
  <section id="projects" className="w-full py-20 px-6 md:px-16 border-t border-border/40 bg-muted/20">
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-primary font-mono text-sm">
        <Code className="h-4 w-4" />
        <span>04. Projects</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
        Things I&apos;ve built
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <Card
            key={idx}
            className="border border-border/60 bg-background/80 hover:border-primary/50 transition-colors"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-mono text-xl">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-muted-foreground font-mono text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <CardDescription className="font-mono text-sm mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-mono text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);