import { User } from "lucide-react";
import Image from "next/image";
import me from '@/assets/me.png';

export const AboutSection = () => (
    <section id="about" className="w-full py-20 px-6 md:px-16 border-t border-border/40">
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-primary font-mono text-sm">
                <User className="h-4 w-4" />
                <span>01. About Me</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:flex-1 md:max-w-2xl space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
                        Passionate about making systems that solve problems.
                    </h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4 font-mono text-sm md:text-base">
                        <p>
                            Hey there! I&apos;m <span className="text-foreground font-semibold">Jan Liby Dela Costa</span>, a BSIT student who loves building software that solves real-life problems and helps people be more productive. For me, it starts with a simple idea or an everyday struggle, and I enjoy figuring out how to turn it into an app that makes life a little easier.
                        </p>
                        <p>
                            I build web and mobile applications, and I also make basic Arduino projects where code meets the physical world. In my free time, I keep learning new technologies and working on projects to gain more experience, and every project, big or small, teaches me something new.
                        </p>
                        <p>
                            I also tutor programming languages, helping beginners learn the basics in a simple, patient way and gain confidence in their own code. I believe teaching others also teaches myself, because explaining a concept to someone else is one of the best ways to truly understand it. I&apos;m still growing, and I&apos;m always open to learning, collaborating, and building something meaningful.
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-sm md:w-80 lg:w-96 shrink-0">
                    <Image
                        src={me}
                        alt="me"
                        className="w-full aspect-[4/5] object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    </section>
);