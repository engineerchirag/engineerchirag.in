import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled ? 'bg-[#050505]/80 backdrop-blur-md border border-white/10 shadow-2xl' : 'bg-transparent'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              CG
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">Engineer Chirag</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-300">
            {['Mission', 'Program', 'Reviews', 'FAQs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a href="https://forms.gle/2Roiigp7dgDt1U157" target="_blank" rel="noreferrer">
            <Button variant="primary" size="sm" className="hidden sm:inline-flex">
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

