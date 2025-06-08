import React from 'react';

export default function CallToAction() {
  return (
    <section className=" mb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-white text-black rounded-2xl shadow-xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Your Dream Dubai Experience Awaits</h2>
            <p className="text-lg text-gray-700">
              Discover unforgettable destinations, personalized experiences, and world-class services. Let us make your trip extraordinary.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-6 md:mt-0 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Plan Your Trip
          </a>

          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-300 bg-opacity-20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 bg-opacity-20 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
