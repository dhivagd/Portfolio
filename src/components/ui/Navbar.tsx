"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Identity", href: "#about" },
    { name: "Arsenal", href: "#skills" },
    { name: "Clearances", href: "#certifications" },
    { name: "Modules", href: "#projects" },
    { name: "Connect", href: "#contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-primary/20 py-4 shadow-[0_4px_30px_rgba(0,243,255,0.1)]" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          <a href="#hero" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-primary group-hover:animate-pulse" />
            <span className="font-heading font-bold text-white tracking-widest text-lg group-hover:neon-text-cyan transition-colors">
              DP_SYS
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-primary transition-colors hover:shadow-[0_0_10px_rgba(0,243,255,0.8)] hover:bg-primary/10 px-2 py-1 rounded"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/Dhivagar_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary/10 border border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/20 transition-all flex items-center gap-2 neon-box-cyan rounded"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center border-l border-primary/30"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-2xl font-bold uppercase tracking-widest text-white hover:text-primary hover:neon-text-cyan transition-all"
                >
                  {link.name}
                </a>
              ))}
              
              <a 
                href="/Dhivagar_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-primary/20 border border-primary text-primary font-heading font-bold text-lg uppercase tracking-widest flex items-center gap-3 neon-box-cyan rounded"
              >
                <Download className="w-6 h-6" /> Extract Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
