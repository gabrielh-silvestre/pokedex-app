import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
  const history = useHistory();

  const getPokemon = useCallback(async () => {
    setLoading(true);

    try {
      const newPokemon = Number(pokemonId)
        ? await fetchPokemon.getPokemonById(Number(pokemonId))
        : await fetchPokemon.getPokemonByName(pokemonId.toLowerCase());

      setPokemon(newPokemon);
    } catch(err) {
      console.log(err);
      history.push('/pokemon/not-found');
    }

    setLoading(false);
  }, [history, pokemonId]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <div>
      {loading ? <LoadSpinner /> : <PokemonDetails pokemon={pokemon} />}
    </div>
  );
}
