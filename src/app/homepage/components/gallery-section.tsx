"use client";

import Image from "next/image";

const GallerySection = () => {
  const galleryImages = [
    { src: "/images/gallery-1.jpg", alt: "Player with padel racket" },
    { src: "/images/gallery-2.jpg", alt: "Padel court with racket" },
    { src: "/images/gallery-3.jpg", alt: "Orange padel racket close-up" },
    { src: "/images/gallery-4.jpg", alt: "Padel racket handle close-up" },
    { src: "/images/gallery-5.jpg", alt: "Player with padel racket in hand" },
    { src: "/images/gallery-6.jpg", alt: "Young girl playing padel" },
    { src: "/images/gallery-7.jpg", alt: "Two players on a padel court" },
    { src: "/images/gallery-8.jpg", alt: "Outdoor padel court" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            We are <span className="text-black italic"><u>AIRBASH</u></span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Our facility fuses luxury state-of-the-art and sustainably designed 
            facilities, with personalized coaching, and an electrifying social atmosphere.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
