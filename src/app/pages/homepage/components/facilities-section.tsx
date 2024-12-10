import React from 'react';
import Image from 'next/image';

const FacilitiesSection = () => {
  const facilities = [
    { title: "CRICKET", image: "/images/image-22.png", alt: "Cricket" },
    { title: "PADEL", image: "/images/image-22.png", alt: "Padel" },
    { title: "SIMULATORS", image: "/images/image-22.png", alt: "Simulators" },
    { title: "ENTERTAINMENT", image: "/images/image-22.png", alt: "Entertainment" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
          LONDON&apos;S PREMIER MULTI-SPORTS ARENA
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 mb-12 leading-relaxed">
          At Airbash, we combine the excitement of multiple sports with an exceptional 
          experience from the moment you arrive. Our mission is to create unforgettable 
          moments, from the dynamic atmosphere to the personalized touches that make 
          every visit special, whether you&apos;re new to the game or a seasoned athlete. 
          Airbash is the place where you belong, offering a unique blend of Padel, Cricket, 
          Simulators, and Entertainment - all under one roof.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition"
          >
            Book on Playtonic
          </a>
          <a
            href="#"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md transition"
          >
            Newsletter
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-[48rem]"> {/* Increased height */}
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transform transition duration-300"
                />
              </div>
              {/* Title */}
              <div className="p-4 bg-white">
                <h3 className="text-3xl font-bold font-semibold text-gray-900 text-center">
                  {facility.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
