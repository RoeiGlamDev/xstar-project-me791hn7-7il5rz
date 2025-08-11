import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'Experience the finest ingredients and formulations in every product, crafted to elevate your beauty routine.',
    icon: <i className="fas fa-gem text-orange-600"></i>,
  },
  {
    title: 'Luxurious Packaging',
    description: 'Our products come in elegantly designed packaging that reflects the sophistication of luxury LRP cosmetics.',
    icon: <i className="fas fa-box-open text-orange-600"></i>,
  },
  {
    title: 'Personalized Service',
    description: 'Enjoy tailored consultations and recommendations to find the perfect products for your unique beauty needs.',
    icon: <i className="fas fa-user-circle text-orange-600"></i>,
  },
  {
    title: 'Sustainable Practices',
    description: 'We are committed to sustainability, using eco-friendly materials and cruelty-free formulations.',
    icon: <i className="fas fa-leaf text-orange-600"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-extrabold text-orange-600 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Luxury of LRP Cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-orange-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;