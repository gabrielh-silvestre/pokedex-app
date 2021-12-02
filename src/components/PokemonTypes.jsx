import React from 'react';
import PropTypes from 'prop-types';

export default function PokemonTypes({ types }) {
  const renderTypes = (typesArr) =>
    typesArr.map((type) => (
      <p className={`${type} py-1 px-5 mb-2 rounded-xl lg:mx-2`} key={type}>
        {type.replace(/^\w/, (char) => char.toUpperCase())}
      </p>
    ));

  return <>{renderTypes(types)}</>;
}

PokemonTypes.protoTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
};
