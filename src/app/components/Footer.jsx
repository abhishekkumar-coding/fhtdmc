import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 px-4 md:px-16 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 border-b border-gray-700 pb-10">
        {/* Logo & Description */}
        <div>
          <div>
            <Image
              src="/footer_logo.png"
              alt="Fly High DMC Logo"
              width={100}
              height={50}
              className="mb-4"
            />
          </div>
          <p className="text-gray-400 text-sm">
            Your trusted travel partner for unforgettable Dubai experiences — from luxury stays to thrilling adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Hotel Booking</li>
            <li>Airport Transfers</li>
            <li>Tour Packages</li>
            <li>Yacht Booking</li>
            <li>Cultural Experiences</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-300 text-sm">📍 Dubai, UAE</p>
          <p className="text-gray-300 text-sm">📞 +91-701-167-0923</p>
          <p className="text-gray-300 text-sm">✉️ info@fhtdmc.com</p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © 2012 FHT DMC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
