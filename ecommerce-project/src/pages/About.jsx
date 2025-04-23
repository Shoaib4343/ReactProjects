import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-red-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            With decades of collective experience, we're on a mission to bring the best online shopping experience right to your screen.
          </p>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-lg shadow-xl group">
            <img
              src="/images/about.jpg"
              alt="About Us"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">Who We Are</h2>
            <p className="text-gray-600">
              We're more than just a shop — we’re a passionate team of creators, dreamers, and problem-solvers. From top-tier products to intuitive interfaces,
              everything we build is centered around *you* — the customer.
            </p>
            <p className="text-gray-600">
              We believe design should be invisible but unforgettable. Every button, every transition, every pixel is intentional.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-100 rounded-lg p-8 shadow-md space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Our Core Values</h3>
          <ul className="grid md:grid-cols-3 gap-6 text-gray-700 font-medium">
            <li className="p-4 bg-white shadow-sm rounded-lg hover:shadow-lg transition">
              🚀 Innovation First
            </li>
            <li className="p-4 bg-white shadow-sm rounded-lg hover:shadow-lg transition">
              🤝 Customer Obsession
            </li>
            <li className="p-4 bg-white shadow-sm rounded-lg hover:shadow-lg transition">
              🎯 Quality, Always
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
