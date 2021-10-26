import React, { Component } from 'react';
// import { fetchType } from '../../../API/fetchAPI';

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
      <div>
        <div>
          <h3>Type</h3>
          <div>
            {this.renderTypes(types)}
          </div>
        </div>

        <div>
          <h3>Strong Against</h3>
          <div>
            {this.renderTypes(force)}
          </div>
        </div>

        <div>
          <h3>Weak Against</h3>
          <div>
            {this.renderTypes(weakness)}
          </div>
        </div>
      </div>
    );
  }
}
