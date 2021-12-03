import React, { useEffect, useState } from 'react';

import { fetchPokemon } from '../services';

import LoadSpinner from '../components/LoadSpinner/LoadSpinner';
import PokemonDetails from '../components/PokemonDetails';

export default function PokemonSinglePage({ match: { params } }) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.pokemonName]);

  const getPokemon = async () => {
    setLoading(true);

    const newPokemon = await fetchPokemon(params.pokemonName);
    setPokemon(newPokemon);

    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <LoadSpinner />
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </div>
  );
}
