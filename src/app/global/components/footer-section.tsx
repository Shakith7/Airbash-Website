"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Image 
              src="/logo.png" 
              alt="Company Logo" 
              width={150} 
              height={50} 
              className="mb-4"
            />
            <p className="text-sm text-gray-300 mb-4">
              Your ultimate destination for sports entertainment and simulation experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-primary hover:text-gray-300">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-primary hover:text-gray-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-primary hover:text-gray-300">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-primary hover:text-gray-300">Home</Link>
              <Link href="/padel" className="block text-sm text-primary hover:text-gray-300">Padel</Link>
              <Link href="/cricket" className="block text-sm text-primary hover:text-gray-300">Cricket</Link>
              <Link href="/simulators" className="block text-sm text-primary hover:text-gray-300">Simulators</Link>
              <Link href="/entertainment" className="block text-sm text-primary hover:text-gray-300">Entertainment</Link>
            </div>
          </div>

          {/* Other Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Other Pages</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-primary hover:text-gray-300">About Us</Link>
              <Link href="/contact" className="block text-sm text-primary hover:text-gray-300">Contact</Link>
              <Link href="/membership" className="block text-sm text-primary hover:text-gray-300">Membership</Link>
              <Link href="/privacy" className="block text-sm text-primary hover:text-gray-300">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-primary hover:text-gray-300">Terms of Service</Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-primary" />
                <span className="text-sm">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <span className="text-sm">info@sportscomplex.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span className="text-sm">
                  123 Sports Avenue, 
                  City, State 12345, 
                  Country
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Airbash. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;