import React from 'react';

const services = [
    {
        icon: '🏨',
        title: 'Hotel Booking',
        description:
            'Enjoy unbeatable rates and exclusive deals at premium hotels across Dubai. From luxury resorts to budget-friendly stays, we handle your accommodation needs with ease, ensuring comfort, convenience, and quality service every step of the way.',
        image: '/services/hotel.png',
    },
    {
        icon: '✈️',
        title: 'Airport Transfers',
        description:
            "Experience stress-free travel with our reliable airport pickup and drop-off services. Whether you're arriving or departing, our team ensures timely, smooth transfers with professional drivers and a fleet of well-maintained vehicles.",
        image: '/services/airport.png',
    },
    {
        icon: '🏖️',
        title: 'Tour Packages',
        description:
            "Discover the best of Dubai with our curated tour packages. From thrilling desert safaris to relaxing dhow cruises and city sightseeing tours, we offer unforgettable experiences tailored to your interests and schedule.",
        image: '/services/tour.png',
    },
    {
        icon: '🧑‍🤝‍🧑',
        title: 'MICE',
        description:
            "We specialize in organizing corporate travel, including Meetings, Incentives, Conferences, and Events. Our expert planners ensure every detail is flawless — from venue selection to logistics — for impactful, professional gatherings.",
        image: '/services/mice.png',
    },
    {
        icon: '🚗',
        title: 'Transportation',
        description:
            "Travel Dubai in style and comfort with our transportation services. Choose from a range of vehicles including private cars, luxury vans, and chauffeur-driven limousines, all designed to provide seamless, door-to-door mobility.",
        image: '/services/transport.png',
    },
    {
        icon: '🛥️',
        title: 'Yacht Booking',
        description:
            "Sail the Arabian Gulf with our luxury yacht rentals. Perfect for parties, romantic escapes, or private events, our yachts come with full amenities, professional crews, and unforgettable views of Dubai's coastline.",
        image: '/services/yatch.png',
    },
    {
        icon: '🎟️',
        title: 'Attraction Tickets',
        description:
            "Skip the queues and explore Dubai's top attractions with ease. We provide fast-track tickets to Burj Khalifa, Dubai Frame, Ferrari World, Global Village, and more — all at competitive prices and with zero hassle.",
        image: '/services/tickets.png',
    },
    {
        icon: '🕌',
        title: 'Cultural Experiences',
        description:
            "Dive into the rich heritage of the UAE with our cultural experiences. Enjoy guided visits to museums, heritage villages, traditional markets, and Emirati food tours that give you a true taste of local life and history.",
        image: '/services/culture.png',
    },
];


export default function WhatWeProvide() {
    return (
        <div className="w-full flex flex-col items-center px-4 md:px-8 py-16">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-20">
                What Services We Provide
            </h1>

            {services.map((service, index) => (
                <div
                    key={index}
                    className={`flex flex-col-reverse md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        } items-center gap-10 mb-20 max-w-7xl w-full`}
                >
                    {/* Text */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2">
                            <span className="text-3xl">{service.icon}</span> {service.title}
                        </h2>
                        <p className="text-gray-600 text-base mb-5">
                            {service.description}
                        </p>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                            Learn More
                        </button>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full rounded-xl shadow-md object-cover h-[280px] md:h-[350px]"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
