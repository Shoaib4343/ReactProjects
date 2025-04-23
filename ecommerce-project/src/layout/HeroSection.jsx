import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="bg-[#eeeee2] h-[80vh] w-full flex flex-col md:flex-row justify-around items-center px-6 md:px-16 ">
      {/* Text Section */}
      <div className="flex flex-col justify-center gap-6 max-w-lg">
        <div className="font-semibold uppercase flex items-center text-sm tracking-widest text-gray-600">
          <div className="w-8 h-[2px] bg-red-500 mr-4"></div> New Trends
        </div>
        <h1 className="text-5xl md:text-7xl leading-tight font-light text-gray-900">
          AUTUMN SALE STYLISH <br />
          <span className="font-semibold">WOMEN</span>
        </h1>
        <Link
          to="/category"
          className="self-start uppercase border-b-2 border-gray-800 font-semibold text-sm tracking-wide hover:text-gray-700 transition"
        >
          Discover More
        </Link>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src="images/image.jpg"
          alt="Autumn Sale"
          className="w-full h-full object-contain "
        />
      </div>
    </section>
  )
}

export default HeroSection
