import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Welcome to the home of Lorem Ipsum text. You can build whole bunch of it using our super simple to use Lorem Ipsum Generator. There are plenty of variations.",
      icon: "/icon.png",
      isActive: true
    },
    {
      id: 2,
      title: "Web Development",
      description: "Welcome to the home of Lorem Ipsum text. You can build whole bunch of it using our super simple to use Lorem Ipsum Generator. There are plenty of variations.",
      icon: "/card logo.png",
      isActive: false
    },
    {
      id: 3,
      title: "App Design",
      description: "Welcome to the home of Lorem Ipsum text. You can build whole bunch of it using our super simple to use Lorem Ipsum Generator. There are plenty of variations.",
      icon: "/icon (1).png",
      isActive: false
    }
  ];

  return (
    <section className="py-20 bg-[#F5F1EE]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-lg font-medium mb-3">Services</p>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-orange-500">Services</span>{" "}
            <span className="text-gray-800">provide</span>
          </h2>
          <div className="flex justify-center items-center space-x-3">
            <div className="w-12 h-1.5 bg-orange-500 rounded-full"></div>
            <div className="w-6 h-1.5 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isActive={service.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 