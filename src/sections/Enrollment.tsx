import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, PhoneCall, Gift, Calendar, MessageCircle, Video, Users, FileQuestion, TrendingUp } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const steps = [
  {
    icon: ClipboardList,
    title: 'Apply',
    desc: 'Fill out the application form with your details and specific goals.',
    iconColor: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
  },
  {
    icon: UserCheck,
    title: 'Review',
    desc: 'Chirag will personally review your resume and application shortlisting.',
    iconColor: "text-purple-400",
    bgClass: "bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
  },
  {
    icon: PhoneCall,
    title: 'Discussion',
    desc: 'Shortlisted candidates are invited for a quick 1:1 discussion call.',
    iconColor: "text-pink-400",
    bgClass: "bg-pink-500/10 border-pink-500/20 group-hover:bg-pink-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
  },
  {
    icon: Gift,
    title: 'Selection',
    desc: 'Final selection based on your commitment and seriousness toward growth.',
    iconColor: "text-green-400",
    bgClass: "bg-green-500/10 border-green-500/20 group-hover:bg-green-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
  }
];

export const Enrollment = () => {
  const structureTitle = "Program Structure".split("");

  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white inline-block"
          >
            Enrollment Process
          </motion.h2>
          <p className="text-gray-300 font-normal text-lg">Low seats. High quality. Personalized Selection.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-1/2 -z-10"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl text-center group relative"
              >
                <div className="absolute top-4 right-4 text-white/5 font-display font-black text-6xl leading-none transition-transform group-hover:scale-110">
                  {i + 1}
                </div>
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto border transition-all duration-300 group-hover:scale-110 ${step.bgClass} ${step.glowClass}`}>
                  <step.icon className={`w-8 h-8 transition-colors ${step.iconColor}`} />
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                <p className="text-gray-300 text-base leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Program Structure Box */}
        <div className="mt-40">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 text-white flex justify-center flex-wrap">
              {structureTitle.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ rotateX: -90, opacity: 0, y: 10 }}
                  whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.4, ease: "easeOut" }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}
            </h3>
            <p className="text-gray-300 text-lg">A perfect balance of deep-work weekends and continuous weekday momentum.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-10 group h-full" spotlightColor="rgba(99, 102, 241, 0.15)">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all duration-500 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  <Calendar className="w-8 h-8 text-indigo-400" />
                </div>
                <h4 className="text-2xl font-display font-bold mb-3 text-white">
                  Weekend Deep Dives
                </h4>
                <p className="text-gray-300 text-base mb-8">3–4 hours of intensive focus on core engineering principles.</p>
                
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Video className="w-6 h-6 text-indigo-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                    <span className="text-gray-300 font-medium">Saturday: Individual Connect Sessions</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-indigo-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                    <span className="text-gray-300 font-medium">Sunday: Group Mentorship & System Design</span>
                  </li>
                </ul>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-10 group h-full" spotlightColor="rgba(168, 85, 247, 0.15)">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all duration-500 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <MessageCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-2xl font-display font-bold mb-3 text-white">
                  Weekday Momentum
                </h4>
                <p className="text-gray-300 text-base mb-8">Always connected. Never stuck on a problem for days.</p>
                
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <WhatsAppIcon className="w-6 h-6 text-[#25D366] flex-shrink-0 drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]" />
                    <span className="text-gray-300 font-medium">Direct 1:1 WhatsApp support</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FileQuestion className="w-6 h-6 text-purple-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    <span className="text-gray-300 font-medium">Assignment discussions & doubt solving</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-purple-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    <span className="text-gray-300 font-medium">Continuous progress tracking</span>
                  </li>
                </ul>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
