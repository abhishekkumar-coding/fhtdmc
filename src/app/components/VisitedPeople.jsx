import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';

export default function VisitedPeople() {
  const [count, setCount] = useState(0);
  const targetCount = 5280; // Example count of people visited or booked

  // Animate count from 0 to targetCount
  useEffect(() => {
    let start = 0;
    const end = targetCount;
    if (start === end) return;

    let duration = 3000; // animation duration in ms
    let incrementTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 50; // Increment by 50 for smooth animation
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetCount]);

  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 text-white py-16 px-6 sm:px-12 rounded-lg max-w-5xl mx-auto mb-10 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
        {/* Icon & Text */}
        <div className="flex items-center space-x-4 mb-8 sm:mb-0">
          <FaUsers className="text-6xl sm:text-8xl opacity-80" />
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{count.toLocaleString()}</h2>
            <p className="uppercase tracking-wide font-semibold text-sm sm:text-base opacity-90">
              People visited our Dubai tours
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center sm:text-right max-w-sm">
          <h3 className="text-2xl font-semibold mb-2">Join thousands of happy travelers!</h3>
          <p className="mb-6 text-white/90">
            Book your personalized Dubai experience with us today and make unforgettable memories.
          </p>
          <button
            className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            onClick={() => alert('Redirect to booking page')}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
