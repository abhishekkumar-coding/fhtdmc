import React from 'react';
import {
    ShieldCheck,
    Clock,
    Globe,
    Headphones,
    Star,
    Users,
} from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        title: 'Licensed & Trusted',
        description:
            "We're a certified DMC with deep experience, trusted by travelers and partners across the globe.",
    },
    {
        icon: <Clock className="w-6 h-6 text-white" />,
        title: '24/7 Support',
        description:
            "We offer round-the-clock support, so you're never alone on your journey — before or during your trip.",
    },
    {
        icon: <Globe className="w-6 h-6 text-white" />,
        title: 'Local Expertise',
        description:
            "With deep roots in Dubai, we provide unmatched local insight and personalized recommendations.",
    },
    {
        icon: <Headphones className="w-6 h-6 text-white" />,
        title: 'Custom Itineraries',
        description:
            'No cookie-cutter plans. We tailor every trip to suit your interests, schedule, and style.',
    },
    {
        icon: <Star className="w-6 h-6 text-white" />,
        title: 'Top-rated Experiences',
        description:
            'We partner with only the best — top-rated guides, luxury hotels, and premium experiences.',
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: 'Corporate & Group Travel',
        description:
            'From solo travelers to MICE groups, we plan and execute seamless, stress-free journeys.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8 w-full flex justify-center">
            <div className="max-w-7xl w-full">
                {/* Header */}
                <div className="mb-16 text-left">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Your journey deserves more than a booking — it deserves thoughtful planning, local insights, and genuine care. Here's what makes us different.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            </div>
                            {/* Decorative stripe */}
                            <div className="absolute bottom-0 left-0 h-1 w-16 bg-blue-600 rounded-tr-lg"></div>
                        </div>
                    ))}
                </div>

                {/* Call-to-Action */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                        Ready to experience Dubai differently?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Let us turn your travel dreams into reality. Get in touch today and we'll start planning the perfect Dubai trip — made just for you.
                    </p>
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                        Contact Our Team
                    </button>
                </div>
            </div>
        </section>
    );
}
