import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Essential Collection',
    price: '$50',
    features: [
      'Luxurious Lipstick',
      'Silk Foundation',
      'Signature Perfume Sample',
      'Free Shipping'
    ],
  },
  {
    title: 'Deluxe Collection',
    price: '$100',
    features: [
      'All Essential Collection items',
      'Moisturizing Face Cream',
      'High-End Makeup Brushes',
      'Exclusive Gift Packaging'
    ],
  },
  {
    title: 'Ultimate Luxury Collection',
    price: '$200',
    features: [
      'All Deluxe Collection items',
      'Customized Skincare Consultation',
      'VIP Access to New Releases',
      'Luxury Spa Experience Voucher'
    ],
  },
];

const FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is luxury LRP cosmetics?',
    answer: 'luxury LRP cosmetics offers high-end cosmetic products crafted with premium ingredients to enhance your natural beauty.'
  },
  {
    question: 'How do I choose the right collection?',
    answer: 'Explore our detailed descriptions and consult our beauty experts for personalized recommendations tailored to your needs.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unopened products. Your satisfaction is our priority at luxury LRP cosmetics.'
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-10">
      <motion.div 
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Pricing Plans for luxury LRP cosmetics
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.title}
            className="border border-orange-500 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
            initial={{ scale: 0.95 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-orange-500">{plan.title}</h2>
            <p className="text-xl text-gray-600">{plan.price}</p>
            <ul className="list-disc pl-5 mt-4">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-500">{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <motion.div 
          className="text-3xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {FAQ.map((item) => (
            <div key={item.question} className="border-b border-gray-300 pb-2">
              <h3 className="font-semibold text-gray-700">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;