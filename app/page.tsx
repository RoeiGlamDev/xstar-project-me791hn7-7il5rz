import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-white h-screen flex items-center justify-center">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-bold text-orange-500 mb-4">Welcome to luxury LRP cosmetics</h1>
                <p className="text-xl text-gray-700 mb-8">
                    Elevate your beauty routine with our exclusive line of luxury cosmetics, designed for the discerning individual.
                </p>
                <motion.div
                    className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Shop Now
                </motion.button>
            </motion.div>
        </section>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20 bg-orange-500">
            <motion.div
                className="container mx-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose luxury LRP cosmetics?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Premium Ingredients</h3>
                        <p className="text-gray-700">
                            Our products are crafted with the finest ingredients to nourish and enhance your natural beauty.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Innovative Formulas</h3>
                        <p className="text-gray-700">
                            Each formula is meticulously designed to deliver luxurious results that stand the test of time.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Elegant Packaging</h3>
                        <p className="text-gray-700">
                            Our exquisite packaging reflects the luxury within, making every unboxing a delightful experience.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const LuxuryLRPCosmetics: React.FC = () => {
    return (
        <main>
            <HeroSection />
            <FeaturesSection />
        </main>
    );
};

export default LuxuryLRPCosmetics;