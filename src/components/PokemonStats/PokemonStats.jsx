import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PokemonStats extends Component {
  render() {
    const { attack, spAttack, defense, spDefense, speed } = this.props;

    return (
      <section className="poke-stats-section">
        <h2>Base Stats</h2>
        <div className="poke-stats-container">
          <div>
            <h3>Attack</h3>
            <p>{attack}</p>
          </div>
          <div>
            <h3>Defense</h3>
            <p>{defense}</p>
          </div>
          <div>
            <h3>Special-Attack</h3>
            <p>{spAttack}</p>
          </div>
          <div>
            <h3>Special-Defense</h3>
            <p>{spDefense}</p>
          </div>

          <div>
            <h3>Speed</h3>
            <p>{speed}</p>
          </div>
        </div>
      </section>
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
