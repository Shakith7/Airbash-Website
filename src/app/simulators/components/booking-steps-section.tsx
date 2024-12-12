"use client";

import React, { useState } from 'react';

const BookingSteps = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: '1',
      title: 'GO TO PLAYTOMIC’S BOOKING PLATFORM DIRECTLY BY CLICKING THE BUTTON BELOW.',
      button: 'Book on Playtomic',
      image: '/images/step-1.jpg', // Replace with your image path
    },
    {
      number: '2',
      title: 'CHOOSE A DATE, TIME, AND THE COURT THAT FITS YOUR PREFERENCE.',
      image: '/images/step-2.jpg', // Replace with your image path
    },
    {
      number: '3',
      title: 'COMPLETE THE BOOKING BY CONFIRMING YOUR DETAILS AND PAYMENT ON PLAYTOMIC.',
      image: '/images/step-3.jpg', // Replace with your image path
    },
  ];

  return (
    <section className="bg-[#f7f7f5] py-12">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl text-left md:text-5xl font-bold text-lime-600 mb-2">
          Bookings Made Easy
        </h2>
        <p className="text-gray-600 mb-10 text-left">
          Follow these simple steps to secure your game time!
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-black text-white p-6 rounded-md shadow-lg hover:bg-lime-600 transition-all duration-300 cursor-pointer aspect-square flex flex-col items-center justify-center"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Hover Image with Dark Overlay */}
              {hoveredStep === index && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60 rounded-md">
                  <img
                    src={step.image}
                    alt={`Step ${step.number}`}
                    className="w-full h-full object-cover rounded-md opacity-70"
                  />
                </div>
              )}

              {/* Content */}
              <div className="relative z-20">
                {/* Number */}
                <div className="text-6xl font-bold">{step.number}</div>
                {/* Title */}
                <p className="mt-4 text-sm md:text-base">{step.title}</p>
                {/* Button */}
                {step.button && (
                  <button className="mt-4 px-4 py-2 text-lime-600 bg-white rounded-md font-bold shadow-md group-hover:bg-black group-hover:text-white transition duration-300">
                    {step.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
