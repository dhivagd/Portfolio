"use client";

import { motion } from "framer-motion";
import { Send, Code2 as Github, Briefcase as Linkedin, Mail, ShieldAlert } from "lucide-react";

export const Contact = () => {
  return (
    <section className="relative py-24 min-h-[80vh] flex items-center bg-black/90 border-t border-primary/20" id="contact">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldAlert className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white neon-text-cyan">
              ESTABLISH <span className="text-primary">CONNECTION</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
            Secure transmission channel open
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-1 border border-primary/30 neon-box-cyan overflow-hidden"
        >
          <div className="bg-black/80 rounded-lg p-8 flex flex-col items-center">
            
            {/* Terminal Header */}
            <div className="w-full flex items-center justify-between border-b border-primary/30 pb-4 mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-primary font-mono text-xs uppercase tracking-widest">
                Terminal Auth: Valid
              </div>
            </div>

            <div className="text-center space-y-6 mb-12">
              <p className="text-white/80 font-mono text-lg max-w-xl">
                Ready to collaborate on securing networks, building intelligent tools, or exploring new digital frontiers? Initiate a secure handshake.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center">
              <a 
                href="mailto:dhivagarp45@gmail.com"
                className="group relative px-6 py-4 bg-white/5 border border-primary/50 hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden rounded"
              >
                <div className="absolute inset-0 w-0 bg-primary/20 group-hover:w-full transition-all duration-300 ease-in-out" />
                <Mail className="w-5 h-5 text-primary relative z-10" />
                <span className="font-heading font-bold tracking-widest text-white uppercase relative z-10">Email Transmission</span>
              </a>

              <a 
                href="https://github.com/dhivagd"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-4 bg-white/5 border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden rounded"
              >
                <Github className="w-5 h-5 text-white" />
                <span className="font-heading font-bold tracking-widest text-white uppercase">GitHub Database</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/dhivagar-pakkirisamy-82814628b"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-4 bg-white/5 border border-[#0A66C2]/50 hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden rounded"
              >
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <span className="font-heading font-bold tracking-widest text-white uppercase">LinkedIn Profile</span>
              </a>
            </div>

            <div className="mt-12 text-primary/50 font-mono text-xs animate-pulse">
              _ awaiting connection...
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
