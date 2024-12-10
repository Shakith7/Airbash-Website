"use client";

import Image from "next/image";

const WhatsOnOffer = () => {
  const offers = [
    {
      title: "ACADEMY",
      description:
        "At AIRBASH, we offer classes for all skill levels, from beginners to pros. Our multisport academy provides expert coaching in cricket, padel, baseball, and golf, tailored to your needs.",
      image: "/images/academy.jpg", 
    },
    {
      title: "LIFESTYLE",
      description:
        "Experience a lifestyle hub designed for sport enthusiasts and families, combining world-class facilities with a welcoming community vibe.",
      image: "/images/lifestyle.jpg", 
    },
    {
      title: "NUTRI-SHOP",
      description:
        "Refuel and recharge at our Nutri-Shop offering performance-focused snacks, meals, and hydration tailored for active lifestyles.",
      image: "/images/nutri-shop.jpg", 
    },
    {
      title: "VENUE HIRE",
      description:
        "Host unforgettable events at AIRBASH, with versatile spaces perfect for sports parties, corporate gatherings, and private functions.",
      image: "/images/venue-hire.jpg", 
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          WHAT&apos;S ON OFFER AT <u className="text-yellow-400">AIRBASH</u>
        </h2>
        <p className="text-lg md:text-2xl mb-12 leading-relaxed">
          At AIRBASH, we offer classes for all skill levels, from beginners to
          pros. Our multisport academy provides expert coaching in cricket,
          padel, baseball, and golf, with programs tailored to your needs. Our
          experienced coaches will guide you through each session, focusing on
          techniques, shots, and match play strategies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={300}
                height={600}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-4xl font-bold text-yellow-400">
                  {offer.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsOnOffer;
