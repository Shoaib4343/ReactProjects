import React from 'react';
import ClientBadge from './ClientBadge';

const WhyHireMeSection = () => {
  const stats = [
    { number: "50+", label: "Satisfied Clients", isActive: true },
    { number: "70+", label: "Project Complete", isActive: false },
    { number: "85+", label: "Project Complete", isActive: false }
  ];

  return (
    <section className="py-20 bg-[#F5F1EE]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-orange-500 text-lg font-medium mb-3">Hire Me</p>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-orange-500">Why</span>{" "}
                <span className="text-gray-800">Hire Me</span>
              </h2>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-300">
                Download CV
              </button>
              <button className="w-12 h-12 border-2 border-orange-500 text-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - Statistics */}
          <div className="relative">
            {stats.map((stat, index) => (
              <div key={index} className={`relative mb-8 ${index === 1 ? 'ml-60' : index === 2 ? 'ml-16' : ''}`}>
                <ClientBadge 
                  number={stat.number}
                  label={stat.label}
                  isActive={stat.isActive}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection; 