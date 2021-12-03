import React, { useState, useEffect } from 'react';

import PokeCard from './PokemonCard';
import LoadSpinner from './LoadSpinner/LoadSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchPokemon } from '../services';

export default function Pokedex() {
  const [lastPokemon, setLastPokemon] = useState(1);
  const [manyPokemons, setManyPokemons] = useState(24);
  const [pokemons, setPokemons] = useState([]);

  const getMultPokemons = () => {
    for (let i = lastPokemon; i <= manyPokemons; i += 1) {
      addPokemon(i);
    }
    setLastPokemon((prev) => prev += 24);
    setManyPokemons((prev) => prev += 24);
  };

  const addPokemon = async (pokemonId) => {
    const newPokemon = await fetchPokemon(pokemonId);
    setPokemons((prev) => [...prev, newPokemon]);
  }

  useEffect(() => {
    getMultPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={getMultPokemons}
      scrollThreshold={0.9}
      hasMore={true}
      loader={<LoadSpinner />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className="px-4 z-0 hidden-scroll sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:px-24 xl:w-4/5 xl:mx-auto 2xl:grid-cols-4"
    >
      {pokemons
        .sort((a, b) => a.id - b.id)
        .map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))}
    </InfiniteScroll>
  );
}
