import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokemonName from '../PokemonName/PokemonName';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonTypes from '../PokemonTypes/PokemonTypes';

export default class PokeCard extends Component {
  render() {
    const { sprite, id, name, types } = this.props.pokemon;

    return (
      <section className="flex flex-col items-center shadow-sm w-4/5 w-full mx-auto my-8 rounded hover:shadow-xl duration-200">
        <Link to={`/pokemon/${id}`} className="w-full" >
          <div className="flex items-center justify-center bg-gray-200 w-full h-40 rounded-t p-8 2xl:h-auto">
            <PokemonImage sprite={sprite} name={name} />
          </div>
        </Link>

        <div className="flex flex-col p-4 w-full text-sm">
          <div className="text-gray-400 mb-2">
            <p>Nº {id}</p>
          </div>
          <div className="text-gray-600 mb-2 text-xl">
            <h4>
              <PokemonName name={name} />
            </h4>
          </div>
          <div className="flex justify-around my-2 text-xs">
            <PokemonTypes types={types} />
          </div>
        </div>
      </section>
    );
  }
}

PokeCard.propTypes = {
  pokemonObj: PropTypes.object,
};
