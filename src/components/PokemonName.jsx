import React from 'react';
import PropTypes from 'prop-types';

export default function PokemonName({ name }) {
  return <>{name}</>;
}

PokemonName.protoTypes = {
  name: PropTypes.string.isRequired,
};
