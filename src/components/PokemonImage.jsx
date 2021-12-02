import React from 'react';
import PropTypes from 'prop-types';

export default function PokemonImage({ sprite, name }) {
  return <img className="w-8/12 sm:w-2/4" src={sprite} alt={name} />;
}

PokemonImage.protoTypes = {
  sprite: PropTypes.string,
  name: PropTypes.string.isRequired,
};
