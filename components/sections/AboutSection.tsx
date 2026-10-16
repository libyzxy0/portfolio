
import Image from "next/image";
import me from "@/assets/me.png";
import { User, Code2, Cpu } from "lucide-react";

export const AboutSection = () => (
    <section
        id="about"
        className="w-full py-12 md:py-20 px-5 sm:px-8 md:px-16 border-t border-border/40"
    >
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            <div className="flex items-center gap-2 text-primary font-mono text-sm">
                <User className="h-4 w-4" />
                <span>01. About Me</span>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-10">
                <div className="shrink-0 w-40 sm:w-48 md:w-80 lg:w-96 md:order-2">
                    <div className="shrink-0 w-48 sm:w-56 md:w-80 lg:w-96 md:order-2">
                        <div className="relative aspect-square md:aspect-[4/5]">

                            <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-2xl border-2 border-primary/40" />

                            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/25 via-primary/5 to-transparent">
                                {/* Dot grid */}
                                <div
                                    className="absolute inset-0 text-primary/30"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(currentColor 1px, transparent 1px)",
                                        backgroundSize: "16px 16px",
                                    }}
                                />

                                <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />

                                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-2 border-primary/30 md:h-32 md:w-32 md:-right-10 md:-top-10" />

                                <Image
                                    src={me}
                                    alt="Jan Liby Dela Costa"
                                    priority
                                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 320px, 384px"
                                    className="relative z-10 h-full w-full object-cover object-top"
                                />
                            </div>

                            <div className="absolute -left-3 bottom-8 z-20 flex items-center gap-2 rounded-lg border border-border bg-background/90 px-2.5 py-1.5 font-mono text-[10px] text-primary shadow-lg backdrop-blur md:-left-6 md:text-xs">
                                <Code2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                <span>&lt;/&gt;</span>
                            </div>
                            <div className="absolute -right-2 top-10 z-20 flex items-center gap-2 rounded-lg border border-border bg-background/90 px-2.5 py-1.5 font-mono text-[10px] text-primary shadow-lg backdrop-blur md:-right-6 md:text-xs">
                                <Cpu className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                <span>I'm Jan</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="min-w-0 md:flex-1 md:max-w-2xl md:order-1 space-y-5 md:space-y-6 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-tight">
                        Passionate about making systems that solve problems.
                    </h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4 font-mono text-[13px] sm:text-sm md:text-base text-left">
                        <p>
                            Hey there! I&apos;m{" "}
                            <span className="text-foreground font-semibold">Jan Liby Dela Costa</span>, a BSIT student who loves building software that solves real-life problems and helps people be more productive. For me, it starts with a simple idea or an everyday struggle, and I enjoy figuring out how to turn it into an app that makes life a little easier.
                        </p>
                        <p>
                            I build web and mobile applications, and I also make basic Arduino projects where code meets the physical world. In my free time, I keep learning new technologies and working on projects to gain more experience, and every project, big or small, teaches me something new.
                        </p>
                        <p>
                            I also tutor programming languages, helping beginners learn the basics in a simple, patient way and gain confidence in their own code. I believe teaching others also teaches myself, because explaining a concept to someone else is one of the best ways to truly understand it. I&apos;m still growing, and I&apos;m always open to learning, collaborating, and building something meaningful.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);