import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      className="bg-white text-orange-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      role="region"
      aria-label="Luxury LRP Cosmetics Section"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;