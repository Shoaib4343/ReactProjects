import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ImageCountryCart = ({ item }) => {
  return (
    <li className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 text-white">
      <img
        className="rounded-md w-full h-40 object-cover mb-4"
        src={item.flags.svg}
        alt={`Flag of ${item.name.common}`}
      />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">{item.name.common}</h2>
        <p className="text-sm">
          <span className="font-bold">Population:</span>
          {item.population.toLocaleString()}
        </p>
        <p className="text-sm">
          <span className="font-bold">Region:</span> {item.region}
        </p>
        <p className="text-sm">
          <span className="font-bold">Capital:</span> {item.capital || "N/A"}
        </p>
      </div>
      <NavLink to={`/countries/name/${item.name.common}`}>
        <button className="text-gray-800 bg-white px-4 py-2 rounded-lg mt-4 flex items-center justify-center hover:bg-gray-700 hover:text-white transition duration-300 w-full">
          Read More
          <MdOutlineArrowRightAlt className="ml-2" />
        </button>
      </NavLink>
    </li>
  );
};

export default ImageCountryCart;
