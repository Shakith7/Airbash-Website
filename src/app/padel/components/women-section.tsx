import React from "react";

const PadelForWomen = () => {
  return (
    <section
      className="relative w-full h-[840px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/padel-woman.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative flex items-end justify-left h-full  ">
        <div className="text-left ">
          <h1 className="text-9xl font-medium text-white ml-32 mb-16 ">
            <span className="text-pink-500 ">PADEL </span>
            FOR <span className="text-white"><br/>WOMEN</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PadelForWomen;
