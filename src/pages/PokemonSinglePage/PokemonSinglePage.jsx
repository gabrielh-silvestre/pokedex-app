import React from 'react';
import Header from '../../components/Header/Header';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';

export default function PokemonSinglePage({ match: { params } }) {
  return (
    <div>
      <Header />
      <PokemonDetails pokemon={params.pokemonName} />
    </div>
  );
}
