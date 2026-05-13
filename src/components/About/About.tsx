"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, MapPin, Mail, Terminal, FileText, Download, Eye, X, BookOpen, Globe2 } from "lucide-react";
import { useState } from "react";

export const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="relative py-24 z-10 bg-black/90 border-t border-primary/20" id="about">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-1 mb-4 rounded font-mono text-primary text-xs uppercase tracking-widest shadow-[0_0_10px_rgba(0,243,255,0.3)]">
            <User className="w-4 h-4" /> Personnel File
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-widest">
            Profile <span className="neon-text-cyan text-primary">Dossier</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Profile & Resume Actions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/3 space-y-6"
          >
            {/* Identity Card */}
            <div className="glass-card rounded-xl p-8 border border-primary/30 relative overflow-hidden neon-box-cyan">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_15px_rgba(0,243,255,1)] animate-[scan_3s_ease-in-out_infinite]" />
              
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="text-primary font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> ID: DP-7789
                </div>
                <div className="px-2 py-1 bg-red-500/20 text-red-500 font-mono text-[10px] uppercase border border-red-500/50 rounded animate-pulse">
                  Clearance Level 5
                </div>
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-2">Dhivagar Pakkirisamy</h3>
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-6">Cyber Security & Digital Forensics Engineer</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground font-mono text-sm">
                  <MapPin className="w-4 h-4 text-primary" /> India
                </div>
                <div className="flex items-center gap-3 text-muted-foreground font-mono text-sm">
                  <Mail className="w-4 h-4 text-primary" /> dhivagarp45@gmail.com
                </div>
              </div>
            </div>

            {/* Resume Actions */}
            <div className="glass-card rounded-xl p-6 border border-white/10 flex flex-col gap-4">
              <button
                onClick={() => setShowResume(true)}
                className="w-full py-4 bg-primary/10 hover:bg-primary/20 border border-primary text-primary font-mono text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 neon-box-cyan rounded group"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" /> Access Digital Resume
              </button>
              
              <a 
                href="/Dhivagar_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 rounded group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" /> Extract PDF Record
              </a>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-xl p-6 border border-white/10">
              <h4 className="text-xs font-mono text-primary mb-4 tracking-widest uppercase flex items-center gap-2">
                <Globe2 className="w-4 h-4" /> Communication Protocols
              </h4>
              <div className="flex gap-4">
                <div className="flex-1 bg-black/50 border border-white/5 rounded p-3 text-center group hover:border-primary/50 transition-colors">
                  <span className="text-white font-heading tracking-widest">ENGLISH</span>
                  <div className="w-full h-1 bg-primary/50 mt-2 rounded-full overflow-hidden">
                    <div className="w-[90%] h-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                  </div>
                </div>
                <div className="flex-1 bg-black/50 border border-white/5 rounded p-3 text-center group hover:border-primary/50 transition-colors">
                  <span className="text-white font-heading tracking-widest">TAMIL</span>
                  <div className="w-full h-1 bg-primary/50 mt-2 rounded-full overflow-hidden">
                    <div className="w-[100%] h-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Education & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-2/3 space-y-6"
          >
            {/* Objective */}
            <div className="glass-card rounded-xl p-8 border border-white/10">
              <h4 className="text-xs font-mono text-primary mb-4 tracking-widest uppercase flex items-center gap-2">
                <FileText className="w-4 h-4" /> Operational Objective
              </h4>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm border-l-2 border-primary/50 pl-4 bg-white/5 py-4 px-4 rounded-r">
                Passionate Cybersecurity and Digital Forensics professional dedicated to securing digital environments. Experienced in ethical hacking, vulnerability assessment, and threat analysis. Driven to uncover and neutralize vulnerabilities while contributing to cutting-edge security research and advanced defensive architectures.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="glass-card rounded-xl p-8 border border-secondary/30 relative overflow-hidden neon-box-purple">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
              
              <h4 className="text-xs font-mono text-secondary mb-8 tracking-widest uppercase flex items-center gap-2 relative z-10">
                <BookOpen className="w-4 h-4" /> Academic Records
              </h4>

              <div className="space-y-8 relative z-10">
                {/* VIT Bhopal */}
                <div className="relative pl-8 border-l-2 border-secondary/30 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-secondary shadow-[0_0_10px_rgba(188,19,254,0.8)] group-hover:scale-125 transition-transform" />
                  <div className="bg-black/60 border border-white/10 rounded p-6 group-hover:border-secondary/50 transition-colors">
                    <h5 className="text-xl font-heading font-bold text-white mb-2">VIT Bhopal University</h5>
                    <p className="text-secondary font-mono text-sm uppercase tracking-widest mb-4">
                      B.Tech in Computer Science and Engineering<br/>with Cyber Security and Digital Forensics
                    </p>
                    <div className="inline-block px-3 py-1 bg-white/5 text-muted-foreground font-mono text-xs rounded border border-white/10">
                      Advanced standing in security operations and cryptographic architectures.
                    </div>
                  </div>
                </div>

                {/* Amrita Vidyalayam */}
                <div className="relative pl-8 border-l-2 border-secondary/30 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-secondary/50 group-hover:border-secondary group-hover:scale-125 transition-all" />
                  <div className="bg-black/60 border border-white/10 rounded p-6 group-hover:border-secondary/50 transition-colors">
                    <h5 className="text-xl font-heading font-bold text-white mb-2">Amrita Vidyalayam</h5>
                    <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                      Pre-University Academic Foundation
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Resume Viewer Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotateX: 20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, y: 50, rotateX: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#0a0a0a] border border-primary/50 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.2)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Holographic scanner effect inside modal */}
              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-xl">
                <div className="w-full h-[2px] bg-primary/80 shadow-[0_0_20px_rgba(0,243,255,1)] animate-[scan_4s_linear_infinite]" />
              </div>

              <div className="flex items-center justify-between p-4 border-b border-primary/30 bg-black/80 z-30">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm text-primary uppercase tracking-widest">Dhivagar_Pakkirisamy_Dossier.pdf</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="/Dhivagar_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-primary/10 hover:bg-primary/30 text-primary border border-primary/50 rounded transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => setShowResume(false)}
                    className="p-2 bg-red-500/10 hover:bg-red-500/30 text-red-500 border border-red-500/50 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-white/5 relative z-10 p-2 md:p-4 overflow-hidden flex items-center justify-center">
                <iframe 
                  src="/Dhivagar_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                  className="w-full h-full rounded shadow-2xl bg-white"
                  title="Resume PDF Viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
