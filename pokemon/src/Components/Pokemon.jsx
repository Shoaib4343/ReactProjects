import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState("");
    const api = "https://pokeapi.co/api/v2/pokemon";

    const fetchPokemonData = async () => {
        try {
            const res = await fetch(api);
            const data = await res.json();
            
            const detailPokemon = data.results.map(async (currentPokemon) => {
                const res = await fetch(currentPokemon.url);
                const data = await res.json();
                return data;
            });
            const detailRes = await Promise.all(detailPokemon);
            setPokemon(detailRes);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemonData();
    }, []);

    const searchPokemon = pokemon.filter((currentPokemon) =>
        currentPokemon.name.toLowerCase().includes(formData.toLowerCase())
    );

    if (loading) {
        return <h1 className="text-center text-xl font-bold">Loading......</h1>;
    }
    if (error) {
        return <h1 className="text-center text-xl font-bold text-red-500">{error.message}</h1>;
    }

    return (
        <div className="container mx-auto p-6">
            {/* Title */}
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Pokémon Cards</h1>

            {/* Search Input */}
            <div className="mb-6 flex justify-center">
                <input
                    className="bg-gray-100 text-black rounded-lg px-4 py-2 w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setFormData(e.target.value)}
                    value={formData}
                    type="text"
                    placeholder="Search Pokémon"
                />
            </div>

            {/* Pokémon Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {searchPokemon.map((currentPokemon) => (
                  <PokemonCard key={currentPokemon.id} currentPokemon={currentPokemon} />
                ))}
            </ul>
        </div>
    );
};

export default Pokemon;
