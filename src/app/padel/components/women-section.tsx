import React from 'react';
import Image from 'next/image';

export default function PadelForWomen() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
              src="/padel-woman.jpg"
              alt="Padel for Women"
              width={1000}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Padel for Women
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover the joys of padel, a dynamic racket sport that is growing
              in popularity among women around the world. Join our inclusive
              community and learn the game in a supportive environment.
            </p>
            <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}