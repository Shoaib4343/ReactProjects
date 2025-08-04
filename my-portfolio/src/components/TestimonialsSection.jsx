import React, { useState } from "react";

const testimonials = [
  {
    name: "John Allendane",
    title: "Creative manager",
    quote:
      "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn’t really say that it was satisfying",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    borderColor: "border-yellow-400",
  },
  {
    name: "Anamika Sandula",
    title: "Product Manager",
    quote:
      "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn’t really say that it was satisfying",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    borderColor: "border-teal-500",
  },
  {
    name: "Souther Hakcaw",
    title: "Marketing Manager",
    quote:
      "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn’t really say that it was satisfying",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    borderColor: "border-pink-500",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#F5F1EE] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">People Talk </span>
            <span className="text-orange-500">About Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            I got a job that was in accordance with the salary and field of work. The process
            of submitting an application was quite cosy.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[400px] flex justify-center items-center">
          {testimonials.map((item, index) => {
            const isActive = index === current;
            const isPrev = index === (current - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (current + 1) % testimonials.length;

            const baseClasses = "absolute transition-all duration-500 ease-in-out transform rounded-xl bg-white px-6 md:px-8 py-10 text-center flex flex-col items-center shadow-md";

            return (
              <div
                key={index}
                className={`${baseClasses} ${
                  isActive
                    ? "z-20 w-[480px] h-[360px] scale-100 opacity-100 shadow-xl"
                    : "z-10 w-[360px] h-[320px] scale-90 opacity-50"
                } ${
                  isPrev ? "-translate-x-[60%]" : isNext ? "translate-x-[60%]" : isActive ? "" : "hidden"
                }`}
              >
                {/* Avatar */}
                <div className={`w-20 h-20 rounded-full border-4 ${item.borderColor} overflow-hidden -mt-16 shadow-lg`}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm md:text-base mt-6 mb-4">{item.quote}</p>

                {/* Name + Title */}
                <div className="border-t border-gray-200 w-full pt-4">
                  <h4 className="text-lg font-bold text-teal-700">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots + Buttons */}
        <div className="mt-10 flex flex-col items-center space-y-4">
          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === idx ? "bg-teal-600 scale-125 shadow" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-teal-600 text-white rounded-full shadow-md flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
