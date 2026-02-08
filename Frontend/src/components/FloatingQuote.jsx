import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/assets/css/components/FloatingQuote.scss';

const FloatingQuote = ({ text, author, color, delay = 0.5, style = {}, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total time = delay (animation start) + fade in (0.8s) + visible time (duration)
    // But user likely means "visible for 5s".
    // So timer should start after mount, and duration should cover the whole lifespan or just the visible part.
    // Let's set it to hide after (delay * 1000) + 800 + duration.
    const totalDuration = (delay * 1000) + 800 + duration;
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [duration, delay]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="floating-quote"
          style={{
            borderLeftColor: color,
            ...style
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          exit={{ opacity: 0, x: 20, transition: { duration: 0.5 } }}
          transition={{ 
            opacity: { duration: 0.8, delay },
            x: { duration: 0.8, delay },
            y: { 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 0.5
            }
          }}
        >
          <div className="quote-icon" style={{ color: color }}>❝</div>
          <span className="quote-text">{text}</span>
          <span className="quote-author">{author}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingQuote;
