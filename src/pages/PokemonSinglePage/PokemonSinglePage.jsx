import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PokemonImage from '../../components/PokemonImage/PokemonImage';
import PokemonName from '../../components/PokemonName/PokemonName';
import PokemonPhysical from '../../components/PokemonPhysical/PokemonPhysical';
import PokemonForces from '../../components/PokemonForces/PokemonForces';
import PokemonStats from '../../components/PokemonStats/PokemonStats';
import { fetchType } from '../../API/fetchAPI';
import pokemonData from '../../data/PokemonData';
import './pokemonSinglePage.css';

export default class PokemonSinglePage extends Component {
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
      'special-attack': undefined,
      defense: undefined,
      'special-defense': undefined,
      speed: undefined,
    };

    this.getForces = this.getForces.bind(this);
    this.getWeakness = this.getWeakness.bind(this);
    this.buildState = this.buildState.bind(this);
  }

  getForces({ damage_relations }) {
    const force = damage_relations.double_damage_to;

    this.setState({ force: force.map(({ name }) => name) });
  }

  getWeakness({ damage_relations }) {
    const weakness = damage_relations.double_damage_from;

    this.setState({ weakness: weakness.map(({ name }) => name) });
  }

  async buildState(name) {
    const infos = await pokemonData(name);

    this.setState({
      sprite: infos.sprite,
      name: infos.name,
      height: infos.charact.height,
      weight: infos.charact.weight,
      ability: infos.charact.ability,
      types: infos.types,
      hp: infos.stats.hp,
      attack: infos.stats.attack,
      'special-attack': infos.stats['special-attack'],
      defense: infos.stats.defense,
      'special-defense': infos.stats['special-defense'],
      speed: infos.stats.speed,
    });

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
    this.buildState(pokemon);
  }

  render() {
    const {
      name,
      sprite,
      height,
      weight,
      ability,
      types,
      force,
      weakness,
      attack,
      defense,
      speed,
    } = this.state;

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

          <div>
            <PokemonStats
              attack={attack}
              spAttack={this.state['special-attack']}
              defense={defense}
              spDefense={this.state['special-defense']}
              speed={speed}
            />
          </div>
        </div>
      </article>
    );
  }
}
