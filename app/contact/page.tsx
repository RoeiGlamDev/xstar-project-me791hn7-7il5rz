import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div 
        className="text-4xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      
      <motion.div 
        className="text-lg text-gray-700 mb-4"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We would love to hear from you! Please fill out the form below for any inquiries or feedback.
      </motion.p>

      <form className="w-full max-w-lg bg-orange-100 p-8 rounded-lg shadow-lg">
        <motion.div 
          className="mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" 
            type="text" 
            placeholder="Your Name" 
            required 
          />
        </motion.div>

        <motion.div 
          className="mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" 
            type="email" 
            placeholder="Your Email" 
            required 
          />
        </motion.div>

        <motion.div 
          className="mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message" 
            rows={4} 
            placeholder="Your Message" 
            required 
          />
        </motion.div>

        <motion.div 
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Location</h2>
        <p className="text-lg text-gray-700">Visit us at:</p>
        <p className="text-gray-600">Luxury LRP Cosmetics Headquarters</p>
        <p className="text-gray-600">123 Luxury Ave, Glamour City, LC 56789</p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Business Hours</h2>
        <p className="text-lg text-gray-700">We are here for you:</p>
        <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Contact;