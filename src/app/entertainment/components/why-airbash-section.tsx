"use client";

import React from "react";
import Image from "next/image";

const WhyAirbash = () => {
  const cards = [
    {
      image: "/images/play-zone.jpg",
      title: "A safe, supervised play zone with modern equipment, perfect for kids aged 2-10.",
    },
    {
      image: "/images/socialize.jpg",
      title: "Relax and socialize with refreshments, snacks, and meals in a vibrant setting.",
    },
    {
      image: "/images/events.jpg",
      title: "Customizable event packages for team-building, private parties, or family gatherings.",
    },
  ];

  return (
    <section className="relative bg-white py-12 px-6 md:px-16">

      <div className=" mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {/* Left Section: Text */}
        <div className="w-full md:w-1/3 items-center">
          <h2 className="text-6xl font-medium text-black mb-6">
            Why <span className="text-black ">AIRBASH?</span>
          </h2>
          <p className="text-gray-700">
            Discover why AIRBASH is the perfect destination for events, team-building, or family
            fun. From safe play zones to vibrant social spaces, we offer something for everyone.
          </p>
        </div>

        {/* Right Section: Cards */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="w-full h-[400px] relative">
                <Image
                  src={card.image}
                  alt={`Card image ${index + 1}`}
                  fill
                  className="object-cover  transition-all duration-300"
                />
              </div>

              {/* Text */}
              <p className="text-center text-black italic font-light mt-4 px-4">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAirbash;
