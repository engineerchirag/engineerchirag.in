import { Code2, Globe, Users, PenTool, Layout, Rocket } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ScrambleText } from '@/components/ui/ScrambleText';

const benefits = [
  { 
    icon: Code2, 
    title: "Advanced Architecture", 
    desc: "Master high-scale frontend systems and state management that top product companies actually use in production. Learn to think in components, state machines, and micro-frontends.",
    className: "md:col-span-2 md:row-span-2",
    spotlightColor: "rgba(99, 102, 241, 0.2)",
    iconColor: "text-indigo-400",
    bgClass: "bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
  },
  { 
    icon: Globe, 
    title: "Hinglish Support", 
    desc: "Complex concepts explained in simple, relatable Hinglish.",
    className: "md:col-span-1 md:row-span-1",
    spotlightColor: "rgba(59, 130, 246, 0.2)",
    iconColor: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
  },
  { 
    icon: Users, 
    title: "Career Branding", 
    desc: "Optimize your LinkedIn and increase visibility to recruiters.",
    className: "md:col-span-1 md:row-span-1",
    spotlightColor: "rgba(168, 85, 247, 0.2)",
    iconColor: "text-purple-400",
    bgClass: "bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
  },
  { 
    icon: PenTool, 
    title: "Execution Ability", 
    desc: "Develop the ability to independently learn any stack.",
    className: "md:col-span-1 md:row-span-1",
    spotlightColor: "rgba(236, 72, 153, 0.2)",
    iconColor: "text-pink-400",
    bgClass: "bg-pink-500/10 border-pink-500/20 group-hover:bg-pink-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
  },
  { 
    icon: Layout, 
    title: "Growth Mindset", 
    desc: "Build the mental models required to navigate senior roles and technical leadership. Transition from a feature developer to an architect.",
    className: "md:col-span-2 md:row-span-1",
    spotlightColor: "rgba(34, 197, 94, 0.2)",
    iconColor: "text-green-400",
    bgClass: "bg-green-500/10 border-green-500/20 group-hover:bg-green-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
  },
  { 
    icon: Rocket, 
    title: "Interview Readiness", 
    desc: "Mock interviews that simulate top-tier tech companies like Google, Microsoft, and Uber. Get real feedback before the actual day.",
    className: "md:col-span-3 md:row-span-1",
    spotlightColor: "rgba(239, 68, 68, 0.2)",
    iconColor: "text-red-400",
    bgClass: "bg-red-500/10 border-red-500/20 group-hover:bg-red-500/20",
    glowClass: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
  }
];

export const Benefits = () => {
  return (
    <section className="py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            <ScrambleText text="Why This Mentorship?" />
          </h2>
          <p className="text-gray-300 font-normal text-lg max-w-2xl mx-auto">Not just another course. A complete transformation of your engineering identity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {benefits.map((benefit, i) => (
            <SpotlightCard
              key={i}
              className={`p-8 flex flex-col group ${benefit.className}`}
              spotlightColor={benefit.spotlightColor}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110 ${benefit.bgClass} ${benefit.glowClass}`}>
                <benefit.icon className={`w-7 h-7 transition-colors ${benefit.iconColor}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base mt-auto">
                {benefit.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

