"use client";

import React, { useState } from "react";
import Image from "next/image";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      image: "/images/testimonial1.jpg",
      quote: `"The best place for our family gathering! The kids loved it!"`,
      author: "Sarah J.",
    },
    {
      image: "/images/testimonial2.jpg",
      quote: `"Absolutely loved the ambiance and the activities!"`,
      author: "John D.",
    },
    {
      image: "/images/testimonial3.jpg",
      quote: `"Great experience! Perfect for all age groups."`,
      author: "Emily R.",
    },
    {
      image: "/images/testimonial1.jpg",
      quote: `"Fantastic service and amazing environment!"`,
      author: "Michael T.",
    },
    {
      image: "/images/testimonial2.jpg",
      quote: `"Highly recommended for family and friends gatherings!"`,
      author: "Anna K.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials = (start: number, count: number) => {
    return testimonials
      .slice(start, start + count)
      .concat(testimonials.slice(0, Math.max(0, start + count - testimonials.length)));
  };

  return (
    <div className="relative bg-white py-12 px-6 md:px-16">
      {/* Carousel Wrapper */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow-lg transition-all duration-300"
        >
          <span className="text-xl font-bold text-gray-800">❮</span>
        </button>

        {/* Testimonials */}
        <div className="flex justify-center w-full overflow-hidden">
          {visibleTestimonials(currentIndex, 3).map((testimonial, index) => (
            <div
              key={index}
              className="w-80 mx-4 transition-transform duration-500"
            >
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={testimonial.image}
                  alt={`testimonial ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 1}
                />
              </div>
              <p className="text-gray-700 italic text-sm text-center">
                {testimonial.quote}
              </p>
              <p className="text-gray-900 font-semibold text-center">
                -- {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow-lg transition-all duration-300"
        >
          <span className="text-xl font-bold text-gray-800">❯</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
