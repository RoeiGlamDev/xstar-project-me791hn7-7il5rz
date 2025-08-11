import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-orange-600 mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">luxury LRP cosmetics</h2>
                        <p className="mt-2 text-gray-600">Elevate your beauty with our luxurious cosmetics.</p>
                    </div>
                    <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <motion.div
                            href="#"
                            className="text-gray-800 hover:text-orange-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Home
                        </motion.a>
                        <motion.div
                            href="#products"
                            className="text-gray-800 hover:text-orange-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Products
                        </motion.a>
                        <motion.div
                            href="#about"
                            className="text-gray-800 hover:text-orange-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            About Us
                        </motion.a>
                        <motion.div
                            href="#contact"
                            className="text-gray-800 hover:text-orange-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Contact
                        </motion.a>
                    </nav>
                </motion.div>
                <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <motion.div
                                href="https://www.facebook.com/luxuryLRPcosmetics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-gray-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                Facebook
                            </motion.a>
                            <motion.div
                                href="https://www.instagram.com/luxuryLRPcosmetics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-gray-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                Instagram
                            </motion.a>
                            <motion.div
                                href="https://www.twitter.com/luxuryLRPcosmetics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-gray-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                Twitter
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;