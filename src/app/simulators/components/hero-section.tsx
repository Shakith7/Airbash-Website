import React from 'react';
import Image from 'next/image';

const PadelHeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/images/simulators-bg.jpg" 
        alt="Padel Courts"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start max-w-7xl mx-10 px-6 lg:px-8 text-white">
        <div className="bg-primary text-black font-bold py-2 px-4 rounded-lg mb-6 flex items-center gap-2">
          <span>BOOK NOW</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-9xl font-extrabold text-primary leading-tight">
          SIMULATORS &<br/>
          GAMES
        </h1>
      </div>
    </section>
  );
};

export default PadelHeroSection;
