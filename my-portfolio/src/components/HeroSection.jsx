import React from 'react';
import { StarIcon, ArrowUpRightIcon, MicrophoneIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden ">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 rounded-full transform rotate-12"></div>
      </div>

      <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
        <div className="w-full h-full bg-orange-300 rounded-full"></div>
      </div>

      {/* Subtle chevron shapes behind text */}
      <div className="absolute top-40 left-20 w-16 h-16 opacity-10">
        <div className="w-full h-full bg-gray-400 transform rotate-45"></div>
      </div>
      <div className="absolute top-60 left-32 w-12 h-12 opacity-10">
        <div className="w-full h-full bg-gray-400 transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main centered layout */}
        <div className="relative flex flex-col items-center">
          {/* Main centered image - bigger */}
          <div className="relative mt-10 mb-10">
            {/* Decorative circles around the main image */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-80"></div>
            <div className="absolute top-1/2 -right-6 w-16 h-16 bg-orange-400 rounded-full opacity-70"></div>
            
            {/* Main hero image - complete without cropping */}
            <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              <img 
                src="/hero section image.png" 
                alt="Osama Rahman" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* HELLO text - close to left side of head */}
          <div className="absolute top-16 left-4 md:top-32 md:left-8 z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-gray-900 relative">
              <div className="relative">
                <img
                  src="/hero lines.png"
                  alt="Hero lines"
                  className="absolute -top-1 left-1 md:-top-2 md:left-2 w-4 h-4 md:w-8 md:h-8"
                />
              </div>
              HELLO
            </h1>
          </div>

          {/* Title badge - on left side after HELLO */}
          <div className="absolute top-40 left-4 md:top-80 md:left-54 z-20">
            <div className="inline-block bg-orange-500 text-white px-3 py-1 md:px-6 md:py-2 rounded-full font-semibold text-sm md:text-lg lg:text-2xl">
              UI/UX DESIGNER DEVE..
            </div>
          </div>

          {/* I'M text - close to right side of head */}
          <div className="absolute top-16 right-4 md:top-32 md:left-170 z-20">
            <p className="text-orange-500 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">I'M</p>
          </div>

          {/* OSAMA RAHMAN - after I'M */}
          <div className="absolute top-28 right-4 md:top-55 md:right-50 z-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 underline decoration-black decoration-2 underline-offset-4">
              OSAMA RAHMAN
            </h2>
          </div>

          {/* Bottom stats positioned around the image */}
          <div className="absolute bottom-8 right-4 md:bottom-25 md:right-55 z-20">
            <div className="flex flex-col items-end space-y-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3 h-3 md:w-4 md:h-4 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">10 Years</p>
              <p className="text-gray-600 text-xs sm:text-sm">Experince</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-4 md:bottom-25 md:left-55 z-20 bg-orange-300 rounded-sm p-1 md:p-2">
            <div className="flex flex-col items-center">
              <div className="px-1 md:px-2 pb-1 md:pb-2 rounded-full">
                <p className="text-gray-900 font-semibold text-xs">Real Customer</p>
              </div>
              <div className="flex">
                <img
                  src="/hero section images.png"
                  alt="Customer profiles"
                  className="w-20 h-4 md:w-40 md:h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Elements - Centered */}
        <div className="flex flex-col items-center justify-center space-y-4 mt-16">
          {/* Voice Button with circular text */}
          <div className="relative flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-20 bg-orange-300 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <MicrophoneIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-24 h-24 border-2 border-orange-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">any question from osama</p>
          </div>

          {/* Action Buttons in single container */}
          <div className="bg-orange-100 rounded-full p-2 border border-orange-400">
            <div className="flex">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-orange-600 transition-colors">
                <span>Portfolio</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </button>
              <button className="bg-orange-100 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-orange-200 transition-colors">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 