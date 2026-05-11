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
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full mix-blend-screen z-0 opacity-40 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(168,85,247,0.3) 30%, transparent 60%)',
      }}
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
        scale: [1, 1.1, 1],
      }}
      transition={{
        x: { type: "spring", stiffness: 40, damping: 20, mass: 1 },
        y: { type: "spring", stiffness: 40, damping: 20, mass: 1 },
        scale: { repeat: Infinity, duration: 5, ease: "easeInOut" }
      }}
    />
  );
};
