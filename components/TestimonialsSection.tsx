import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    name: string;
    review: string;
    rating: number;
    photo: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Sophia Martinez",
        review: "Luxury LRP cosmetics transformed my skincare routine! The quality is unmatched, and my skin has never felt better.",
        rating: 5,
        photo: "/images/testimonials/sophia.jpg"
    },
    {
        name: "Isabella Chen",
        review: "The elegance of the packaging and the luxurious feel of the products are simply divine. I can't recommend Luxury LRP cosmetics enough!",
        rating: 5,
        photo: "/images/testimonials/isabella.jpg"
    },
    {
        name: "Ava Johnson",
        review: "I love how Luxury LRP cosmetics makes me feel special every time I use their products. The results are phenomenal.",
        rating: 5,
        photo: "/images/testimonials/ava.jpg"
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-orange-500 mb-8">What Our Customers Say</h2>
                <div className="flex flex-wrap justify-center">
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white shadow-lg rounded-lg p-6 m-4 w-full sm:w-80 transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.5 }}
                        >
                            <img 
                                src={testimonial.photo} 
                                alt={testimonial.name} 
                                className="w-24 h-24 rounded-full mx-auto mb-4" 
                            />
                            <h3 className="text-xl font-semibold text-orange-500">{testimonial.name}</h3>
                            <div className="flex justify-center mb-2">
                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 15.27L16.18 20 14.54 13.97 20 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 20z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 italic">{testimonial.review}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;