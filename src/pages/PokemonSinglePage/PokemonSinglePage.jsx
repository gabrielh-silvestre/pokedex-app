import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';
export default class PokemonSinglePage extends Component {
  render() {
    const { pokemonName } = this.props.match.params;

    return (
      <div>
        <Header />
        <PokemonDetails pokemon={pokemonName} />
      </div>
    );
  }
}
