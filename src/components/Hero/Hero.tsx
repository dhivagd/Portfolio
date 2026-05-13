"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "../ui/TerminalWindow";
import { HologramScene } from "./HologramScene";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (delay > 0) {
      timeout = setTimeout(() => {
        startTyping();
      }, delay);
    } else {
      startTyping();
    }

    function startTyping() {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayText}<span className="animate-pulse">_</span></span>;
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      <HologramScene />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(0,243,255,0.2)]">
              SOC Dashboard Online
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white tracking-tight">
              <span className="block opacity-90">DHIVAGAR</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary neon-text-cyan">
                PAKKIRISAMY
              </span>
            </h1>
            
            <div className="h-12 text-xl lg:text-2xl font-mono text-muted-foreground">
              <TypewriterText text="Cybersecurity & Digital Forensics Student" delay={800} />
            </div>
            
            <p className="text-muted-foreground/80 max-w-lg leading-relaxed">
              A passionate learner pursuing B.Tech in Cyber Security and Digital Forensics with strong interest in cybersecurity, digital forensics, programming, and emerging technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#about" className="group relative px-8 py-4 bg-primary/10 text-primary font-heading font-bold tracking-widest uppercase border border-primary hover:bg-primary/20 transition-all duration-300 neon-box-cyan flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">Enter System</span>
              <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="px-8 py-4 bg-transparent text-white font-heading font-bold tracking-widest uppercase border border-white/20 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center">
              View Intel
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative h-[400px]">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
};
