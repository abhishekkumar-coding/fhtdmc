"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/fht_logo.png" alt="FHT DMC Logo" width={80} height={40} />
            <span className="text-xl font-bold text-blue-700 hidden sm:inline">FHT DMC</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow">
            <nav className="flex flex-col space-y-2 px-6 py-4 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Fly High with FHT DMC
        </h2>
        <p className="text-lg md:text-xl max-w-2xl">
          Your trusted destination management company for unforgettable travel experiences.
        </p>
      </section>


      {/* About */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h3>
        <p className="text-center text-gray-600 text-lg leading-relaxed">
          FHT DMC (Fly High Tour) is a premium travel management company offering top-notch services for travelers, corporates, and groups. <br />
          We ensure smooth and memorable journeys by handling every detail from visa support to luxury stays.
        </p>
      </section>


      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
          {[
            { title: "Visa Processing", desc: "Fast, reliable visa services for UAE and other destinations." },
            { title: "Hotel Booking", desc: "Top-rated hotels and resorts for your comfort." },
            { title: "City Tours", desc: "Explore the UAE’s best attractions with guided tours." },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-blue-600">{s.title}</h4>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h3>
        <div className="text-center text-gray-700 space-y-5 text-lg">
          <p>
            <strong className="text-blue-600">Email:</strong> contact@fhtdmc.com
          </p>
          <p>
            <strong className="text-blue-600">Phone:</strong> +91-701-167-0923
          </p>
          <p>
            <strong className="text-blue-600">Instagram:</strong> @fht.dmc
          </p>
          <p className="max-w-xl mx-auto text-base">
            We're here to assist you with all your travel needs! Reach out anytime and we'll help you plan the perfect journey.
          </p>
        </div>
      </section>

    </main>
  );
}

