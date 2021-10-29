import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PokemonTypes extends Component {
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
    const { types } = this.props;

    return <>{this.renderTypes(types)}</>;
  }
}

PokemonTypes.protoTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
}
