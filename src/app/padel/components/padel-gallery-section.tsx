"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PadelGallery = () => {
  const images = [
    '/images/padel/gallery1.jpg',
    '/images/padel/gallery2.jpg',
    '/images/padel/gallery3.jpg',
    '/images/padel/gallery4.jpg',
    '/images/padel/gallery5.jpg',
    '/images/padel/gallery6.jpg',
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const visibleImages = [
    images[startIndex % images.length],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const imageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section className="bg-[#f7f7f5] py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text and Buttons */}
        <div className="w-full lg:w-3/12 pr-0 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">Gallery</h2>
          <div className="flex justify-center lg:justify-start items-center space-x-4">
            <motion.button
              onClick={handlePrevious}
              className="w-12 h-12 flex items-center justify-center bg-black text-white rounded hover:bg-gray-700 transition"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center bg-black text-white rounded hover:bg-gray-700 transition"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {visibleImages.map((image, index) => (
              <motion.div
                key={index}
                className="w-full aspect-square bg-gray-200 rounded overflow-hidden relative"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PadelGallery;
