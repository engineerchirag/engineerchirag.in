import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const reviews = [
  {
    name: "Ankit Sharma",
    role: "SDE @ Microsoft",
    text: "Chirag's approach to System Design and Frontend Architecture is eye-opening. He doesn't just teach code, he teaches how to think like a staff engineer.",
    image: "/avatar_ankit.png"
  },
  {
    name: "Priya Patel",
    role: "Frontend Engineer @ Amazon",
    text: "The mock interviews were brutal but exactly what I needed. His feedback on performance optimization helped me clear my L5 interview.",
    image: "/avatar_priya.png"
  },
  {
    name: "Rahul Verma",
    role: "Senior SDE @ Flipkart",
    text: "I've been following Chirag for years. His mentorship helped me transition from a feature developer to a system architect. Truly grateful.",
    image: "/avatar_rahul.png"
  }
];

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[150px] -z-10 rounded-full mix-blend-screen opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">What Mentees Say</h2>
          <p className="text-gray-300 font-normal text-lg">Real results from engineers at top tech companies.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SpotlightCard className="p-10 h-full flex flex-col group" spotlightColor="rgba(255, 255, 255, 0.05)">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors" />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-10 leading-relaxed font-normal italic text-base">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                  {/* Premium AI Avatar */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-indigo-500/80 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] flex-shrink-0 bg-gradient-to-br from-gray-800 to-black">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{review.name}</h4>
                    <p className="text-[11px] text-indigo-400 uppercase tracking-wider mt-1 font-semibold">{review.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

