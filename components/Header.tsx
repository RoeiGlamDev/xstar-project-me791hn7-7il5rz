import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-orange-600 text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logo} alt="luxury LRP cosmetics Logo" className="h-10" />
          <span className="ml-2">luxury LRP cosmetics</span>
        </motion.div>
        <nav className="hidden md:flex space-x-8 text-orange-600 font-medium">
          <motion.div
            href="#home"
            whileHover={{ scale: 1.1 }}
            className="hover:underline"
          >
            Home
          </motion.a>
          <motion.div
            href="#products"
            whileHover={{ scale: 1.1 }}
            className="hover:underline"
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            whileHover={{ scale: 1.1 }}
            className="hover:underline"
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="hover:underline"
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-orange-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0}}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col p-4 space-y-2 text-orange-600 font-medium">
            <motion.div
              href="#home"
              whileHover={{ scale: 1.1 }}
              className="hover:underline"
            >
              Home
            </motion.a>
            <motion.div
              href="#products"
              whileHover={{ scale: 1.1 }}
              className="hover:underline"
            >
              Products
            </motion.a>
            <motion.div
              href="#about"
              whileHover={{ scale: 1.1 }}
              className="hover:underline"
            >
              About Us
            </motion.a>
            <motion.div
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="hover:underline"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;