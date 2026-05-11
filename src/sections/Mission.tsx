import { motion } from 'framer-motion';
import { Heart, Globe2, Lightbulb } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Mission = () => {
  return (
    <section id="mission" className="py-32 relative z-10 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-indigo-500 font-bold uppercase tracking-widest text-base mb-4 block"
          >
            My Mission
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Why I Mentor
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            I'm not here to build a course factory. I'm here to build a tight-knit network of world-class engineers.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[250px]"
        >
          {/* Main Bento Box */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 h-full">
          <SpotlightCard className="p-6 sm:p-10 h-full flex flex-col group overflow-hidden" spotlightColor="rgba(239, 68, 68, 0.15)">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-red-500/20 transition-colors">
                <Heart className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Knowledge Sharing</h3>
              <p className="text-gray-300 leading-relaxed text-lg max-w-md">
                For a living, Google pays me well. This mentorship is my way of giving back and sharing 10+ years of hard-earned engineering wisdom with those hungry to learn.
              </p>
              <div className="absolute bottom-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                <Heart className="w-64 h-64" />
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={item} className="h-full">
          <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col group overflow-hidden" spotlightColor="rgba(59, 130, 246, 0.15)">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <Globe2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">Indian Context (Hinglish)</h3>
              <p className="text-gray-300 text-base leading-relaxed mt-auto">
                Language shouldn't be a barrier. Learn complex engineering concepts in a style that's easy to grasp and culturally relatable.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={item} className="h-full">
          <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col group overflow-hidden" spotlightColor="rgba(234, 179, 8, 0.15)">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">Engineering Mindset</h3>
              <p className="text-gray-300 text-base leading-relaxed mt-auto">
                It's not just about becoming a coding expert; it's about structural clarity, problem-solving frameworks, and career progression.
              </p>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
