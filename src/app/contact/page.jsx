import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Page() {
    return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/contact_bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-300">
            We're here to help you plan your perfect Dubai experience.
          </p>
        </div>
      </section>

      {/* Info + Form Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 py-16">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600">
            As your trusted Dubai DMC, we offer complete destination management services — hotel bookings, transfers,
            tours, events, and more. Reach out for custom travel planning!
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-[#e0e0e0] flex items-center justify-center text-[#333] text-lg">
                <FaPhoneAlt />
              </span>
              <span className="text-gray-700">+91-701-167-0923</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-[#e0e0e0] flex items-center justify-center text-[#333] text-lg">
                <FaEnvelope />
              </span>
              <span className="text-gray-700">info@fhtdmc.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-[#e0e0e0] flex items-center justify-center text-[#333] text-lg">
                <FaMapMarkerAlt />
              </span>
              <span className="text-gray-700">Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-xl shadow-xl space-y-4">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="date"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="number"
              placeholder="Number of Pax"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};


export default Page