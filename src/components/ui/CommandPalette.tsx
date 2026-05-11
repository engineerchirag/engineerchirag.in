import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      {/* Floating Pill */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#111]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:bg-[#222]/80 transition-all group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span className="text-gray-300 text-sm font-medium">Ask AI Anything</span>
          <div className="hidden sm:flex items-center gap-1 bg-white/10 px-2 py-1 rounded text-xs text-gray-400 font-mono ml-2">
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>
        </button>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-4 p-4 border-b border-white/10 bg-[#111]">
                <Search className="w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Ask about mentorship or career growth..." 
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-lg"
                  autoFocus
                />
                <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-xs text-gray-400 font-mono">
                  <span>ESC</span>
                </div>
              </div>
              <div className="p-6 h-[300px] overflow-y-auto">
                <p className="text-gray-500 text-sm mb-4">Suggested Queries</p>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-xl hover:bg-white/5 text-gray-300 transition-colors flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    What is the syllabus for the 3-month program?
                  </button>
                  <button className="w-full text-left p-3 rounded-xl hover:bg-white/5 text-gray-300 transition-colors flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    How do the 1:1 sessions work?
                  </button>
                  <button className="w-full text-left p-3 rounded-xl hover:bg-white/5 text-gray-300 transition-colors flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    Will this help me clear FAANG interviews?
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
