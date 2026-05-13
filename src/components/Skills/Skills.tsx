"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Globe, Database, Network, Cloud, Cpu, Code, Brain, Target, ShieldAlert, FileSearch, Search, Lock, Zap, Server, Activity } from "lucide-react";
import { useState, useEffect } from "react";

const allSkills = [
  // Offensive / Red Team
  { name: "Penetration Testing", icon: ShieldAlert, cat: "offensive" },
  { name: "Adversary Simulation", icon: Target, cat: "offensive" },
  { name: "Ethical Hacking", icon: Zap, cat: "offensive" },
  { name: "Web & Network Attacks", icon: Globe, cat: "offensive" },
  { name: "Vulnerability Assessment", icon: Search, cat: "offensive" },
  
  // Defensive / Intel
  { name: "Digital Forensics", icon: FileSearch, cat: "defensive" },
  { name: "Threat Analysis", icon: Activity, cat: "defensive" },
  { name: "OSINT", icon: Database, cat: "defensive" },
  
  // Security Tools
  { name: "Wireshark", icon: Network, cat: "infra" },
  { name: "Nmap", icon: Search, cat: "infra" },
  { name: "Metasploit", icon: ShieldAlert, cat: "infra" },
  { name: "Burp Suite", icon: Globe, cat: "infra" },
  
  // Programming & Web
  { name: "Python", icon: Code, cat: "core" },
  { name: "C++", icon: Code, cat: "core" },
  { name: "C#", icon: Code, cat: "core" },
  { name: "Assembly", icon: Cpu, cat: "core" },
  { name: "React.js", icon: Cloud, cat: "core" },
  { name: "Flask", icon: Cloud, cat: "core" },
  { name: "Supabase", icon: Database, cat: "core" },
  { name: "MySQL", icon: Database, cat: "core" },
];

// Precomputed deterministic floats (index → [yOffset, scale, duration, delay])
// Generated once at module level so SSR and client produce identical markup.
const FLOAT_PARAMS: [number, number, number, number][] = [
  [-8,  0.97, 3.1, 0.0],
  [ 6,  0.96, 2.4, 0.3],
  [-5,  0.98, 3.7, 0.6],
  [ 9,  0.95, 2.8, 0.1],
  [-7,  0.97, 3.3, 0.5],
  [ 4,  0.96, 2.6, 0.8],
  [-9,  0.98, 3.5, 0.2],
  [ 7,  0.95, 2.9, 0.4],
  [-6,  0.97, 3.2, 0.7],
  [ 8,  0.96, 2.7, 0.0],
  [-4,  0.98, 3.6, 0.3],
  [ 5,  0.95, 2.5, 0.6],
  [-8,  0.97, 3.0, 0.9],
  [ 6,  0.96, 3.4, 0.2],
  [-5,  0.98, 2.8, 0.5],
  [ 9,  0.95, 3.1, 0.8],
  [-7,  0.97, 2.6, 0.1],
  [ 4,  0.96, 3.3, 0.4],
  [-9,  0.98, 2.9, 0.7],
  [ 7,  0.95, 3.5, 0.0],
  [-6,  0.97, 2.7, 0.3],
  [ 8,  0.96, 3.2, 0.6],
];

export const Skills = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const getStyle = (cat: string) => {
    switch(cat) {
      case "offensive": return "text-red-500 border-red-500/30 bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]";
      case "defensive": return "text-blue-400 border-blue-400/30 bg-blue-400/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]";
      case "core": return "text-primary border-primary/30 bg-primary/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]";
      case "infra": return "text-secondary border-secondary/30 bg-secondary/10 hover:shadow-[0_0_20px_rgba(188,19,254,0.5)]";
      default: return "text-white border-white/30 bg-white/10";
    }
  };

  return (
    <section className="relative min-h-[120vh] py-24 flex items-center z-10 bg-[#020202] overflow-hidden" id="skills">
      {/* Radar Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] border-2 border-primary/20 rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-primary/20 rounded-full" />
        <div className="absolute w-[200px] h-[200px] border border-primary/20 rounded-full" />
        <div className="absolute w-[800px] h-1 bg-primary/20 animate-[spin_4s_linear_infinite]" style={{ transformOrigin: "center" }} />
        <div className="absolute w-1 h-[800px] bg-primary/20 animate-[spin_4s_linear_infinite]" style={{ transformOrigin: "center" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-1 mb-4 rounded font-mono text-primary text-xs uppercase tracking-widest shadow-[0_0_10px_rgba(0,243,255,0.3)]">
            <Activity className="w-4 h-4 animate-pulse" /> Telemetry Active
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white block uppercase tracking-widest">
            Capability <span className="neon-text-cyan text-primary">Constellation</span>
          </h2>
        </motion.div>

        {/* Skill Constellation Map */}
        <div className="relative w-full h-[800px] md:h-[600px] mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {/* Connecting SVG Lines - Static visual representation */}
          {mounted && (
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg width="100%" height="100%" className="absolute inset-0">
                <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#00f3ff" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#bc13fe" strokeWidth="1" />
                <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#ef4444" strokeWidth="1" />
                <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                
                {/* Orbit paths */}
                <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.5" />
                <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.3" />
              </svg>
            </div>
          )}

          {allSkills.map((skill, index) => {
            const Icon = skill.icon;
            const style = getStyle(skill.cat);
            const [yOffset, scaleAmount, duration, delay] = FLOAT_PARAMS[index] ?? [-5, 0.97, 3, 0];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group z-10"
              >
                <motion.div
                  animate={{ y: [0, yOffset, 0], scale: [1, scaleAmount, 1] }}
                  transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-full border backdrop-blur-md cursor-crosshair transition-all duration-300 ${style}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>

                {/* Ping animation behind the node */}
                <div className={`absolute inset-0 rounded-full border ${style.split(" ")[1]} animate-ping opacity-20`} style={{ animationDuration: '3s' }} />
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 opacity-70">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"/> <span className="text-xs font-mono text-white uppercase">Offensive</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"/> <span className="text-xs font-mono text-white uppercase">Defensive</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.8)]"/> <span className="text-xs font-mono text-white uppercase">Core Tech</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(188,19,254,0.8)]"/> <span className="text-xs font-mono text-white uppercase">Infrastructure & Intel</span></div>
        </div>
      </div>
    </section>
  );
};
