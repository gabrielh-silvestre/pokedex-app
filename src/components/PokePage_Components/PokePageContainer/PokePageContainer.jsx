import React, { Component } from 'react';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import PokemonPhysical from '../PokemonPhysical/PokemonPhysical';
import fetchPokemon from '../../../API/fetchPokemon';

export default class PokePageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: this.props.match.params.pokemonName,
      sprite: undefined,
      name: undefined,
      height: undefined,
      weight: undefined,
      ability: undefined,
    };

    this.getPokemonInfo = this.getPokemonInfo.bind(this);
  }

  getPokemonInfo({ name, sprites, height, weight, abilities }) {
    this.setState({
      name,
      sprite: sprites.front_default,
      height,
      weight,
      ability: abilities[0].ability.name,
    });
  }

  componentDidMount() {
    fetchPokemon(this.state.pokemon, this.getPokemonInfo);
  }

  render() {
    return (
      <div>
        <PokemonImage sprite={this.state.sprite} name={this.state.name} />
        <PokemonName name={this.state.name} />
        <PokemonPhysical
          height={this.state.height}
          weight={this.state.weight}
          ability={this.state.ability}
        />
      </div>
    );
  }
}
