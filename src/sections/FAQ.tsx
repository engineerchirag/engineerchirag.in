import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { ScrambleText } from '../components/ui/ScrambleText';

const faqs = [
  {
    q: "Why is the price relatively affordable for this quality?",
    a: "For living, Google pays me well. I believe in knowledge sharing and want to provide quality content at the lowest possible price without compromising on depth."
  },
  {
    q: "What is the 'Negative Habit' clause?",
    a: "I believe in working towards a meaningful purpose. My rule is simple: to afford the growth you seek, try to forego at least one negative habit in your life. It builds the discipline needed for engineering mastery."
  },
  {
    q: "Is this a Job-guarantee program?",
    a: "No, this is NOT a job-guarantee program. This mentorship helps you grow faster and stand out, but the hunger to secure the job must be yours."
  },
  {
    q: "Do I need any prerequisites?",
    a: "A laptop, internet, and a deep hunger for knowledge. Whether you are a fresher or a senior, the tracks are personalized to your current level."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-32 relative z-10 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            <ScrambleText text="Frequently Asked Questions" />
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know about the mentorship.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen 
                    ? 'border-indigo-500/50 bg-[#111] shadow-[0_0_30px_rgba(99,102,241,0.1)]' 
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center outline-none group"
                >
                  <div className="flex items-center gap-4 pr-8">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
                      isOpen ? 'border-indigo-500/30 bg-indigo-500/10' : 'border-white/10 bg-white/5 group-hover:bg-white/10'
                    }`}>
                      <Sparkles className={`w-4 h-4 ${isOpen ? 'text-indigo-400' : 'text-gray-400'}`} />
                    </div>
                    <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-indigo-100' : 'text-gray-200'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-400' : 'text-gray-500 group-hover:text-gray-300'
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 pl-[72px] text-gray-400 text-base font-normal leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

