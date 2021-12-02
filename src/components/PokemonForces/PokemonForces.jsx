import React from 'react';
import PropTypes from 'prop-types';
import PokemonTypes from '../PokemonTypes/PokemonTypes';

export default function PokemonForces({ types, force, weakness }) {
  return (
    <>
      <section className="mb-8 lg:w-full">
        <h3 className="text-xl text-center mb-2">Type</h3>
        <div className="flex flex-wrap justify-around">
          <PokemonTypes types={types} />
        </div>
      </section>

      <section className="mb-8 lg:w-full lg:mx-4">
        <h3 className="text-xl text-center mb-2">Strong Against</h3>
        <div className="flex flex-wrap justify-around">
          <PokemonTypes types={force} />
        </div>
      </section>

      <section className="mb-4 lg:w-full">
        <h3 className="text-xl text-center mb-2">Weak Against</h3>
        <div className="flex flex-wrap justify-around">
          <PokemonTypes types={weakness} />
        </div>
      </section>
    </>
  );
}

PokemonForces.protoTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  force: PropTypes.arrayOf(PropTypes.string),
  weakness: PropTypes.arrayOf(PropTypes.string),
};
