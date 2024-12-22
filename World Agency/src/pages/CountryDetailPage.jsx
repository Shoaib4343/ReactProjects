import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getSpecificCoutryApi } from "../api/countryApi";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const CountryDetailPage = () => {
  const [specificCountryData, setSpecificCountryData] = useState(null);
  const [isPending, startTransition] = useTransition();
  const { id } = useParams();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getSpecificCoutryApi(id);
        setSpecificCountryData(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    });
  }, [id]);

  if (isPending) return <h1>Loading...</h1>;

  if (!specificCountryData) return <h1>No Country Data Found</h1>;

  const {
    flags,
    name,
    capital,
    population,
    region,
    subregion,
    currencies,
    languages,
    area,
  } = specificCountryData;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 p-6 bg-gray-800 text-gray-100 min-h-screen">
      {/* Left Section: Flag */}
      <div className="flex-shrink-0">
        <img
          src={flags.svg}
          alt={flags.alt || `${name.common} flag`}
          className="w-64 h-auto rounded shadow-md"
        />
      </div>

      {/* Right Section: Country Details */}
      <div className="flex flex-col bg-gray-600 p-6 rounded-lg shadow-lg w-full lg:w-2/3">
        <h1 className="text-3xl font-bold text-gray-200 mb-4">{name.common}</h1>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Official Name:</strong> {name.official}
        </p>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Capital:</strong> {capital?.[0] || "N/A"}
        </p>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Region:</strong> {region}, {subregion}
        </p>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Area:</strong> {area.toLocaleString()} km²
        </p>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Currency:</strong>{" "}
          {Object.values(currencies || {})
            .map((currency) => `${currency.name} (${currency.symbol})`)
            .join(", ")}
        </p>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Languages:</strong>{" "}
          {Object.values(languages || {}).join(", ")}
        </p>
        <NavLink to="/countries">
          <button className="text-white py-2 px-6 rounded-xl text-lg flex items-center justify-center border-2 border-white hover:bg-white hover:text-gray-900 transition duration-300">
            Go Back
            <MdOutlineArrowRightAlt className="ml-2" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CountryDetailPage;
