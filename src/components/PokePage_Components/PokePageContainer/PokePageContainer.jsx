import React, { Component } from 'react';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import PokemonPhysical from '../PokemonPhysical/PokemonPhysical';
import Header from '../../Header/Header';
import fetchPokemon from '../../../API/fetchPokemon';
import './pokePageContainer.css';

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
      name: name.replace(/^\w/, (char) => char.toUpperCase()),
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
      <article>
        <Header />
        <div className="pokemon-page-container">
          <section className="pokemon-page-title">
            <PokemonName name={this.state.name} />
          </section>

          <section className="pokemon-page-sprite">
            <PokemonImage sprite={this.state.sprite} name={this.state.name} />
          </section>

          <div className="pokemon-page-physics">
            <PokemonPhysical
              height={this.state.height}
              weight={this.state.weight}
              ability={this.state.ability}
            />
          </div>
        </div>
      </article>
    );
  }
}
