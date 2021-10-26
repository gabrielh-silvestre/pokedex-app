import React, { Component } from 'react';
import './pokemonForces.css';

export default class PokemonForces extends Component {
  constructor(props) {
    super(props);

    this.renderTypes = this.renderTypes.bind(this);
  }

  renderTypes(typesArr) {
    return typesArr.map((type) => (
      <p className={`pokemon-type ${type}`} key={type}>
        {type}
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
            {this.renderTypes(types)}
          </div>
        </section>

        <section className="pokemon-force-section">
          <h3>Strong Against</h3>
          <div className="pokemon-types">
            {this.renderTypes(force)}
          </div>
        </section>

        <section className="pokemon-force-section">
          <h3>Weak Against</h3>
          <div className="pokemon-types">
            {this.renderTypes(weakness)}
          </div>
        </section>
      </article>
    );
  }
}
