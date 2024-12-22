import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";


const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-12 items-center">
      {/* Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Explore the World, Create Unforgettable Memories with Us.
        </h1>
        <p className="text-lg text-white mb-6">
          Whether you're looking for a relaxing getaway or an adventure of a
          lifetime, we offer tailored experiences that will make every moment
          unforgettable.
        </p>
       <NavLink to='/countries'>
       <button className="text-white py-3 px-5 rounded-xl text-lg flex items-center justify-center border-2 border-white hover:bg-white hover:text-gray-900 transition duration-300">
          Start Exploring
          <MdOutlineArrowRightAlt className="ml-2" />
        </button>
       </NavLink>
      </div>

      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src="/images/world (2).jpg"
          alt="World Travel"
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      </div>
    </div>
  );
};

export default HeroSection;
