import React, { useEffect, useState } from 'react';
import PokeCard from './PokemonCard';
import pokemonData from '../data/PokemonData';
import LoadSpinner from './LoadSpinner/LoadSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Pokedex(props) {
  const [savedPokemons, setSavedPokemons] = useState([]);
  const [lastPokemon, setLastPokemon] = useState(1);
  const [manyPokemons, setManyPokemons] = useState(24);

  const cardConstructor = ({ id, name, sprite, types }) => {
    return {
      id,
      name,
      sprite,
      types,
    };
  };

  const getMultPokemons = () => {
    for (let i = lastPokemon; i <= manyPokemons; i += 1) {
      getPokemon(i);

      setLastPokemon((prev) => (prev += 1));
      setManyPokemons((prev) => (prev += 1));
    }
  };

  const getPokemon = async (id) => {
    const pokemonObj = await pokemonData(id);
    setSavedPokemons((prevSaved) => [
      ...prevSaved,
      cardConstructor(pokemonObj),
    ]);
  };

  useEffect(() => {
    getMultPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={savedPokemons.length}
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
      {savedPokemons
        .sort((a, b) => a.id - b.id)
        .map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))}
    </InfiniteScroll>
  );
}
