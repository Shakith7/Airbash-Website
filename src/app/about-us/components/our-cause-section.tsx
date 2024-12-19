"use client";

import React from 'react';
import Image from 'next/image';

const WhyStartAirbash: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Image
              src="/images/our-cause.jpg"
              alt="Airbash"
              width={500}
              height={700}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 ">
            Discover Why Airbash
            </h2>
            <h3 className="text-xl font-medium text-gray-900 mb-4 sm:mb-6 lg:mb-8"> Your Ultimate Indoor Play Destination!</h3>
            <p className="text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              We started Airbash with a mission to create a space that transcends the boundaries of traditional sports arenas - a place where people of all ages, backgrounds, and walks can come together to play, connect, and have fun. We envisioned Airbash as more than just a sports destination, it&apos;s a community hub that prioritizes fun, safety, and togetherness.
            </p>
            <p className="text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              One of our key focuses is promoting representation in sports, especially for women. We believe that empowering women&apos;s participation in sports is the greatest and most profound challenge that also inspires the next generation of athletes. Our facilities and programs are designed to ensure that women&apos;s sports are not sidelined but celebrated as an integral part of our vision.
            </p>
            <p className="text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              At the heart of Airbash is a commitment to child safety. Our supervised play areas are thoughtfully designed with modern safety requirements and strict safety protocols, providing parents with peace of mind while their children explore and enjoy. Whether it&apos;s a birthday party, a family day out, or a casual game, we strive to make every visit special and worry-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStartAirbash;