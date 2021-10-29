import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PokemonStats extends Component {
  render() {
    const { attack, spAttack, defense, spDefense, speed } = this.props;

    return (
      <>
        <h2 className="text-2xl text-gray-100 mb-4">Base Stats</h2>
        <div className="poke-stats-container">
          <div className="mb-2">
            <h3 className="text-xl text-gray-100">Attack</h3>
            <p className="text-lg">{attack}</p>
          </div>
          <div className="mb-2">
            <h3 className="text-xl text-gray-100">Defense</h3>
            <p className="text-lg">{defense}</p>
          </div>
          <div className="mb-2">
            <h3 className="text-xl text-gray-100">Special-Attack</h3>
            <p className="text-lg">{spAttack}</p>
          </div>
          <div className="mb-2">
            <h3 className="text-xl text-gray-100">Special-Defense</h3>
            <p className="text-lg">{spDefense}</p>
          </div>

          <div className="mb-2">
            <h3 className="text-xl text-gray-100">Speed</h3>
            <p className="text-lg">{speed}</p>
          </div>
        </div>
      </>
    );
  }
}

PokemonStats.protoTypes = {
  attack: PropTypes.string.isRequired,
  spAttack: PropTypes.string.isRequired,
  defense: PropTypes.string.isRequired,
  spDefense: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
}
