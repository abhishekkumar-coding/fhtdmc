import React, { useState } from 'react';

const faqs = [
  {
    question: "What services does your Dubai DMC offer?",
    answer:
      "We provide hotel bookings, airport transfers, guided tours, event management (MICE), transportation, yacht rentals, attraction tickets, and cultural experiences tailored to your needs.",
  },
  {
    question: "How can I book a tour or service?",
    answer:
      "You can book directly through our website’s contact form or get in touch with our team via phone or email for personalized assistance.",
  },
  {
    question: "Do you offer customized tour packages?",
    answer:
      "Yes! We specialize in creating personalized itineraries based on your interests, budget, and schedule to make your Dubai trip unforgettable.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, bank transfers, and secure online payments through our website.",
  },
  {
    question: "Can you arrange corporate events and conferences?",
    answer:
      "Absolutely. Our MICE services cover meetings, incentives, conferences, and events, ensuring professional and seamless management.",
  },
  {
    question: "Do you provide airport pickup and drop-off services?",
    answer:
      "Yes, our reliable airport transfer services guarantee hassle-free and comfortable rides to and from Dubai airports.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
