import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const snippets = [
  [
    <span key="1" className="text-gray-400">// Upgrading to 10x Engineer</span>,
    <span key="2"><span className="text-pink-400">const</span> <span className="text-blue-400">mentee</span> = <span className="text-yellow-300">new</span> <span className="text-green-400">Engineer</span>();</span>,
    <span key="3"><span className="text-pink-400">await</span> <span className="text-blue-400">mentee</span>.<span className="text-yellow-200">unlearn</span>(<span className="text-orange-300">"Tutorial Hell"</span>);</span>,
    <span key="4"><span className="text-blue-400">mentee</span>.<span className="text-yellow-200">inject</span>(<span className="text-orange-300">"System Design"</span>);</span>
  ],
  [
    <span key="1" className="text-gray-400">/* The Negative Habit Clause */</span>,
    <span key="2"><span className="text-pink-400">function</span> <span className="text-blue-400">affordMentorship</span>() {'{'}</span>,
    <span key="3" className="pl-4"><span className="text-pink-400">delete</span> <span className="text-blue-400">life</span>[<span className="text-orange-300">"Doomscrolling"</span>];</span>,
    <span key="4" className="pl-4"><span className="text-pink-400">return</span> <span className="text-orange-300">"Growth Unlocked 🚀"</span>;</span>,
    <span key="5">{'}'}</span>
  ],
  [
    <span key="1" className="text-gray-400">// Handling FAANG Interviews</span>,
    <span key="2"><span className="text-pink-400">import</span> {'{'} <span className="text-blue-400">Confidence</span> {'}'} <span className="text-pink-400">from</span> <span className="text-orange-300">"@chirag/mindset"</span>;</span>,
    <span key="3"><span className="text-pink-400">try</span> {'{'}</span>,
    <span key="4" className="pl-4"><span className="text-pink-400">await</span> <span className="text-blue-400">interview</span>.<span className="text-yellow-200">crush</span>();</span>,
    <span key="5">{'}'} <span className="text-pink-400">catch</span> (e) {'{'} <span className="text-blue-400">console</span>.<span className="text-yellow-200">log</span>(<span className="text-orange-300">"Impossible"</span>); {'}'}</span>
  ]
];

export const GenerativeTerminal = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % snippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 sm:p-6 bg-[#0a0a0a] rounded-b-xl border-t border-white/10 font-mono text-[10px] sm:text-xs md:text-sm lg:text-base h-[180px] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-2"
        >
          {snippets[index].map((line, i) => (
            <motion.div
              key={i}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.3, ease: "easeOut" }}
              className="flex gap-4 whitespace-nowrap overflow-hidden items-center"
            >
              <span className="text-indigo-500/50 select-none w-4 text-right">{i + 1}</span>
              <div className="flex-1">{line}</div>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ delay: snippets[index].length * 0.2, repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-white/50 ml-8 mt-1"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
