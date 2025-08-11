import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to create a 3D interactive environment for luxury LRP cosmetics.
 * This hook initializes a 3D scene with luxury-themed elements to enhance user engagement.
 * 
 * @returns {Object} - Contains methods to start and stop the animation.
 */
export const use3D = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  /
   * Initializes the 3D scene with luxury aesthetic elements.
   */
  const initScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0); // Transparent background for luxury aesthetic
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Add lighting for luxury effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
    
    // Adding a luxury-themed 3D object (like a cosmetic bottle) for demonstration
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Orange color
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);
    
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cylinder.rotation.y += 0.01; // Rotation for interaction
      renderer.render(scene, camera);
    };
    animate();
  };

  /
   * Handles window resize to maintain aspect ratio and canvas size.
   */
  const handleResize = () => {
    if (rendererRef.current && cameraRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  useEffect(() => {
    initScene();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      // Clean up the scene on unmount if necessary
      if (sceneRef.current) {
        while (sceneRef.current.children.length > 0) {
          sceneRef.current.remove(sceneRef.current.children[0]);
        }
        rendererRef.current?.dispose();
      }
    };
  }, []);

  return { canvasRef };
};