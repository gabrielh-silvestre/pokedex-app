import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class PokemonImage extends Component {
  render() {
    const { sprite, name } = this.props;

    return (
      <>
        <img className="w-8/12" src={sprite} alt={name} />
      </>
    )
  }
}

PokemonImage.protoTypes = {
  sprite: PropTypes.string,
  name: PropTypes.string.isRequired,
}
