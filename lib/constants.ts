export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    primary: "#FFA500", // orange
    secondary: "#FFFFFF", // white
};

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    phone?: string;
}

export interface Order {
    id: string;
    customerId: string;
    productIds: string[];
    totalAmount: number;
    orderDate: Date;
}

export const DEFAULT_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Luxury Hydrating Serum",
        description: "An exquisite serum that deeply hydrates and rejuvenates the skin, giving it a youthful glow.",
        price: 120.00,
        imageUrl: "/images/products/hydrating-serum.jpg",
        category: "Skincare",
    },
    {
        id: "2",
        name: "Silk Touch Foundation",
        description: "A lightweight, luxurious foundation that provides flawless coverage with a natural finish.",
        price: 75.00,
        imageUrl: "/images/products/silk-touch-foundation.jpg",
        category: "Makeup",
    },
    {
        id: "3",
        name: "Radiant Glow Highlighter",
        description: "Illuminate your complexion with our radiant highlighter, designed to add a touch of luxury to your makeup routine.",
        price: 45.00,
        imageUrl: "/images/products/radiant-glow-highlighter.jpg",
        category: "Makeup",
    },
];

export const CONFIG = {
    websiteName: BRAND_NAME,
    footerText: "© 2023 luxury LRP cosmetics. All rights reserved.",
    contactEmail: "info@luxurylrpcosmetics.com",
    supportPhone: "+1 (800) 123-4567",
};