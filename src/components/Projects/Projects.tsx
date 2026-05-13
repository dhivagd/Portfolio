"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 as Github, X, Eye, Activity, Database, ShieldAlert, Cpu, GitFork, LayoutGrid } from "lucide-react";
import { useState, useRef } from "react";

const projectsData = [
  {
    id: 1,
    title: "DIGIFORENSICS AI",
    subtitle: "Digital Forensics Case Management",
    category: "Digital Forensics",
    description: "A secure and smart digital forensics case management system designed for investigators and admins. It offers features like real-time case tracking, evidence uploads, and role-based access control.",
    tech: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/dhivagd/DigiForensics",
    icon: Database,
    color: "from-blue-900 to-black",
    neon: "neon-box-cyan",
  },
  {
    id: 2,
    title: "KRONTOS PINCODE SERVICEABILITY",
    subtitle: "Pincode Serviceability Engine",
    category: "Backend Engine",
    description: "Pincode based serviceability allows merchants to define the pincodes where they can deliver their products & services, verifying delivery logic for buyer apps.",
    tech: ["Python", "Backend Logic"],
    github: "https://github.com/dhivagd/Krontos",
    icon: GitFork,
    color: "from-orange-900 to-black",
    neon: "neon-box-cyan",
  },
  {
    id: 3,
    title: "MOBILE CALL LOG ANALYZER",
    subtitle: "Forensic Data Processing",
    category: "Data Analysis",
    description: "A tool to analyze mobile call log data, tracking call duration, frequency, and distribution of calls between different contacts. Useful for basic forensic communication analysis.",
    tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/dhivagd/Moblile-Call-Log-Analysis",
    icon: Activity,
    color: "from-green-900 to-black",
    neon: "neon-box-purple",
  },
];

const ProjectCard = ({ project, onClick }: { project: typeof projectsData[0], onClick: () => void }) => {
  const Icon = project.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`group relative h-[300px] w-full rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-black/60 backdrop-blur-md ${project.neon} cursor-pointer`}
    >
      {/* Mouse Reactive Lighting */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,243,255,0.1), transparent 40%)`
        }}
      />

      {/* Animated Waveform Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500 overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-around pb-10 px-4">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-primary/50 rounded-t"
              animate={{ height: ["10%", "80%", "10%"] }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scan Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(0,243,255,1)] z-10" />

      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-4 border-b border-white/10 bg-black/80 flex justify-between items-center z-10">
        <div className="flex items-center gap-2 text-primary">
          <Icon className="w-5 h-5" />
          <span className="font-mono text-xs tracking-widest uppercase">{project.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-[10px] text-muted-foreground uppercase">Live</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black via-black/80 to-transparent z-10">
        <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:neon-text-cyan transition-all">
          {project.title}
        </h3>
        <p className="text-muted-foreground font-mono text-sm line-clamp-2 mb-4">
          {project.subtitle}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.tech.slice(0, 3).map((t, i) => (
            <span key={i} className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-[10px] font-mono text-primary uppercase">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      {/* Hover Reveal Button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="px-6 py-2 bg-black/80 backdrop-blur-md border border-primary flex items-center gap-2 rounded text-white font-mono uppercase text-sm tracking-wider shadow-[0_0_20px_rgba(0,243,255,0.5)]">
          <Eye className="w-4 h-4" /> Analyze Threat
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section className="relative py-24 z-10" id="projects">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <Activity className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white neon-text-cyan">
              DEPLOYED <span className="text-primary">PROJECTS</span>
            </h2>
          </div>
          <div className="h-1 w-24 bg-primary mt-4 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
          <p className="text-muted-foreground mt-4 font-mono text-sm uppercase tracking-widest">
            Active Security Operations & Research Repositories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-[#0a0a0a] border border-primary/50 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.2)]"
              >
                <div className="absolute top-4 right-4 z-10">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-black/80 hover:bg-red-500/20 border border-white/20 hover:border-red-500/50 rounded-full transition-colors group"
                  >
                    <X className="w-5 h-5 text-white group-hover:text-red-500" />
                  </button>
                </div>

                {/* Dashboard Modal Header */}
                <div className={`p-8 bg-gradient-to-br ${selectedProject.color} border-b border-white/10 relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay" />
                   
                   {/* Scanning radar line in modal header */}
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_rgba(0,243,255,1)] animate-[scan_3s_ease-in-out_infinite]" />

                   <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <selectedProject.icon className="w-5 h-5 text-primary" />
                      <div className="px-3 py-1 border border-primary/50 bg-primary/20 text-primary font-mono text-xs tracking-widest uppercase rounded">
                        {selectedProject.category}
                      </div>
                    </div>
                    <h3 className="text-4xl font-heading font-bold text-white mb-2 shadow-black drop-shadow-md">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xl text-white/80 font-mono drop-shadow-md">
                      {selectedProject.subtitle}
                    </p>
                   </div>
                </div>
                
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-8 font-mono text-sm border-l-2 border-primary/50 pl-4 bg-white/5 py-2">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-mono text-primary mb-3 tracking-widest uppercase flex items-center gap-2">
                      <Cpu className="w-4 h-4" /> System Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-black/50 border border-white/10 rounded text-xs font-mono text-white/80 uppercase shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary transition-all font-heading tracking-widest uppercase flex items-center justify-center gap-2 neon-box-cyan">
                      <Github className="w-5 h-5" /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
