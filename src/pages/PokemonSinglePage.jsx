import React, { useEffect, useState } from 'react';

import { fetchPokemon } from '../services';

import Header from '../components/Header';
import LoadSpinner from '../components/LoadSpinner/LoadSpinner';
import PokemonDetails from '../components/PokemonDetails';

export default function PokemonSinglePage({ match: { params } }) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemon = async () => {
    setLoading(true);

    const newPokemon = await fetchPokemon(params.pokemonName);
    setPokemon(newPokemon);

    setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading ? (
        <LoadSpinner />
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </div>
  );
}
