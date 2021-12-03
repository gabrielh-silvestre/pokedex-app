import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeString } from '../services';

export default function PokemonName({ name }) {
  return <>{capitalizeString(name)}</>;
}

PokemonName.protoTypes = {
  name: PropTypes.string.isRequired,
};
