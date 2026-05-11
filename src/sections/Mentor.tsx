import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

export const Mentor = () => {
  return (
    <section id="mentor" className="py-32 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Mentor Image Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative glass-card p-2">
            <img 
              src="/main-img.png" 
              alt="Chirag Goel" 
              className="w-full h-full object-cover rounded-[2.5rem] grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-[2.5rem]"></div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="w-8 h-auto" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Chirag Goel</h4>
                <p className="text-base text-indigo-400 font-medium">Engineering Manager @ Google</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mentor Text */}
        <div className="lg:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-base mb-4 block">The Mentor</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white leading-tight">
              Expertise meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Passion for teaching.
              </span>
            </h2>
            
            <blockquote className="border-l-2 border-indigo-500 pl-6 my-10">
              <p className="text-gray-300 text-xl font-display italic leading-relaxed">
                "Profession === Engineer 💻 <br/> Love === Teaching 😍 <br/> Passion === Mentoring ❤️‍🔥"
              </p>
            </blockquote>

            <p className="text-gray-300 text-lg leading-relaxed mb-12 font-normal">
              I talk about Frontend Development, System Design, and Interview Preparation 
              to help students build their careers and professionals grow towards Engineering 
              mastery. I believe in knowledge sharing — the more you pour out, the more 
              life will be able to pour in.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-6 rounded-2xl">
                <span className="text-4xl font-display font-bold text-white block mb-2">10+ Yrs</span>
                <span className="text-xs text-gray-300 uppercase tracking-widest font-bold">Experience</span>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <span className="text-4xl font-display font-bold text-white block mb-2">100k+</span>
                <span className="text-xs text-gray-300 uppercase tracking-widest font-bold">Developers Taught</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Youtube, href: "https://www.youtube.com/engineerchirag" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/engineerchirag/" },
                { icon: Twitter, href: "https://twitter.com/engineerchirag" },
                { icon: Github, href: "https://github.com/engineerchirag" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-300 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

