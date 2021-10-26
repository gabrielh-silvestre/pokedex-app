import React, { Component } from 'react';
import Button from '../Button/Button';
import './pokeCard.css';

export default class PokeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedPokemons: [],
      newPokemon: undefined,
      loading: true,
      lastPokemon: 1,
      manyPokemons: 24,
    };

    this.cardConstructor = this.cardConstructor.bind(this);
    this.renderTypes = this.renderTypes.bind(this);
    this.fetchPokemonId = this.fetchPokemonId.bind(this);
    this.getMultPokemons = this.getMultPokemons.bind(this);
  }

  cardConstructor({ id, name, sprites, types }) {
    return {
      id,
      name,
      sprite: sprites.front_default,
      types,
    };
  }

  savePokemon() {
    this.setState(({ savedPokemons, newPokemon }) => ({
      savedPokemons: [...savedPokemons, newPokemon],
    }));

    this.fetchPokemonId(1);
  }

  renderTypes(typesArr) {
    return typesArr.map(({ type }) => (
      <span className={`pokemon-type ${type.name}`} key={type.name}>
        {type.name}
      </span>
    ));
  }

  async fetchPokemonId(id) {
    this.setState({ loading: true }, async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      this.setState((prev) => ({
        loading: false,
        savedPokemons: [...prev.savedPokemons, this.cardConstructor(data)],
      }));
    });
  }

  getMultPokemons() {
    const { lastPokemon, manyPokemons } = this.state;
    for (let i = lastPokemon; i <= manyPokemons; i += 1) {
      this.fetchPokemonId(i);
      this.setState((prev) => ({
        lastPokemon: prev.lastPokemon + 1,
        manyPokemons: prev.manyPokemons + 1,
      }));
    }
  }

  componentDidMount() {
    this.getMultPokemons();
  }

  renderPokeCard({ id, name, sprite, types }) {
    return (
      <div className="pokemon-container-card" key={id}>
        <div className="pokemon-container-img">
          <img src={sprite} alt="pokemon" />
        </div>

        <div className="pokemon-container-info">
          <div className="pokemon-id">
            <p>{id}</p>
          </div>
          <div className="pokemon-name">
            <h4>{name}</h4>
          </div>
          <div className="pokemon-types-container">
            {this.renderTypes(types)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { savedPokemons } = this.state;
    return (
      <div>
        {savedPokemons
          .sort((a, b) => a.id - b.id)
          .map((pokemon) => this.renderPokeCard(pokemon))}
        <Button btnContent="Carregar mais" callback={this.getMultPokemons} />
      </div>
    );
  }
}
