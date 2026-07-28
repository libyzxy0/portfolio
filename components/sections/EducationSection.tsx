import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const EducationSection = () => (
  <section id="education" className="w-full py-20 px-6 md:px-16 border-t border-border/40 bg-muted/20">
    <div className="max-w-3xl mx-auto space-y-10">
      <div className="flex items-center gap-2 text-primary font-mono text-sm">
        <GraduationCap className="h-4 w-4" />
        <span>02. Education</span>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
          Academic Journey
        </h2>
      </div>

      <div className="relative border-l-2 border-border/60 ml-2 sm:ml-3 pl-6 sm:pl-8 space-y-8">
        <div className="relative group">
          <span className="absolute -left-[31px] sm:-left-[39px] top-6 h-3 w-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors z-10" />
          <Card className="border border-border/60 bg-background/80 backdrop-blur transition-all duration-200 group-hover:border-primary/50">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-xs text-primary font-semibold">
                  2026 — Present
                </span>
                <Badge variant="secondary" className="w-fit font-mono text-xs">
                  In Progress
                </Badge>
              </div>
              <CardTitle className="font-mono text-lg md:text-xl pt-1">
                Bachelor of Science in Information Technology
              </CardTitle>
              <CardDescription className="font-mono text-xs md:text-sm text-muted-foreground">
                Bulacan State University - Sarmiento
              </CardDescription>
            </CardHeader>
            <CardContent className="font-mono text-xs md:text-sm text-muted-foreground space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-primary select-none">$</span>
                <span>Learning Java Fundamentals, Web Technologies, and Database Systems.</span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="relative group">
          <span className="absolute -left-[31px] sm:-left-[39px] top-6 h-3 w-3 rounded-full border-2 border-border bg-background group-hover:border-primary group-hover:bg-primary transition-colors z-10" />
          <Card className="border border-border/60 bg-background/80 backdrop-blur transition-all duration-200 group-hover:border-primary/50">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-xs text-muted-foreground font-semibold">
                  2024 — 2026
                </span>
                <Badge variant="outline" className="w-fit font-mono text-xs">
                  Completed
                </Badge>
              </div>
              <CardTitle className="font-mono text-lg md:text-xl pt-1">
                Senior High School — TVL / ICT Strand
              </CardTitle>
              <CardDescription className="font-mono text-xs md:text-sm text-muted-foreground">
                La Concepcion College
              </CardDescription>
            </CardHeader>
            <CardContent className="font-mono text-xs md:text-sm text-muted-foreground space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-primary select-none">$</span>
                <span>Learned computer systems servicing, and basic hardware troubleshooting.</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);