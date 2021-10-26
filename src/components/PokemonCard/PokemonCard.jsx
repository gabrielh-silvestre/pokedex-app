import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pokeCard.css';

export default class PokeCard extends Component {
  constructor(props) {
    super(props);

    this.renderTypes = this.renderTypes.bind(this);
  }

  renderTypes(typesArr) {
    return typesArr.map(({ type }) => <span className={`pokemon-type ${type.name}`} key={type.name}>{type.name}</span>);
  }

  render() {
    const { pokemonSprite, pokemonId, pokemonName, pokemonTypes } = this.props;

    return (
      <div className="pokemon-container-card">
        <div className="pokemon-container-img">
          <img src={pokemonSprite} alt="pokemon" />
        </div>

        <div className="pokemon-container-info">
          <div className="pokemon-id">
            <p>{pokemonId}</p>
          </div>
          <div className="pokemon-name">
            <h4>{pokemonName}</h4>
          </div>
          <div className="pokemon-types-container">
            {this.renderTypes(pokemonTypes)}
          </div>
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
