import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubscribe: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubscribe(email);
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-white p-10 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-600 mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join the luxury LRP cosmetics Family
      </motion.h2>
      <p className="text-lg text-gray-700 mb-5">
        Sign up for exclusive offers, updates, and beauty tips tailored for you.
      </p>
      <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border-2 border-orange-600 rounded-md focus:outline-none focus:ring focus:ring-orange-400 transition duration-300 mb-3 md:mb-0 md:mr-3"
          required
        />
        <motion.div
          type="submit"
          className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </form>
      {isSubscribed && (
        <motion.div
          className="mt-5 text-green-600"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to luxury LRP cosmetics!
        </motion.p>
      )}
    </section>
  );
};

export default NewsletterSection;