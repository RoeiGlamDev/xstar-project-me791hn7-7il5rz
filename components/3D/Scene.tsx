import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  onInteract: () => void;
}

const Scene: React.FC<SceneProps> = ({ onInteract }) => {
  useEffect(() => {
    // Add any necessary initialization for the 3D scene
  }, []);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/ Add your 3D models here /}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

const LuxuryCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-4xl font-extrabold">luxury LRP cosmetics</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-orange-500 transition duration-300">Home</li>
            <li className="hover:text-orange-500 transition duration-300">Products</li>
            <li className="hover:text-orange-500 transition duration-300">About Us</li>
            <li className="hover:text-orange-500 transition duration-300">Contact</li>
          </ul>
        </nav>
      </header>
      <main className="p-10">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">Elevate Your Beauty with luxury LRP cosmetics</h2>
          <p className="text-lg">
            Discover our premium line of cosmetics designed for the modern individual who values
            elegance and sophistication. Our products are formulated with the finest ingredients to
            enhance your natural beauty.
          </p>
        </motion.section>
        <Scene onInteract={() => console.log("3D Scene Interacted")} />
      </main>
      <footer className="bg-orange-600 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryCosmetics;