import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({title,subTitle,link,image,color}) => {
    return (
        <section style={{backgroundColor:color, mixBlendMode:'multiply'}} className={` h-[80vh] w-full flex flex-col md:flex-row justify-around items-center px-6 md:px-16 `}>
            {/* Text Section */}
            <div className="flex flex-col justify-center gap-6 max-w-lg ">
                <div className="font-semibold uppercase flex items-center text-sm tracking-widest text-gray-600">
                    <div className="w-8 h-[2px] bg-red-500 mr-4"></div> New Trends
                </div>
                <h1 className="text-5xl md:text-7xl leading-tight font-light text-gray-900">
                    {title} <br />
                    <span className="font-semibold">{subTitle}</span>
                </h1>
                <Link
                    to={link}
                    className="self-start uppercase border-b-2 border-gray-800 font-semibold text-sm tracking-wide hover:text-gray-700 transition"
                >
                    Discover More
                </Link>
            </div>

            {/* Image Section */}
            <div className="hidden md:block w-1/2 h-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain "
                />
            </div>
        </section>
    )
}

export default Banner