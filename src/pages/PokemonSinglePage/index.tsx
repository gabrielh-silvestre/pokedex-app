import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon } from 'pokenode-ts';

import { fetchPokemon } from '../../services/api';

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import { PokemonDetails } from '../../components/PokemonDetails';

type SinglePokemonParams = {
  pokemonId: string;
};

export function PokemonSinglePage() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const { pokemonId } = useParams<SinglePokemonParams>();

  const getPokemon = useCallback(async () => {
    setLoading(true);

    const newPokemon = Number(pokemonId)
      ? await fetchPokemon.getPokemonById(Number(pokemonId))
      : await fetchPokemon.getPokemonByName(pokemonId.toLowerCase());

    setPokemon(newPokemon);

    setLoading(false);
  }, [pokemonId]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <div>
      {loading ? <LoadSpinner /> : <PokemonDetails pokemon={pokemon} />}
    </div>
  );
}
