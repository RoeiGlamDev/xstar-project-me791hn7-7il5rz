import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-orange-500 to-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/path-to-your-luxury-background-image.jpg')] bg-cover opacity-30"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="relative z-10 text-center">
        <motion.div
          className="text-6xl font-bold text-orange-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          luxury LRP cosmetics
        </motion.h1>
        <motion.div
          className="mt-4 text-2xl text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover the art of luxury beauty with our premium range of cosmetics designed to enhance your natural elegance.
        </motion.p>
        <motion.div
          href="#shop"
          className="mt-8 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Shop Now}
        </motion.a>
        <div className="mt-6 flex justify-center space-x-4">
          <span className="text-gray-600">Trusted by beauty enthusiasts worldwide.</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;