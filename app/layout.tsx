import type { Metadata } from "next";
import "./globals.css";
import { Archivo_Black, Geist, Martian_Mono } from "next/font/google"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
})

const courierPrime = Martian_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
})

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: "Jan Liby Dela Costa | Full-Stack Developer",
  description: "Full-stack developer and a BSIT student that loves building software that solves real-life problems and helps people be more productive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased scroll-smooth", archivoBlack.variable, "font-sans", geist.variable, courierPrime.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
