import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffA500 }); // Orange color
    const sphere = new THREE.Mesh(geometry, material);
    
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.position.y += 0.01  Math.sin(Date.now()  0.001);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      <motion.div 
        className="absolute text-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-orange-600">
          Welcome to luxury LRP cosmetics
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the epitome of elegance and sophistication in cosmetics. 
          Our products are designed to elevate your beauty routine with luxury and quality.
        </p>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out">
          Shop Now
        </button>
      </motion.div>
      <div ref={mountRef} />
    </div>
  );
};

export default FloatingElements;