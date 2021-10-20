import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pokeCard.css';

export default class PokeCard extends Component {
  constructor(props) {
    super(props);

    this.getPokemonInfo = () => {};
    this.getPokemoTypes = (pokemonTypes) =>
      pokemonTypes.map((type) => <p>{type}</p>);
  }

  render() {
    return (
      <div className="pokemon-container-card">
        <div className="pokemon-container-img">
          <img src={this.props.pokemonSprite} alt="pokemon" />
        </div>

        <div className="pokemon-container-info">
          <div className="pokemon-id">
            <p>{this.props.pokemonId}</p>
          </div>
          <div className="pokemon-name">
            <h4>{this.props.pokemonName}</h4>
          </div>
          <div className="pokemon-types">{}</div>
        </div>
      </div>
    );
  }
}

PokeCard.propTypes = {
  pokemonSprite: PropTypes.string.isRequired,
  pokemonId: PropTypes.number.isRequired,
  pokemonName: PropTypes.string.isRequired,
  pokemonTypes: PropTypes.array.isRequired,
};
