import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Program = () => {
  return (
    <section id="program" className="py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Mentorship Tracks
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-normal">
            Engineered for those serious about their career. No bulk-batch teaching. 
            Only 1:1 attention and deep structural growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          
          {/* 1 Month Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2rem] relative border border-white/5 bg-[#0a0a0a] shadow-xl"
          >
            <h3 className="text-base font-bold text-gray-300 uppercase tracking-widest mb-4">1 Month Mentorship</h3>
            <div className="flex items-baseline gap-1 mb-2 text-white flex-wrap">
              <span className="text-4xl sm:text-5xl font-display font-bold">₹40,000</span>
            </div>
            <p className="text-white font-medium text-lg mt-4 mb-4">Interview Preparation</p>
            <p className="text-gray-300 text-base mb-10 leading-relaxed font-normal">
              Focused entirely on helping you become interview-ready with structured preparation, pattern recognition, and continuous feedback.
            </p>
            
            <ul className="space-y-5 mb-10">
              {[
                'Problem-solving approach (Not just DSA)',
                'Resume review & optimization',
                'Communication & Leadership mindset',
                'Real interview-style mock sessions',
                'Actionable improvement plans',
                'Structured weekly assignments'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="https://forms.gle/2Roiigp7dgDt1U157" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button variant="outline" size="lg" className="w-full">
                Apply for 1 Month
              </Button>
            </a>
          </motion.div>

          {/* 3 Months Plan (Premium Animated Border) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] p-[2px] overflow-hidden group shadow-[0_0_80px_rgba(99,102,241,0.2)] hover:shadow-[0_0_100px_rgba(99,102,241,0.4)] transition-shadow duration-500"
          >
            {/* Animated Gradient Border (Spinning conic gradient) */}
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-100" />
            
            <div className="relative h-full w-full rounded-[calc(2rem-2px)] bg-[#050505] p-10 overflow-hidden">
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 opacity-50" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full" />
              
              <div className="relative z-10">
                <span className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.8)]">
                  Most Selected
                </span>
                
                <h3 className="text-base font-bold text-indigo-400 uppercase tracking-widest mb-4">3 Months Mentorship</h3>
                <div className="flex items-baseline gap-1 mb-2 text-white flex-wrap">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 drop-shadow-sm">
                    ₹25,000
                  </span>
                  <span className="text-gray-400 text-base font-medium">/ month</span>
                </div>
                <p className="text-white font-medium text-lg mt-4 mb-4">Skill Building + Career Growth</p>
                <p className="text-gray-300 text-base mb-10 leading-relaxed font-normal">
                  A deeper, transformative mentorship focused on long-term engineering growth, practical AI project integrations, and highly scalable architecture.
                </p>
                
                <ul className="space-y-5 mb-10">
                  {[
                    'Everything in 1 Month Plan',
                    'Practical AI Skills & Integrations',
                    'System Design Deep Dives',
                    'Full-Stack Development Mindset',
                    'End-to-End Product Engineering',
                    'Additional Mock Interviews'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] rounded-full" />
                      <span className="text-gray-100 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="https://forms.gle/2Roiigp7dgDt1U157" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="secondary" size="lg" className="w-full relative overflow-hidden group/btn font-bold">
                    <span className="relative z-10">Apply for 3 Months</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Button>
                </a>
                <p className="text-[11px] text-gray-400 mt-5 text-center font-medium">
                  * ₹50k upfront, remaining ₹25k at start of second month.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
