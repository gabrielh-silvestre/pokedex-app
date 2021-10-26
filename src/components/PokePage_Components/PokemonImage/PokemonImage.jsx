import React, { Component } from 'react'

export default class PokemonImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sprite: undefined,
    }

    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.getSprite = this.getSprite.bind(this);
  }

  getSprite({ sprites }) {
    this.setState({ sprite: sprites.front_default });
  }

  async fetchPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`);
    const data = await res.json();
    this.getSprite(data);
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    return (
      <div>
        <img src={this.state.sprite} alt={this.props.pokemonName} />
      </div>
    )
  }
}
