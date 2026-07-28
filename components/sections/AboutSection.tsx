import { User } from "lucide-react";

export const AboutSection = () => (
    <section id="about" className="w-full py-20 px-6 md:px-16 border-t border-border/40">
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-primary font-mono text-sm">
                <User className="h-4 w-4" />
                <span>01. About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
                Passionate about making system that solve problems.
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 font-mono text-sm md:text-base">
                <p>
                    Hey there! I&apos;m <span className="text-foreground font-semibold">libyzxy0</span>, a BSIT student who enjoys building software that solves real-life problems and helps people be more productive. I like turning simple ideas into useful apps that make everyday tasks easier.
                </p>
                <p>
                    I'm interested in web and mobile development, and I also enjoy making basic Arduino projects. In my free time, I like learning new technologies, improving my skills, and building projects to gain more experience.
                </p>
            </div>
        </div>
    </section>
);