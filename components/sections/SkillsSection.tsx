import { Code } from "lucide-react";
import { SKILLS } from "@/data/portfolio";

export const SkillsSection = () => (
  <section id="skills" className="w-full py-20 px-6 md:px-16 border-t border-border/40">
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-primary font-mono text-sm">
        <Code className="h-4 w-4" />
        <span>03. Tech Stack & Skills</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
        Technologies & Capabilities
      </h2>

      <div className="space-y-6">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="space-y-3">
            <h3 className="font-mono text-sm font-semibold text-primary">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5 items-center">
              {items.map((item) => (
                <img
                  key={item.name}
                  src={item.badge}
                  alt={item.name}
                  className="h-7 w-auto object-contain transition-transform hover:scale-105"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);