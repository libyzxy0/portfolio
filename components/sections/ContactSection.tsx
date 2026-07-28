"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LinkedinIcon } from "../icons/devicon-plain-linkedin";
import { FacebookIcon } from "../icons/cib-facebook";
import { Mail } from "lucide-react";
import { GithubIcon } from "../GithubIcon";

export const ContactSection = () => (
  <section id="contact" className="w-full py-20 px-6 md:px-16 border-t border-border/40">
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-primary font-mono text-sm">
        <Mail className="h-4 w-4" />
        <span>05. Contact</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
              Get in touch
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Got a question, project proposal, or just want to say hi? Send a message or reach out directly through any of my channels!
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>contact@libyzxy0.me</span>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5 text-primary" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-5 w-5 text-primary" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <FacebookIcon className="h-5 w-5 text-primary" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 w-full">
          <div className="space-y-1">
            <label className="font-mono text-xs text-muted-foreground">Name</label>
            <Input placeholder="Your Name" className="font-mono text-sm py-5" />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-xs text-muted-foreground">Email</label>
            <Input type="email" placeholder="your.email@example.com" className="font-mono text-sm py-5" />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-xs text-muted-foreground">Message</label>
            <Textarea placeholder="Write your message here..." rows={4} className="font-mono text-sm" />
          </div>
          <Button type="submit" className="w-full font-mono">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </section>
);