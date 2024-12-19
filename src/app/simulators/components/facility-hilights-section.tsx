import React from 'react';
import Image from 'next/image';

const FacilityHighlights = () => {
  const highlights = [
    {
      title: 'Courts',
      description: '3 courts',
      icon: '/icons/courts-icon.png', 
    },
    {
      title: 'Players',
      description: 'Courts accommodate 10 players',
      icon: '/icons/players-icon.png',
    },
    {
      title: 'Benefits',
      description: 'Food joint showers',
      icon: '/icons/benefits-icon.png',
    },
    {
      title: 'Bats ',
      description: 'Available to hire with hire charges',
      icon: '/icons/cricket-bats-icon.png',
    },
    {
      title: 'Soft balls',
      description: 'Available to purchase',
      icon: '/icons/padel-balls-icon.png', 
    },
  ];

  return (
    <section className="bg-[#f7f7f5] py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4"
          >
            {/* Icon */}
            <div className="bg-primarySim p-3 rounded-md mb-4">
              <Image
                src={highlight.icon}
                alt={`${highlight.title} icon`}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold text-black">{highlight.title}</h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilityHighlights;
