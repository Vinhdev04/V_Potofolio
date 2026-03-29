import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PageShell = ({ children, className = '', accent = 'var(--secondary-color)', withGlow = true, style }) => {
  const { scrollYProgress } = useScroll();
  const haloY = useTransform(scrollYProgress, [0, 1], ['-4%', '10%']);
  const haloScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`page-shell ${className}`.trim()}
      style={style}
    >
      {withGlow && (
        <motion.div
          className="page-shell__halo"
          style={{
            '--page-accent': accent,
            y: haloY,
            scale: haloScale,
          }}
        />
      )}
      <div className="page-shell__inner">{children}</div>
    </motion.div>
  );
};

export default PageShell;
