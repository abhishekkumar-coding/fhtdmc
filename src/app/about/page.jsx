import React from 'react';
import { FaSuitcase, FaUmbrellaBeach, FaHotel, FaShuttleVan, FaMapMarkedAlt, FaCogs } from 'react-icons/fa';
import { FaRegClock, FaUserCog, FaHeadset, FaNetworkWired } from 'react-icons/fa';


export default function AboutUs() {

  const services = [
    { icon: <FaSuitcase className="text-4xl text-green-600" />, title: 'MICE Management', desc: 'Corporate events, meetings, and exhibitions tailored for impact and engagement.' },
    { icon: <FaUmbrellaBeach className="text-4xl text-blue-500" />, title: 'Leisure Travel', desc: 'City tours, desert safaris, luxury experiences, and custom holiday packages.' },
    { icon: <FaHotel className="text-4xl text-yellow-600" />, title: 'Hotel Booking', desc: 'Exclusive rates at 3 to 5-star hotels and resorts across the UAE.' },
    { icon: <FaShuttleVan className="text-4xl text-purple-500" />, title: 'Transportation', desc: 'Airport transfers, chauffeur services, luxury car rentals and group travel.' },
    { icon: <FaMapMarkedAlt className="text-4xl text-pink-500" />, title: 'Guided Tours', desc: 'Licensed multilingual guides and cultural tours for every traveler type.' },
    { icon: <FaCogs className="text-4xl text-indigo-500" />, title: 'Tailored Packages', desc: 'Every itinerary is designed to suit your preferences, schedule, and budget.' },
  ];

  const features = [
    {
      icon: <FaRegClock className="text-4xl text-green-600 mx-auto mb-4" />,
      title: 'Years of Experience',
      desc: 'Over a decade of excellence in managing UAE travel experiences.',
    },
    {
      icon: <FaUserCog className="text-4xl text-blue-500 mx-auto mb-4" />,
      title: 'Custom Solutions',
      desc: 'Tailor-made packages to suit every traveler and business need.',
    },
    {
      icon: <FaHeadset className="text-4xl text-purple-600 mx-auto mb-4" />,
      title: '24/7 Support',
      desc: 'Always available to assist before, during, and after your trip.',
    },
    {
      icon: <FaNetworkWired className="text-4xl text-orange-500 mx-auto mb-4" />,
      title: 'Strong Local Network',
      desc: 'Top-tier hotel, transport, and tour partnerships in the UAE.',
    },
  ];

  return (
    <div className="w-full bg-white text-black">

      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/about_hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-2 text-lg text-gray-300 max-w-xl">
            Your trusted Destination Management Company in Dubai, Abu Dhabi & Ras Al Khaimah
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>FHT DMC</strong> is more than just a travel company — we are curators of unique, high-quality experiences across the United Arab Emirates. With deep local knowledge and a passion for excellence, we are proud to serve as a full-service Destination Management Company (DMC) with a strong presence in Dubai, Abu Dhabi, and Ras Al Khaimah.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you're a corporate client seeking seamless MICE (Meetings, Incentives, Conferences, and Exhibitions) arrangements, or a traveler looking for unforgettable leisure experiences, we customize every journey with precision, care, and local expertise.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and innovative Destination Management Company in the UAE, creating meaningful and inspiring experiences for travelers and business partners around the world.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver world-class travel services through dedication, creativity, and authentic local expertise — making every journey with Fly High DMC extraordinary and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {services.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* UAE Coverage */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Coverage Across the UAE</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: 'Dubai',
                desc: 'From skyscrapers to souks, Fly High DMC captures the magic of Dubai with luxury, adventure, and culture.',
                img: '/dubai.png'
              },
              {
                title: 'Abu Dhabi',
                desc: "Experience the grandeur of the UAE's capital with curated tours, cultural landmarks, and corporate events",
                img: '/abu_dhabi.png'
              },
              {
                title: 'Ras Al Khaimah',
                desc: 'The perfect blend of mountains, beaches, and heritage — ideal for relaxation and offbeat travel.',
                img: '/rak.png'
              }
            ].map((place, index) => (
              <div key={index} className="rounded-xl shadow overflow-hidden bg-white">
                <img src={place.img} alt={place.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-semibold text-xl mb-2">{place.title}</h4>
                  <p className="text-gray-600 text-sm">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fly High DMC?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((item, index) => (
            <div key={index}>
              {item.icon}
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Call To Action */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto  rounded-2xl shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Ready to Plan Your Dream Trip?</h2>
            <p className="text-white/90">
              Reach out today and let our expert team take care of every detail, so you can relax and enjoy.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-6 md:mt-0 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
