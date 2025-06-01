import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
         <div><Image src="/fht_logo.png" alt="FHT DMC Logo" width={80} height={40} /></div>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Fly High with FHT DMC</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your trusted destination management company for unforgettable travel experiences.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-6">About Us</h3>
        <p className="text-center text-gray-700 leading-relaxed">
          FHT DMC (Fly High Tour) is a premium travel management company offering top-notch services for travelers, corporates, and groups.
          We ensure smooth and memorable journeys by handling every detail from visa support to luxury stays.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          {[
            { title: "Visa Processing", desc: "Fast, reliable visa services for UAE and other destinations." },
            { title: "Hotel Booking", desc: "Top-rated hotels and resorts for your comfort." },
            { title: "City Tours", desc: "Explore the UAE’s best attractions with guided tours." },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-blue-600">{s.title}</h4>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
        <div className="text-center text-gray-700 space-y-4">
          <p><strong>Email:</strong> contact@fhtdmc.com</p>
          <p><strong>Phone:</strong> +971-XXX-XXXXXX</p>
          <p><strong>Instagram:</strong> @fht.dmc</p>
          <p>We’re here to assist you with all your travel needs!</p>
        </div>
      </section>
    </main>
  );
}

