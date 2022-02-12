import { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { PokemonCard } from '../PokemonCard';
import { SubHeader } from '../Header/SubHeader';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

export function Pokedex() {
  const [lastPokemon, setLastPokemon] = useState(1);
  const [manyPokemons, setManyPokemons] = useState(24);
  const [pokemons, setPokemons] = useState<(number | string)[]>([]);

  const getMultPokemons = useCallback(() => {
    for (let i = lastPokemon; i <= manyPokemons; i += 1) {
      setPokemons((prevPokemons) => [...prevPokemons, i])
    }
    setLastPokemon((prev) => (prev += 24));
    setManyPokemons((prev) => (prev += 24));
  }, [lastPokemon, manyPokemons]);

  useEffect(() => {
    getMultPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SubHeader />
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
        className="container z-0 hidden-scroll sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {pokemons.length > 0 &&
          pokemons
            .map((pokemonId) => (
              <PokemonCard key={pokemonId} pokemonId={pokemonId} />
            ))}
      </InfiniteScroll>
    </>
  );
}
