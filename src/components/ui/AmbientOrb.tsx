import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const AmbientOrb = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    // Initial center position
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full mix-blend-screen z-0 blur-[120px] opacity-30"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(168,85,247,0.5) 40%, rgba(236,72,153,0) 70%)',
      }}
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
        scale: [1, 1.1, 1],
      }}
      transition={{
        x: { type: "spring", stiffness: 30, damping: 15, mass: 1 },
        y: { type: "spring", stiffness: 30, damping: 15, mass: 1 },
        scale: { repeat: Infinity, duration: 5, ease: "easeInOut" }
      }}
    />
  );
};
