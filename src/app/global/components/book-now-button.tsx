import React from "react";
import Image from "next/image";

const BookNowButton = () => {
  return (
    <a
      href="/booking" // Link to your booking page
      className="fixed bottom-4 right-4 z-50 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 flex flex-col items-center space-y-1"
    >
      <Image
        src="/playtomic-logo.png"
        alt="Booking Icon"
        width={100}
        height={100}
        className="mb-1"
      />
      <span>Book Now</span>
    </a>
  );
};

export default BookNowButton;
