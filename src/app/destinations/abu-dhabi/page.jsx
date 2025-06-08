import BookingForm from '@/app/components/BookingForm'
import React from 'react'

function page() {
  return (
   <div className="w-full bg-white text-black">

      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/abu_dhabi.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-2 text-lg text-gray-300 max-w-xl">
            Your trusted Destination Management Company in Dubai, Abu Dhabi & Ras Al Khaimah
          </p>
        </div>
      </section>
    <BookingForm/>
    </div>
  )
}

export default page