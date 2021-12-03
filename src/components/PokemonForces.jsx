import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDmgRelations } from '../services';

import PokemonTypes from './PokemonTypes';

export default function PokemonForces({ types }) {
  const [loading, setLoading] = useState(true);
  const [advantageNames, setAdvantageNames] = useState([]);
  const [disadvantageNames, setDisadvantageNames] = useState([]);

  useEffect(() => {
    types.forEach((typeName) => {
      getAllRelations(typeName);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllRelations = async (typeName) => {
    setLoading(true);

    const { advantage, disadvantage } = await getDmgRelations(typeName);
    setAdvantageNames(getTypesName([...advantage]));
    setDisadvantageNames(getTypesName([...disadvantage]));

    setLoading(false);
  };

  const getTypesName = (typesArr) => typesArr.map(({ name }) => name);

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
          <PokemonTypes types={advantageNames} />
        </div>
      </section>

      <section className="mb-4 lg:w-full">
        <h3 className="text-xl text-center mb-2">Weak Against</h3>
        <div className="flex flex-wrap justify-around">
          <PokemonTypes types={disadvantageNames} />
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
