import React, { Component } from 'react'
import PokemonImage from '../PokemonImage/PokemonImage'

export default class PokePageContainer extends Component {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <PokemonImage pokemonName={params.pokemonName} />
      </div>
    )
  }
}
