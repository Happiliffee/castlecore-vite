export default function CastleCoreHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow">
        <div className="flex items-center space-x-3">
          <img src="/castlecore-logo.png" alt="CastleCore Homes Logo" className="h-12" />
          <h1 className="text-2xl font-bold text-gray-900">CastleCore Homes</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <a href="#projects" className="hover:text-yellow-500">Projects</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </nav>
      </header>
      <section className="bg-cover bg-center text-white py-24 px-6 text-center" style={{ backgroundImage: "url('/castle-bg.jpg')" }}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Building Homes with Strength and Elegance</h2>
        <p className="text-lg max-w-2xl mx-auto">Your trusted partner in real estate development, land sales, and dream home creation in Nigeria.</p>
        <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600">Explore Properties</button>
      </section>
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Why Choose CastleCore?</h3>
        <p className="text-gray-600">With a foundation built on trust, strength, and architectural excellence, CastleCore Homes delivers modern and affordable real estate solutions tailored to your dreams.</p>
      </section>
      <section id="services" className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Land Sales</h4>
              <p>Verified land in fast-growing areas. Secure your future now.</p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Property Development</h4>
              <p>We build residential and commercial structures that stand the test of time.</p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Real Estate Consultancy</h4>
              <p>Guiding investors and families on smart property decisions in Nigeria.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center text-gray-700 font-semibold">Estate Phase 1 - Owerri</div>
          <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center text-gray-700 font-semibold">Castle Heights - Enugu</div>
          <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center text-gray-700 font-semibold">PalmView - Port Harcourt</div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-gray-100 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
        <p className="text-gray-600 mb-6">Ready to invest or have questions? Let’s build your dream together.</p>
        <a href="mailto:info@castlecorehomes.com" className="text-yellow-600 font-semibold">info@castlecorehomes.com</a>
        <div className="mt-4 text-gray-500">WhatsApp: +234 812 345 6789</div>
      </section>
      <footer className="py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} CastleCore Homes. All rights reserved.
      </footer>
    </div>
  );
}