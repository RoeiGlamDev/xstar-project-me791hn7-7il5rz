import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martin',
    role: 'Founder & CEO',
    description: 'With over a decade in the cosmetics industry, Sophia brings a wealth of experience and a passion for luxury beauty products.',
  },
  {
    name: 'James Carter',
    role: 'Head of Product Development',
    description: 'James is an expert in formulating high-end cosmetic products that meet the highest standards of quality and luxury.',
  },
  {
    name: 'Ava Thompson',
    role: 'Creative Director',
    description: 'Ava’s innovative designs and keen eye for luxury aesthetics drive the visual identity of luxury LRP cosmetics.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 p-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h2>
        <p className="text-lg mb-6">
          At luxury LRP cosmetics, we believe that beauty is an art form. Founded with a vision to elevate the standards of cosmetics, our brand embodies the essence of luxury and sophistication. Each product is meticulously crafted to enhance natural beauty, using only the finest ingredients sourced from around the globe.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-6">
          Our mission at luxury LRP cosmetics is to empower individuals through exceptional products that combine beauty and elegance. We are committed to sustainability, innovation, and providing an exquisite experience that transcends the ordinary.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <p className="font-semibold mb-1">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;