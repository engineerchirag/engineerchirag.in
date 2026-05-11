import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Code2, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GenerativeTerminal } from '@/components/ui/GenerativeTerminal';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-indigo-600/10 blur-[150px] -z-10 rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] -z-10 rounded-full mix-blend-screen opacity-50"></div>
        
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-10 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            >
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              June 2026 Cohort
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[1.05] mb-8 text-white"
            >
              Engineering <br />
              <span className="relative inline-block">
                {/* Text masking effect */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x absolute inset-0">
                  Excellence
                </span>
                <span className="opacity-0">Excellence</span>
              </span> <br className="hidden lg:block"/>
              & Scaling
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-normal"
            >
              Master front-end architecture, system design, and career growth strategies. 
              Learn the true "engineering mindset" directly from an Engineering Manager at Google.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <a href="#program" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full group">
                  View Mentorship Tracks
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://topmate.io/engineerchirag" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full group hover:border-indigo-500/50 hover:bg-indigo-500/10">
                  1:1 Personal Advice
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right Visual Anchor - Floating Code Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block perspective-1000"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-square max-w-[500px] ml-auto"
            >
              {/* Glow behind the window */}
              <div className="absolute inset-0 bg-indigo-500/30 blur-[100px] rounded-full"></div>
              
              {/* Code Editor Window */}
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#0a0a0a] flex flex-col">
                <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="mx-auto flex items-center gap-2 text-xs text-gray-400 font-mono font-medium">
                    <Terminal className="w-3 h-3" /> system-design.tsx
                  </div>
                </div>
                <div className="p-0 font-mono text-base leading-relaxed overflow-hidden relative flex-1">
                  <div className="absolute -left-4 top-10 w-20 h-20 bg-purple-500/20 blur-[50px]"></div>
                  <GenerativeTerminal />
                </div>
              </div>

              {/* Floating decorative cards */}
              <motion.div 
                animate={{ y: [0, 10, 0], rotateZ: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 glass p-4 rounded-xl shadow-2xl flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
                </div>
                <div>
                  <div className="text-xs text-gray-300 font-bold uppercase tracking-wider">System Status</div>
                  <div className="text-white font-mono text-base">Highly Scalable</div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scrolling Marquee - Moved to bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 w-full py-4 border-t border-white/5 bg-black/50 backdrop-blur-md overflow-x-hidden z-20">
        <div className="flex gap-16 whitespace-nowrap text-white/20 font-display font-black text-2xl uppercase tracking-wider animate-marquee [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <span>Frontend Architecture</span>
          <span>System Design</span>
          <span>Node.js</span>
          <span>Interview Strategy</span>
          <span>Career Branding</span>
          <span>Scale & Performance</span>
          <span>React Mastery</span>
          <span aria-hidden="true">Frontend Architecture</span>
          <span aria-hidden="true">System Design</span>
          <span aria-hidden="true">Node.js</span>
          <span aria-hidden="true">Interview Strategy</span>
          <span aria-hidden="true">Career Branding</span>
          <span aria-hidden="true">Scale & Performance</span>
          <span aria-hidden="true">React Mastery</span>
        </div>
      </div>
    </section>
  );
};

