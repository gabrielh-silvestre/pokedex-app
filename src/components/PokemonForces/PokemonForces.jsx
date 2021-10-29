import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonTypes from '../PokemonTypes/PokemonTypes';

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
      <>
        <section className="mb-8">
          <h3 className="text-xl text-center mb-2">Type</h3>
          <div className="flex flex-wrap justify-around">
            <PokemonTypes types={types} />
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-center mb-2">Strong Against</h3>
          <div className="flex flex-wrap justify-around">
            <PokemonTypes types={force} />
          </div>
        </section>

        <section className="mb-4">
          <h3 className="text-xl text-center mb-2">Weak Against</h3>
          <div className="flex flex-wrap justify-around">
            <PokemonTypes types={weakness} />
          </div>
        </section>
      </>
    );
  }
}

PokemonForces.protoTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  force: PropTypes.arrayOf(PropTypes.string),
  weakness: PropTypes.arrayOf(PropTypes.string),
};
