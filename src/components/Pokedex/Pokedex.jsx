import React, { Component } from 'react';
import PokeCard from '../PokemonCard/PokemonCard';
import Button from '../Button/Button';
import pokemonData from '../../data/PokemonData';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedPokemons: [],
      loading: true,
      lastPokemon: 1,
      manyPokemons: 24,
    };

    this.cardConstructor = this.cardConstructor.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
    this.getMultPokemons = this.getMultPokemons.bind(this);
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

  render() {
    const { savedPokemons } = this.state;
    return (
      <InfiniteScroll
        dataLength={savedPokemons.length}
        next={this.getMultPokemons}
        hasMore={true}
        loader={<LoadSpinner />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="px-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:px-24 xl:w-4/5 xl:mx-auto 2xl:grid-cols-4"
      >
        {savedPokemons
          .sort((a, b) => a.id - b.id)
          .map((pokemon) => this.renderPokeCard(pokemon))}

        <div className="flex justify-center pb-8 sm:col-span-full lg:hidden">
          <Button
            className="py-2 px-4 text-lg bg-red-600 text-gray-100 font-bold rounded-md"
            btnContent="Carregar mais"
            callback={this.getMultPokemons}
          />
        </div>
      </InfiniteScroll>
    );
  }
}
