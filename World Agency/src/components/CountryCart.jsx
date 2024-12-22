import React from 'react';

const CountryCart = ({ item }) => {
  return (
    <div className=" w-full bg-gray-800 bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg p-6">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold text-white mb-2">{item.country}</h2>
        <p className="text-gray-300 text-sm mb-2">
          <strong>Capital:</strong> {item.capital}
        </p>
        <p className="text-gray-300 text-sm mb-2">
          <strong>Population:</strong> {item.population} Million
        </p>
        <p className="text-gray-300 text-sm">
          <strong>Interesting Fact:</strong> {item.interesting_fact}
        </p>
      </div>
    </div>
  );
};

export default CountryCart;
