import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-transparent opacity-50 rounded-t-lg"></div>
        <h2 className="absolute top-4 left-4 text-white text-2xl font-bold">{title}</h2>
      </div>
      <div className="p-6 backdrop-blur-md bg-white/30 rounded-b-lg">
        <h3 className="text-orange-500 text-lg font-semibold">luxury LRP cosmetics</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;