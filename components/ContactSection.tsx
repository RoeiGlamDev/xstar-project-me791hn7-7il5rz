import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
    reason: ''
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.message || !formValues.reason) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setSuccess(true);
    // Logic to send form data would go here
  };

  return (
    <section className="bg-white p-10">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">Contact luxury LRP cosmetics</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto"
      >
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Reason for Contact</label>
            <select
              name="reason"
              value={formValues.reason}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select reason</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Order Status">Order Status</option>
              <option value="Partnership Proposal">Partnership Proposal</option>
              <option value="General Feedback">General Feedback</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          {success && <p className="text-green-500 text-xs italic mb-4">Your message has been sent!</p>}
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-orange-600">Business Information</h3>
        <p className="text-gray-700">luxury LRP cosmetics</p>
        <p className="text-gray-700">123 Luxury St.</p>
        <p className="text-gray-700">Beauty City, BC 12345</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
        <p className="text-gray-700">Email: info@luxurylrpcosmetics.com</p>
        <p className="text-gray-700">Business Hours: Mon-Fri: 9 AM - 6 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;