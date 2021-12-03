import React from 'react';
import PropTypes from 'prop-types';

import { capitalizeString } from '../services';

export default function PokemonTypes({ types }) {
  const renderTypes = (typesArr) =>
    typesArr.map(({ type: { name } }) => (
      <p className={`${name} py-1 px-5 mb-2 rounded-xl lg:mx-2`} key={name}>
        {capitalizeString(name)}
      </p>
    ));

  return <>{renderTypes(types)}</>;
}

PokemonTypes.protoTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
};
