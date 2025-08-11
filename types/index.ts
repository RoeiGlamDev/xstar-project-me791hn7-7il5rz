import { Product } from './product';

/
 * Represents a customer for luxury LRP cosmetics.
 * @interface Customer
 */
export interface Customer {
    id: string; // Unique identifier for the customer
    name: string; // Full name of the customer
    email: string; // Email address of the customer
    phone?: string; // Optional phone number of the customer
    address: Address; // Shipping address for the customer
}

/
 * Represents an address for a customer.
 * @interface Address
 */
export interface Address {
    street: string; // Street address
    city: string; // City of the address
    state: string; // State of the address
    zipCode: string; // Postal code of the address
    country: string; // Country of the address
}

/
 * Represents an order for luxury LRP cosmetics.
 * @interface Order
 */
export interface Order {
    id: string; // Unique identifier for the order
    customerId: string; // ID of the customer who placed the order
    products: Product[]; // List of products included in the order
    totalAmount: number; // Total amount for the order
    orderDate: Date; // Date when the order was placed
    status: OrderStatus; // Status of the order
}

/
 * Enum representing different order statuses.
 * @enum {string}
 */
export enum OrderStatus {
    Pending = 'Pending',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Canceled = 'Canceled',
}

/
 * Represents a product in the luxury LRP cosmetics catalog.
 * @interface Product
 */
export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product
    category: string; // Category of the product (e.g., skincare, makeup)
    images: string[]; // Array of image URLs for the product
    stock: number; // Available stock for the product
    isLuxury: boolean; // Indicates if the product is a luxury item
}

/
 * Represents the shopping cart for a customer.
 * @interface ShoppingCart
 */
export interface ShoppingCart {
    customerId: string; // ID of the customer owning the cart
    items: CartItem[]; // List of items in the shopping cart
}

/
 * Represents an item in the shopping cart.
 * @interface CartItem
 */
export interface CartItem {
    productId: string; // ID of the product
    quantity: number; // Quantity of the product in the cart
}

/
 * Represents a review for a product.
 * @interface Review
 */
export interface Review {
    productId: string; // ID of the reviewed product
    customerId: string; // ID of the customer who wrote the review
    rating: number; // Rating given by the customer (1 to 5)
    comment: string; // Customer's review comment
    date: Date; // Date when the review was made
}

/
 * Represents a luxury LRP cosmetics promotional offer.
 * @interface PromotionalOffer
 */
export interface PromotionalOffer {
    id: string; // Unique identifier for the promotional offer
    title: string; // Title of the promotional offer
    description: string; // Description of the offer
    discountPercentage: number; // Discount percentage for the offer
    startDate: Date; // Start date of the offer
    endDate: Date; // End date of the offer
}

// Exporting all interfaces for external usage
export {
    Customer,
    Address,
    Order,
    OrderStatus,
    Product,
    ShoppingCart,
    CartItem,
    Review,
    PromotionalOffer,
};