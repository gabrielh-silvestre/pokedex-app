import React from 'react';
import PropTypes from 'prop-types';

import { capitalizeString } from '../services';

export default function PokemonTypes({ types }) {
  const renderTypes = (typesArr) =>
    typesArr.map((typeName) => (
      <p className={`${typeName} py-1 px-5 mb-2 rounded-xl lg:mx-2`} key={typeName}>
        {capitalizeString(typeName)}
      </p>
    ));

  return <>{renderTypes(types)}</>;
}

PokemonTypes.protoTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
};
