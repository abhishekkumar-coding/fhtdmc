import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Desert Safari',
    image: '/dubai/desert_safari.png',
  },
  {
    id: 2,
    name: 'Burj Khalifa',
    image: '/dubai/burj_khalifa.png',
  },
  {
    id: 3,
    name: 'Dubai Marina',
    image: '/dubai/dhow_cruise.png',
  },
  {
    id: 4,
    name: 'Aquaventure Waterpark',
    image: '/dubai/aquaventure.png',
  },
  {
    id: 5,
    name: 'Dubai Frame',
    image: '/dubai/dubai_frame.png',
  },
  {
    id: 6,
    name: 'Palm Jumeirah',
    image: '/dubai/palm_jumeirah.png',
  },
  {
    id: 7,
    name: 'Dubai Miracle Garden',
    image: '/dubai/miracle_garden.png',
  },
  {
    id: 8,
    name: 'Dubai Aquarium & Underwater Zoo',
    image: '/dubai/dubai_aquarium.png',
  },
  {
    id: 9,
    name: 'Global Village',
    image: '/dubai/global_village.png',
  },
  {
    id: 10,
    name: 'Museum of the Future',
    image: '/dubai/museum_of_future.png',
  },
  {
    id: 11,
    name: 'Jumeirah Mosque',
    image: '/dubai/jumeirah_mosque.png',
  },
  {
    id: 12,
    name: 'Ain Dubai (Dubai Eye)',
    image: '/dubai/ain_dubai.png',
  },
];

export default function DubaiDestinations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-black mb-12">Famous Places in Dubai</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {destinations.map((item) => (
          <div key={item.id} className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
