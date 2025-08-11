import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application.
 * This file contains helper functions to assist with formatting and
 * providing constants for the luxury LRP cosmetics brand.
 * 
 * @module utils
 */

/
 * Defines the color palette for the luxury LRP cosmetics brand.
 */
export const COLORS = {
  PRIMARY: '#FFA500', // orange
  SECONDARY: '#FFFFFF', // white
};

/
 * Defines the structure of a cosmetic product.
 */
export interface CosmeticProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isFeatured: boolean;
}

/
 * Formats the price for display in the luxury LRP cosmetics store.
 * 
 * @param price - The price of the product.
 * @returns Formatted price string.
 */
export function formatPrice(price: number): string {
  return $${price.toFixed(2)};
}

/
 * Formats a date to a readable string for display.
 * 
 * @param date - The date to format.
 * @returns Formatted date string.
 */
export function formatDate(date: Date): string {
  return format(date, 'MMMM dd, yyyy');
}

/
 * Generates a unique identifier for a cosmetic product.
 * 
 * @returns A unique string identifier.
 */
export function generateProductId(): string {
  return 'product-' + Math.random().toString(36).substr(2, 9);
}

/
 * Checks if the product is featured based on its isFeatured property.
 * 
 * @param product - The cosmetic product to check.
 * @returns True if the product is featured, false otherwise.
 */
export function isProductFeatured(product: CosmeticProduct): boolean {
  return product.isFeatured;
}

/
 * Function to capitalize the first letter of each word in a string.
 * 
 * @param str - The string to capitalize.
 * @returns Capitalized string.
 */
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

/
 * Provides a welcome message for the luxury LRP cosmetics brand.
 * 
 * @returns The welcome message.
 */
export function getWelcomeMessage(): string {
  return 'Welcome to luxury LRP cosmetics - where elegance meets beauty.';
}

/
 * Converts a string to a slug for use in URLs.
 * 
 * @param str - The string to convert.
 * @returns The slugified string.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .trim();                        // Trim - from start and end
}