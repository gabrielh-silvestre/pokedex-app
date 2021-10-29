import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class PokemonName extends Component {
  render() {
    const { name } = this.props;

    return (
      <>
        {name}
      </>
    )
  }
}

PokemonName.protoTypes = {
  name: PropTypes.string.isRequired,
}
