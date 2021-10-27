import React, { Component } from 'react';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import PokemonPhysical from '../PokemonPhysical/PokemonPhysical';
import Header from '../../Header/Header';
import { fetchPokemon, fetchType } from '../../../API/fetchAPI';
import './pokePageContainer.css';
import PokemonForces from '../PokemonForces/PokemonForces';

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
      types: [],
      force: [],
      weakness: [],
      hp: undefined,
      attack: undefined,
      specialAttack: undefined,
      defense: undefined,
      specialDefense: undefined,
      speed: undefined,
    };

    this.getPokemonInfo = this.getPokemonInfo.bind(this);
    this.getForces = this.getForces.bind(this);
    this.getWeakness = this.getWeakness.bind(this);
    this.buildState = this.buildState.bind(this);
  }

  getPokemonInfo({ name, sprites, height, weight, abilities, types }) {
    this.setState({
      name: name.replace(/^\w/, (char) => char.toUpperCase()),
      sprite: sprites.front_default,
      height,
      weight,
      ability: abilities[0].ability.name,
      types: types.map(({ type }) => type.name),
    });
  }

  getForces({ damage_relations }) {
    const force = damage_relations.double_damage_to;

    this.setState({ force: force.map(({ name }) => name) });
  }

  getWeakness({ damage_relations }) {
    const weakness = damage_relations.double_damage_from;

    this.setState({ weakness: weakness.map(({ name }) => name) });
  }

  buildState(data) {
    this.getPokemonInfo(data);

    const { types } = this.state;

    types.forEach((type) => {
      fetchType(type, (data) => {
        this.getForces(data);
        this.getWeakness(data);
      });
    });
  }

  componentDidMount() {
    const { pokemon } = this.state;
    fetchPokemon(pokemon, this.buildState);
  }

  render() {
    const { name, sprite, height, weight, ability, types, force, weakness } =
      this.state;

    return (
      <article>
        <Header />
        <div className="pokemon-page-container">
          <section className="pokemon-page-title">
            <PokemonName name={name} />
          </section>

          <section className="pokemon-page-sprite">
            <PokemonImage sprite={sprite} name={name} />
          </section>

          <div className="pokemon-page-physics">
            <PokemonPhysical
              height={height}
              weight={weight}
              ability={ability}
            />
          </div>

          <div>
            <PokemonForces types={types} force={force} weakness={weakness} />
          </div>
        </div>
      </article>
    );
  }
}
