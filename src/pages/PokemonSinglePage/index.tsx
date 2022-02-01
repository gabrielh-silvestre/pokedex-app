import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon, PokemonClient } from 'pokenode-ts';

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import PokemonDetails from '../../components/PokemonDetails';

type SinglePokemonParams = {
  pokemonId: string;
};

export function PokemonSinglePage() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const { pokemonId } = useParams<SinglePokemonParams>();

  const getPokemon = useCallback(async () => {
    const fetchPokemon = new PokemonClient();
    setLoading(true);

    const newPokemon = await fetchPokemon.getPokemonById(
      Number.parseInt(pokemonId, 10)
    );
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
