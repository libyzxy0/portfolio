"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full h-20 px-6 flex flex-row items-center justify-between md:px-16 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex flex-row items-center gap-2">
          <Image src={logo} alt="logo" className="h-12 w-12" />
          <h1 className="scroll-m-20 text-primary text-xl font-extrabold font-mono tracking-tight text-balance">
            libyzxy0
          </h1>
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-row items-center gap-4">
            {links.map((link) => (
              <li
                key={link.label}
                className="font-mono text-sm hover:bg-foreground hover:text-background px-1 transition-colors"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li className="ml-4 mr-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            size="icon"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col md:hidden">
          <div className="w-full h-20 px-6 flex items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <Image src={logo} alt="logo" className="h-12 w-12" />
              <h1 className="scroll-m-20 text-primary text-xl font-extrabold font-mono tracking-tight text-balance">
                libyzxy0
              </h1>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <Button
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <ul className="flex flex-col items-center justify-center gap-8 flex-1">
            {links.map((link) => (
              <li key={link.label} className="font-mono text-xl">
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}