"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => (
  <section id="contact" className="w-full py-20 px-6 md:px-16 border-t border-border/40">
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-primary font-mono text-sm">
        <Mail className="h-4 w-4" />
        <span>05. Contact</span>
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">Get in touch</h2>
        <p className="font-mono text-sm text-muted-foreground">
          Got a question, project proposal, or just want to say hi? Send a message below!
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-lg">
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
  </section>
);