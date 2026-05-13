"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const realCerts = [
  { title: "CRTA – Certified Red Team Analyst", issuer: "Cybernetics", year: "2024" },
  { title: "Deloitte Cyber Job Simulation", issuer: "Deloitte", year: "2024" },
  { title: "Tata Cyber Analyst", issuer: "Tata", year: "2023" },
  { title: "IBM Cybersecurity Fundamentals", issuer: "IBM / Coursera", year: "2023" },
  { title: "Cyber Conclave CTF 2024 – 2nd Place", issuer: "VIT Bhopal", year: "2024" },
  { title: "Google Cybersecurity Certificate", issuer: "Coursera", year: "2024" },
];

// Deterministic animation delays — no Math.random(), safe for SSR
const CARD_DELAYS = [0, 0.05, 0.1, 0.15, 0.2, 0.25];

const CARDS_PER_PAGE = {
  desktop: 3,
  tablet: 2,
  mobile: 1,
} as const;

export const Certifications = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [cardsVisible, setCardsVisible] = useState<1 | 2 | 3>(3);

  // Responsive cards per page — runs only on client after mount
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCardsVisible(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(realCerts.length / cardsVisible);
  const currentCards = realCerts.slice(page * cardsVisible, page * cardsVisible + cardsVisible);

  const paginate = (dir: number) => {
    setDirection(dir);
    setPage((prev) => (prev + dir + totalPages) % totalPages);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "60%" : "-60%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <section
      className="relative min-h-screen py-24 flex items-center bg-black overflow-hidden"
      id="certifications"
    >
      {/* Static background stripes — no random values */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay" />
        {[10, 25, 40, 55, 70, 85].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 bg-secondary/40 w-[1px] h-full"
            style={{ left: `${pct}%`, animationDelay: `${pct * 0.02}s` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded border border-secondary/50 bg-secondary/10 text-secondary font-mono text-xs uppercase tracking-widest">
            Database Access Granted
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-widest">
            Security{" "}
            <span className="neon-text-purple text-secondary">Clearance Archive</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-mono text-sm uppercase tracking-widest">
            {realCerts.length} verified credentials on record
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full">
          {/* Prev / Next Buttons */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous certifications"
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/80 border border-secondary/50 text-secondary rounded-full hover:bg-secondary/20 hover:border-secondary transition-all shadow-[0_0_15px_rgba(188,19,254,0.3)]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => paginate(1)}
            aria-label="Next certifications"
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/80 border border-secondary/50 text-secondary rounded-full hover:bg-secondary/20 hover:border-secondary transition-all shadow-[0_0_15px_rgba(188,19,254,0.3)]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Area */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className={`grid gap-6 ${
                  cardsVisible === 1
                    ? "grid-cols-1"
                    : cardsVisible === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }`}
              >
                {currentCards.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: CARD_DELAYS[i] }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative glass-card rounded-xl border border-secondary/30 hover:border-secondary transition-all duration-500 overflow-hidden neon-box-purple cursor-pointer flex flex-col p-8 gap-6 min-h-[220px]"
                  >
                    {/* Top scan line on hover */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary shadow-[0_0_10px_rgba(188,19,254,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Top row */}
                    <div className="flex justify-between items-start z-10">
                      <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg group-hover:bg-secondary/20 transition-colors">
                        <ShieldCheck className="w-7 h-7 text-secondary" />
                      </div>
                      <span className="text-[10px] font-mono text-secondary bg-secondary/10 px-2 py-1 rounded border border-secondary/20">
                        {cert.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="z-10 flex flex-col gap-3">
                      <h3 className="text-base font-heading font-bold text-white leading-snug group-hover:neon-text-purple transition-all">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                          {cert.issuer}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest">
                          Verified
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              aria-label={`Go to page ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === page
                  ? "w-8 h-2 bg-secondary shadow-[0_0_10px_rgba(188,19,254,0.8)]"
                  : "w-2 h-2 bg-white/20 hover:bg-secondary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
