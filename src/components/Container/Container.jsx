import React, { Component } from 'react';
import PokeCard from '../PokemonCard';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPokemons: [],
      manyPokes: 24,
    };

    this.cardConstructor = this.cardConstructor.bind(this);
    this.getPokemonById = this.getPokemonById.bind(this);
    this.getMultPokes = this.getMultPokes.bind(this);
  }

  cardConstructor({ id, name, sprites, types }) {
    return {
      id,
      name,
      sprite: sprites.front_default,
      types,
    };
  }

  async getPokemonById(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return this.cardConstructor(data);
  }

  getMultPokes() {
    const tempArr = [];

    for (let i = 1; i <= this.state.manyPokes; i += 1) {
      tempArr.push(this.getPokemonById(i));
    }

    return tempArr;
  }

  componentDidMount = () => {
    Promise.all(this.getMultPokes()).then((data) =>
      this.setState({ allPokemons: data })
    );
  };

  render() {
    const { allPokemons } = this.state;
    return (
      <div>
        {allPokemons.map((item) => {
          return (
            <PokeCard
              key={item.name}
              pokemonName={item.name}
              pokemonId={item.id}
              pokemonSprite={item.sprite}
              pokemonTypes={item.types}
            />
          );
        })}
      </div>
    );
  }
}
