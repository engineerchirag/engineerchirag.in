import { Github, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-32 border-t border-white/10 bg-[#030303] relative z-10 overflow-hidden">
      {/* Footer Dotted Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '32px 32px',
        maskImage: 'linear-gradient(to top, black, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
      }}></div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-t-full pointer-events-none z-0"></div>
      
      {/* Massive Typography Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none font-display tracking-tighter">
        CHIRAG
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Pre-footer CTA */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Ready to level up?</h3>
            <p className="text-gray-400 text-lg">Join the top 1% of engineers building high-scale systems.</p>
          </div>
          <a href="#program" className="shrink-0 relative z-10">
            <Button size="lg" className="whitespace-nowrap group/btn">
              Apply for Mentorship
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]">CG</div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">Engineer Chirag</span>
            </div>
            <p className="text-gray-400 max-w-sm text-base leading-relaxed font-normal">
              Dedicated to empowering next-gen software engineers through high-quality, practical mentorship and career strategies.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Youtube, href: "https://www.youtube.com/engineerchirag", color: "hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/50" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/engineerchirag/", color: "hover:bg-blue-500/20 hover:text-blue-500 hover:border-blue-500/50" },
                { icon: Twitter, href: "https://twitter.com/engineerchirag", color: "hover:bg-sky-500/20 hover:text-sky-500 hover:border-sky-500/50" },
                { icon: Github, href: "https://github.com/engineerchirag", color: "hover:bg-white/20 hover:text-white hover:border-white/50" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> Contact
            </h4>
            <ul className="text-gray-400 text-base space-y-4">
              <li>
                <a href="mailto:connect@engineerchirag.in" className="inline-block hover:text-white transition-colors relative group">
                  connect@engineerchirag.in
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Engineer Chirag. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

