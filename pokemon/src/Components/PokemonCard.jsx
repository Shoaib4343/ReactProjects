import React from "react";

const PokemonCard = ({ currentPokemon }) => {
  return (
    <li className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 p-4 flex flex-col items-center">
      {/* Image */}
      <img
        src={currentPokemon.sprites.other.dream_world.front_default}
        alt={currentPokemon.name}
        className="w-32 h-32 object-contain mb-4 rounded-lg"
      />

      {/* Pokémon Name */}
      <h3 className="text-xl font-semibold text-center capitalize text-gray-700">
        {currentPokemon.name}
      </h3>

      {/* Pokémon Details */}
      <div className="mt-3 text-sm text-gray-600">
        <p>Height: {currentPokemon.height} dm</p>
        <p>Weight: {currentPokemon.weight} hg</p>
        <p className="capitalize">
          Types: {currentPokemon.types.map((type) => type.type.name).join(", ")}
        </p>
      </div>
    </li>
  );
};

export default PokemonCard;
