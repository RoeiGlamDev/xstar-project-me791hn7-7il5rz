import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essential Glam',
    price: '$49',
    features: [
      'Customized Skin Consultation',
      'Basic Makeup Application',
      'Luxury LRP Cosmetic Samples',
      'Complimentary Skin Care Advice',
    ],
    ctaText: 'Book Now',
  },
  {
    title: 'Premium Elegance',
    price: '$99',
    features: [
      'Personalized Skin Analysis',
      'Full Makeup Application',
      'Luxury LRP Cosmetic Gift Set',
      'Private Beauty Session',
    ],
    ctaText: 'Reserve Your Spot',
  },
  {
    title: 'Ultimate Luxury Experience',
    price: '$199',
    features: [
      'Complete Skin and Makeup Consultation',
      'Luxury Makeup Application',
      'Exclusive LRP Cosmetic Collection',
      'One-on-One Personal Stylist',
    ],
    ctaText: 'Experience Luxury',
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-10">luxury LRP cosmetics Pricing</h2>
        <div className="flex justify-center space-x-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white border border-orange-600 rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.title}</h3>
              <p className="text-3xl font-bold text-orange-600 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">{feature}</li>
                ))}
              </ul>
              <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-orange-500">
                {tier.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;