import React, { Component } from 'react';
import PokeCard from '../PokemonCard/PokemonCard';
import Button from '../Button/Button';

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
    this.increasePokemons = this.increasePokemons.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderPokemons = this.renderPokemons.bind(this);
    this.setAllPokemons = this.setAllPokemons.bind(this);
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

  setAllPokemons() {
    Promise.all(this.getMultPokes()).then((data) =>
      this.setState({ allPokemons: data })
    );
  }

  renderPokemons() {
    return this.state.allPokemons.map((item) => {
      return (
        <PokeCard
          key={item.name}
          pokemonName={item.name}
          pokemonId={item.id}
          pokemonSprite={item.sprite}
          pokemonTypes={item.types}
        />
      );
    });
  }

  componentDidMount = () => {
    this.setAllPokemons();
  };

  componentDidUpdate = (_prevProps, prevState, _snapshot) => {
    if (this.state.manyPokes !== prevState.manyPokes) {
      this.setAllPokemons();
      this.renderPokemons();
    }
  };

  increasePokemons() {
    this.setState((prev, _props) => ({
      manyPokes: prev.manyPokes + 24,
    }));
  }

  handleClick() {
    this.increasePokemons();
  }

  render() {
    return (
      <div>
        {this.renderPokemons()}
        <Button btnContent="Carregar mais" callback={this.handleClick} />
      </div>
    );
  }
}
