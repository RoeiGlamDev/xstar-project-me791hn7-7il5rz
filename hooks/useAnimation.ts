import { useEffect, useState } from 'react';

/
 * Custom hook for handling animations in the luxury LRP cosmetics website.
 * This hook is tailored to enhance the user experience with elegant 3D effects
 * and transitions that reflect the luxury aesthetic of our brand.
 * 
 * @returns {Object} - Returns an object containing animation states and functions.
 */
export interface AnimationState {
  isVisible: boolean;
  fadeIn: () => void;
  fadeOut: () => void;
}

export const useAnimation = (): AnimationState => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Initial effect to simulate luxury entrance animation
    const timeoutId = setTimeout(() => {
      fadeIn();
    }, 1000); // 1 second delay for luxury reveal

    return () => clearTimeout(timeoutId);
  }, []);

  const fadeIn = () => {
    setIsVisible(true);
    // Additional logic to handle 3D effects can be added here
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = 'white'; // Transition to white background
  };

  const fadeOut = () => {
    setIsVisible(false);
    // Logic for fade out effect
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = 'orange'; // Transition back to orange background
  };

  return {
    isVisible,
    fadeIn,
    fadeOut,
  };
};