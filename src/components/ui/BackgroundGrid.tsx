"use client";

import { motion } from "framer-motion";

export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Radial Gradient to fade edges */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)]" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 243, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 243, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          perspective: "1000px",
        }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 40 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(188, 19, 254, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(188, 19, 254, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Subtle glowing orbs */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-20" style={{ animationDelay: "2s", animationDuration: "6s", animationIterationCount: "infinite", animationName: "pulse" }} />
    </div>
  );
};
