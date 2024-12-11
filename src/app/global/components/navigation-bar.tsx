import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <nav className="bg-black shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-t-primary">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Company Logo" width={100} height={100} />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" passHref>
            <span className="text-primary font-bold hover:text-gray-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/padel" passHref>
            <span className="text-primary font-bold hover:text-gray-300 cursor-pointer">Padel</span>
          </Link>
          <Link href="/cricket" passHref>
            <span className="text-primary font-bold hover:text-gray-300 cursor-pointer">Cricket</span>
          </Link>
          <Link href="/entertainment" passHref>
            <span className="text-primary font-bold hover:text-gray-300 cursor-pointer">Entertainment</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-primary font-bold hover:text-gray-300 cursor-pointer">About</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-primary font-bold hover:text-gray-300 cursor-pointer">Contact</span>
          </Link>
          <Link href="/simulators" passHref>
            <span className="text-primary font-bold hover:text-gray-300 cursor-pointer">Simulators</span>
          </Link>
          <Link href="/membership" passHref>
            <span className="text-primary font-bold hover:text-gray-300 cursor-pointer">Membership</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
