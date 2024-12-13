import React from "react";

const PadelForWomen = () => {
  return (
    <section
      className="relative w-full h-[840px] md:h-[600px] sm:h-[480px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/padel-woman.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative flex items-end justify-center sm:justify-start h-full">
        <div className="text-center sm:text-left px-4 sm:px-8 lg:px-32">
          <h1 className="text-4xl sm:text-6xl lg:text-9xl font-medium text-white mb-8 sm:mb-12 lg:mb-16">
            <span className="text-pink-500">PADEL </span>
            FOR <br />
            <span className="text-white">WOMEN</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PadelForWomen;
