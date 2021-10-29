import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokemonName from '../PokemonName/PokemonName';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonTypes from '../PokemonTypes/PokemonTypes';
import './pokeCard.css';

export default class PokeCard extends Component {
  render() {
    const { sprite, id, name, types } = this.props.pokemon;

    return (
      <section className="pokemon-container-card">
        <Link to={`/pokemon/${id}`}>
          <div className="pokemon-container-img">
            <PokemonImage sprite={sprite} name={name} />
          </div>

          <div className="pokemon-container-info">
            <div className="pokemon-id">
              <p>Nº {id}</p>
            </div>
            <div className="pokemon-name">
              <h4>
                <PokemonName name={name} />
              </h4>
            </div>
            <div className="pokemon-types-container">
              <PokemonTypes types={types} />
            </div>
          </div>
        </Link>
      </section>
    );
  }
}

PokeCard.propTypes = {
  pokemonObj: PropTypes.object,
};
