import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CHARS = 'X∆O_−+<>;:/?01010110';

export const ScrambleText = ({ text, className = "" }: { text: string, className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let iterations = 0;
      
      const interval = setInterval(() => {
        setDisplayText(text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iterations) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join(''));

        if (iterations >= text.length) {
          clearInterval(interval);
        }
        
        iterations += 1/3;
      }, 30);

      return () => clearInterval(interval);
    }
  }, [text, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};
