import React, { Component } from 'react';
import PokeCard from '../PokemonCard/PokemonCard';
import Button from '../Button/Button';
import pokemonData from '../../data/PokemonData';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedPokemons: [],
      loading: true,
      lastPokemon: 1,
      manyPokemons: 24,
      userPos: 0,
      pageFinal: 2500,
      loadMore: false,
    };

    this.cardConstructor = this.cardConstructor.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
    this.getMultPokemons = this.getMultPokemons.bind(this);
    this.infinniteRoll = this.infinniteRoll.bind(this);
  }

  cardConstructor({ id, name, sprite, types }) {
    return {
      id,
      name,
      sprite,
      types,
    };
  }

  savePokemon() {
    this.setState(({ savedPokemons, newPokemon }) => ({
      savedPokemons: [...savedPokemons, newPokemon],
    }));
  }

  async getPokemon(id) {
    this.setState({ loading: true }, async () => {
      const pokemonObj = await pokemonData(id);
      this.setState((prev) => ({
        loading: false,
        savedPokemons: [
          ...prev.savedPokemons,
          this.cardConstructor(pokemonObj),
        ],
      }));
    });
  }

  async getMultPokemons() {
    const { lastPokemon, manyPokemons } = this.state;
    for (let i = lastPokemon; i <= manyPokemons; i += 1) {
      await this.getPokemon(i);
      this.setState((prev) => ({
        lastPokemon: prev.lastPokemon + 1,
        manyPokemons: prev.manyPokemons + 1,
      }));
    }
  }

  componentDidMount() {
    this.getMultPokemons();
  }

  renderPokeCard(pokemonObj) {
    return <PokeCard key={pokemonObj.name} pokemon={pokemonObj} />;
  }

  infinniteRoll({ pageY }) {
    const { pageFinal, userPos } = this.state;

    this.setState(() => ({ userPos: pageY }), () => {
      if (userPos >= pageFinal) {
        this.getMultPokemons();
        this.setState({ pageFinal: pageFinal + 2500 });
      }
    });
  }

  render() {
    const { savedPokemons } = this.state;
    return (
      <article
        className="px-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:px-24 xl:w-4/5 xl:mx-auto 2xl:grid-cols-4"
        onWheel={this.infinniteRoll}
      >
        {savedPokemons
          .sort((a, b) => a.id - b.id)
          .map((pokemon) => this.renderPokeCard(pokemon))}

        <div className="flex justify-center pb-8 sm:col-span-full lg:hidden">
          <Button btnContent="Carregar mais" callback={this.getMultPokemons} />
        </div>
      </article>
    );
  }
}
