"use client";

import React, { useState } from "react";
import Image from "next/image";

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Company Logo" width={40} height={40} />
          <div className="ml-6 flex space-x-4">
            <a href="/" className="text-gray-900 hover:text-gray-700">
              Home
            </a>
            <div className="relative">
              <button
                className="text-gray-900 hover:text-gray-700 focus:outline-none"
                onClick={toggleDropdown}
              >
                Sports
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <a
                    href="/padel"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Padel
                  </a>
                  <a
                    href="/cricket"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Cricket
                  </a>
                  <a
                    href="/simulators"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Simulators
                  </a>
                </div>
              )}
            </div>
            <a href="/entertainment" className="text-gray-900 hover:text-gray-700">
              Entertainment
            </a>
            <a href="/about" className="text-gray-900 hover:text-gray-700">
              About
            </a>
            <a href="/contact" className="text-gray-900 hover:text-gray-700">
              Contact
            </a>
            <a href="/membership" className="text-gray-900 hover:text-gray-700">
              Membership
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
