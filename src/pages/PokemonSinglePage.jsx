import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../actions';
import Header from '../components/Header';
import LoadSpinner from '../components/LoadSpinner/LoadSpinner';
import PokemonDetails from '../components/PokemonDetails';

function PokemonSinglePage({
  match: { params },
  pokemonInfo: { pokemon, isLoading },
  getPokemon,
}) {

  useEffect(() => {
    getPokemon(params.pokemonName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <PokemonDetails pokemon={pokemon} loading={isLoading} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemonInfo: state.singlePokemon,
});

const mapDispatchToProps = (dispatch) => ({
  getPokemon: (pokemonId) => dispatch(getPokemon(pokemonId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSinglePage);
