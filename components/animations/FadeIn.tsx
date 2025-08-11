import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-white transition-transform duration-300 ease-in-out hover:scale-105"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPHeader: React.FC = () => {
  return (
    <header className="bg-orange-500 p-6 text-center">
      <FadeIn>
        <h1 className="text-4xl font-bold">Welcome to luxury LRP cosmetics</h1>
        <p className="mt-4 text-lg">
          Discover our exclusive range of high-end beauty products designed for
          the modern luxury lover.
        </p>
      </FadeIn>
    </header>
  );
};

const LuxuryLRPProducts: React.FC = () => {
  return (
    <section className="p-8 bg-white">
      <FadeIn>
        <h2 className="text-3xl font-semibold text-orange-500">Our Products</h2>
        <p className="mt-2 text-gray-600">
          Explore our premium selection of cosmetics crafted with the finest
          ingredients for the ultimate luxury experience.
        </p>
        {/ Add product listings here /}
      </FadeIn>
    </section>
  );
};

const LuxuryLRPFooter: React.FC = () => {
  return (
    <footer className="bg-orange-500 p-6 text-center">
      <FadeIn>
        <p className="text-white">© {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </FadeIn>
    </footer>
  );
};

const LuxuryLRPWebsite: React.FC = () => {
  return (
    <div className="font-sans">
      <LuxuryLRPHeader />
      <LuxuryLRPProducts />
      <LuxuryLRPFooter />
    </div>
  );
};

export default LuxuryLRPWebsite;