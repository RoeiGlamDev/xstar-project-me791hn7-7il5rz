import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: {
    title: string;
    count: number;
  }[];
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">
          Achievements of luxury LRP cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className="text-3xl font-semibold">
                <motion.span
                  initial={{ count: 0 }}
                  animate={{ count: achievement.count }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="counter"
                >
                  {achievement.count.toLocaleString()}
                </motion.span>
              </motion.h3>
              <p className="text-xl mt-2">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;