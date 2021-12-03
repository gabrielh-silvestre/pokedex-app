import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PokeCard from './PokemonCard';
import LoadSpinner from './LoadSpinner/LoadSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { addPokemon } from '../actions';

function Pokedex({
  addPokemon,
  allPokemons: { pokemons, lastPokemon, manyPokemons },
}) {

  const getMultPokemons = () => {
    for (let i = lastPokemon; i <= manyPokemons; i += 1) {
      addPokemon(i);
    }
  };

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

const mapStateToProps = (state) => ({
  allPokemons: state.allPokemons,
});

const mapDispatchToProps = (dispatch) => ({
  addPokemon: (pokemonId) => dispatch(addPokemon(pokemonId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
