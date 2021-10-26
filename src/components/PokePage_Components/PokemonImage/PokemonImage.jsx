import React, { Component } from 'react'
import fetchPokemon from '../../../API/fetchPokemon';

export default class PokemonImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sprite: undefined,
    }

    this.getSprite = this.getSprite.bind(this);
  }

  getSprite({ sprites }) {
    this.setState({ sprite: sprites.front_default });
  }

  componentDidMount() {
    fetchPokemon(this.props.pokemonName, this.getSprite);
  }

  render() {
    return (
      <div>
        <img src={this.state.sprite} alt={this.props.pokemonName} />
      </div>
    )
  }
}
