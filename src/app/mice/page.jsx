// src/app/mice/page.tsx or page.jsx
import React from 'react';
import { FaHandshake, FaGift, FaMicrophoneAlt, FaBusinessTime } from 'react-icons/fa';

const miceData = [
  {
    icon: <FaHandshake className="text-4xl text-[#0077b6]" />,
    title: 'Meetings',
    description:
      'We organize seamless corporate meetings in Dubai’s finest venues with full support – from AV setup to agenda planning.',
    image: '/mice/meeting.png',
  },
  {
    icon: <FaGift className="text-4xl text-[#0077b6]" />,
    title: 'Incentives',
    description:
      'Reward your top performers with unforgettable incentive experiences – luxury desert safaris, yacht parties, and more.',
    image: '/mice/incentives.png',
  },
  {
    icon: <FaMicrophoneAlt className="text-4xl text-[#0077b6]" />,
    title: 'Conferences',
    description:
      'Plan impactful conferences with high-end venues, speaker coordination, branding, and attendee management.',
    image: '/mice/conference.png',
  },
  {
    icon: <FaBusinessTime className="text-4xl text-[#0077b6]" />,
    title: 'Events & Exhibitions',
    description:
      'From product launches to trade shows, we provide end-to-end event planning, venue setup, and guest hospitality.',
    image: '/mice/events.png',
  },
];

const MicePage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/services/mice.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">MICE in Dubai</h1>
          <p className="mt-4 text-lg max-w-2xl text-gray-300">
            From boardrooms to beachside galas — we manage every moment of your business event.
          </p>
        </div>
      </section>

      {/* MICE Services */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {miceData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-2">{item.icon}<h2 className="text-2xl text-blue-500 font-bold">{item.title}</h2></div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{item.description}</p>
              <button className="mt-2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Plan {item.title}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-3xl text-black font-bold mb-4">Ready to Organize Your Event in Dubai?</h2>
        <p className="text-gray-600 mb-6">Let us handle every detail — from concept to execution.</p>
        <a
          href="/contact"
          className="inline-block bg-[#0077b6] text-white px-6 py-3 rounded-full hover:bg-[#023e8a] transition"
        >
          Contact Our MICE Experts
        </a>
      </section>
    </div>
  );
};

export default MicePage;
