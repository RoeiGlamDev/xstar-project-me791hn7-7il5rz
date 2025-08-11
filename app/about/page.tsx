import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Chen',
    position: 'Founder & CEO',
    image: '/images/sophia-chen.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Chief Marketing Officer',
    image: '/images/liam-johnson.jpg',
  },
  {
    name: 'Amelia Smith',
    position: 'Head of Product Development',
    image: '/images/amelia-smith.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-800 p-8">
      <motion.div
        className="text-5xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        At luxury LRP cosmetics, we believe that beauty should be a luxurious experience. Our journey began with a passion for creating high-quality, innovative cosmetics that empower individuals to express their unique beauty. 
      </motion.p>
      <motion.div
        className="text-3xl font-semibold text-orange-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our History
      </motion.h2>
      <motion.div
        className="text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Founded in 2021, luxury LRP cosmetics has rapidly grown to become a leading name in the cosmetics industry. Our commitment to quality and luxury has helped us create a loyal customer base who appreciates our dedication to excellence.
      </motion.p>
      <motion.div
        className="text-3xl font-semibold text-orange-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Values
      </motion.h2>
      <motion.div
        className="text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        We are committed to sustainability, inclusivity, and innovation. At luxury LRP cosmetics, we prioritize ethical sourcing and environmentally friendly practices while ensuring that our products meet the highest standards of luxury.
      </motion.p>

      <motion.div
        className="text-3xl font-semibold text-orange-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-medium text-orange-500">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;