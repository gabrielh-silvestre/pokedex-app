import React, { Component } from 'react'
import PokemonImage from '../PokemonImage/PokemonImage'
import PokemonName from '../PokemonName/PokemonName';
import fetchPokemon from '../../../API/fetchPokemon';

export default class PokePageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: this.props.match.params.pokemonName,
      sprite: undefined,
      name: undefined,
    }

    this.getSprite = this.getSprite.bind(this);
    this.getName = this.getName.bind(this);
  }

  getName({ name }) {
    this.setState({ name: name });
  }

  getSprite({ sprites }) {
    this.setState({ sprite: sprites.front_default });
  }

  componentDidMount() {
    fetchPokemon(this.state.pokemon, (data) => {
      this.getSprite(data);
      this.getName(data);
    });
  }

  render() {
    return (
      <div>
        <PokemonImage sprite={this.state.sprite} name={this.state.name} />
        <PokemonName name={this.state.name} />
      </div>
    )
  }
}
