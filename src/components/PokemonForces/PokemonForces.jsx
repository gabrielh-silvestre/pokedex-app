import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonTypes from '../PokemonTypes/PokemonTypes';
import './pokemonForces.css';

export default class PokemonForces extends Component {
  constructor(props) {
    super(props);

    this.renderTypes = this.renderTypes.bind(this);
  }

  renderTypes(typesArr) {
    return typesArr.map((type) => (
      <p className={`pokemon-type ${type}`} key={type}>
        {type.replace(/^\w/, (char) => char.toUpperCase())}
      </p>
    ));
  }

  render() {
    const { types, force, weakness } = this.props;

    return (
      <article className="pokemon-force-container">
        <section className="pokemon-force-section">
          <h3>Type</h3>
          <div className="pokemon-types">
            <PokemonTypes types={types} />
          </div>
        </section>

        <section className="pokemon-force-section">
          <h3>Strong Against</h3>
          <div className="pokemon-types">
            <PokemonTypes types={force} />
          </div>
        </section>

        <section className="pokemon-force-section">
          <h3>Weak Against</h3>
          <div className="pokemon-types">
            <PokemonTypes types={weakness} />
          </div>
        </section>
      </article>
    );
  }
}

PokemonForces.protoTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  force: PropTypes.arrayOf(PropTypes.string),
  weakness: PropTypes.arrayOf(PropTypes.string),
};
