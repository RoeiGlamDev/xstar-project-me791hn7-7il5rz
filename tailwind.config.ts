import { defineConfig } from 'tailwindcss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // Custom orange for luxury LRP cosmetics
          light: '#FFB74D', // Lighter shade for accents
          dark: '#FF8C00', // Darker shade for depth
        },
        white: '#FFFFFF', // Pure white for contrast
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
    },
  },
  plugins: [],
})

/
 * Tailwind CSS Configuration for luxury LRP cosmetics
 *
 * This configuration sets up a custom color palette and animations
 * tailored for a luxury cosmetics brand, ensuring an elegant and
 * high-end design aesthetic.
 *
 * Key Features:
 * - Custom colors that reflect the luxury branding
 * - Elegant animations to enhance the user experience
 *
 * @package luxury LRP cosmetics
 */