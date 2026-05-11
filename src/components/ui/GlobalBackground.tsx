import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const GlobalBackground = () => {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    // Generate random particles on mount so they don't cause hydration errors or layout thrashing
    const newParticles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030303] pointer-events-none">
      
      {/* 1. Deep animated Aurora (More vibrant) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.25] bg-gradient-to-tr from-indigo-600 via-purple-600 to-transparent"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.2] bg-gradient-to-bl from-pink-600 via-fuchsia-600 to-transparent"
      />
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[10%] w-[60%] h-[60%] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.2] bg-gradient-to-t from-blue-600 via-cyan-600 to-transparent"
      />
      
      {/* 2. Floating Data Particles (Starlight effect) */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: '0 0 10px 2px rgba(255,255,255,0.4)',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* 3. Subtle Hex/Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
          maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
        }}
      />
      
      {/* 4. Glass/Noise Overlay (Premium texture) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

    </div>
  );
};
