import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
    title = "Elevate Your Beauty",
    subtitle = "Discover the Essence of Luxury with luxury LRP cosmetics",
    buttonText = "Shop Now",
    buttonLink = "/shop"
}) => {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div 
                    className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h2>
                <motion.div 
                    className="text-lg md:text-xl text-gray-700 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {subtitle}
                </motion.p>
                <motion.div 
                    href={buttonLink} 
                    className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    {buttonText}
                </motion.a>
            </div>
        </section>
    );
};

export default CTASection;