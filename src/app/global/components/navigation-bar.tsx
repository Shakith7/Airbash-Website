"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Company Logo" width={100} height={100} />
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-primary hover:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" passHref>
              <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Home</span>
            </Link>
            <Link href="/padel" passHref>
              <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Padel</span>
            </Link>
            <Link href="/cricket" passHref>
              <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Cricket</span>
            </Link>
            <Link href="/simulators" passHref>
              <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Simulators</span>
            </Link>
            <Link href="/entertainment" passHref>
              <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Entertainment</span>
            </Link>
            <Link href="/about-us" passHref>
              <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">About</span>
            </Link>
            <Link href="/contact-us" passHref>
              <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Contact</span>
            </Link>
            <Link href="/membership" passHref>
              <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Membership</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link href="/" passHref>
                <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Home</span>
              </Link>
              <Link href="/padel" passHref>
                <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Padel</span>
              </Link>
              <Link href="/cricket" passHref>
                <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Cricket</span>
              </Link>
              <Link href="/entertainment" passHref>
                <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Entertainment</span>
              </Link>
              <Link href="/about" passHref>
                <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">About</span>
              </Link>
              <Link href="/contact" passHref>
                <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Contact</span>
              </Link>
              <Link href="/simulators" passHref>
                <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Simulators</span>
              </Link>
              <Link href="/membership" passHref>
                <span className="text-primary font-medium hover:text-gray-300 cursor-pointer">Membership</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
