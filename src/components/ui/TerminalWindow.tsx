"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  "Initializing neural link...",
  "Bypassing security protocols... [SUCCESS]",
  "Loading cybernetic enhancements...",
  "Establishing secure connection to mainframe...",
  "> systemctl start ai_core",
  "[OK] Started AI Core Processes.",
  "> nmap -sS -O target_network",
  "Starting Nmap 7.93 ( https://nmap.org )",
  "Host is up (0.0020s latency).",
  "Awaiting user input...",
];

export const TerminalWindow = () => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let delay = 0;
    commands.forEach((cmd, index) => {
      delay += Math.random() * 400 + 200;
      setTimeout(() => {
        setLines((prev) => [...prev, cmd]);
      }, delay);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] bg-black/80 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.15)]"
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-primary/10 border-b border-primary/30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-xs font-mono text-primary/70 tracking-widest">
          ROOT@SYSTEM:~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm text-green-400/90 h-[250px] overflow-y-auto">
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            {line.startsWith(">") ? (
              <span className="text-primary">{line}</span>
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}
        <div className="animate-pulse">_</div>
      </div>
    </motion.div>
  );
};
