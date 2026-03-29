import React from 'react';
import { motion } from 'framer-motion';

const baseVariants = {
  hidden: (offset = 0) => ({
    opacity: 0,
    y: 28,
    filter: 'blur(10px)',
    transition: {
      duration: 0.2,
      delay: offset,
    },
  }),
  visible: (offset = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      delay: offset,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const directionOffsets = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
};

const Reveal = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.2,
  ...rest
}) => {
  const axis = directionOffsets[direction] || directionOffsets.up;

  return (
    <motion.div
      className={className}
      custom={delay}
      initial={{
        opacity: 0,
        x: axis.x,
        y: axis.y,
        filter: 'blur(10px)',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const RevealGroup = ({
  children,
  className,
  once = true,
  stagger = 0.12,
  delayChildren = 0,
  amount = 0.12,
  ...rest
}) => (
  <motion.div
    className={className}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren,
        },
      },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ children, className, delay = 0, ...rest }) => (
  <motion.div className={className} variants={baseVariants} custom={delay} {...rest}>
    {children}
  </motion.div>
);

export default Reveal;
