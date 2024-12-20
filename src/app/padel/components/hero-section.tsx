import React from "react";
import Image from "next/image";

const PadelHeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/padel-courts-bg-2.jpg"
          alt="Padel Courts"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Adjusts based on screen size
          className="object-cover sm:object-center" // Ensures proper scaling and positioning
          priority // Preloads the image for better performance
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start max-w-7xl mx-6 sm:mx-8 px-4 sm:px-6 lg:px-8 text-white">
        {/* Button */}
        <div className="bg-primary text-black font-bold py-2 px-4 rounded-lg mb-4 sm:mb-6 flex items-center gap-2">
          <span className="text-sm sm:text-base">BOOK NOW</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-primary leading-tight">
          PADEL <br /> COURTS
        </h1>
      </div>
    </section>
  );
};

export default PadelHeroSection;
