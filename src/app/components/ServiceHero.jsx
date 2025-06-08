import React from 'react'

function ServiceHero() {
    return (
        <div
            className="w-full h-[600px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/dubai/dubai_pkg_card_2.png')" }}
        >
            <div className="absolute inset-0 bg-black/50 flex items-center px-6">
                <div className="text-white text-left max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Don't imagine it — live it. <br /> Explore Dubai with us.
                    </h1>
                    <p className="text-sm md:text-base mb-2">
                        Expert travel services for Dubai: tours, transfers, hotels & more — all in one place.
                    </p>
                    <p className="text-xs md:text-sm text-gray-300">
                        30 people have booked packages in the last 24 hours.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceHero