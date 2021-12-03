import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PokemonTypes from './PokemonTypes';
import { connect } from 'react-redux';
import { changeRelation, getTypeRelations } from '../actions';

function PokemonForces({
  types,
  typesRelation: { advantage, disadvantage },
  changeRelation,
  getTypeRelations,
}) {
  const [advantageNames, setAdvantageNames] = useState([]);
  const [disadvantageName, setDisadvantageName] = useState([]);

  useEffect(() => {
    types.forEach((typeName) => {
      getTypeRelations(typeName);
    });

    return () => {
      changeRelation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTypesName = (typesArr) => typesArr.flatMap(({ name }) => name);

  const removeNeutral = () => {
    const ad = getTypesName(advantage);
    const disad = getTypesName(disadvantage);
    const neutrals = ad.filter(
      (type) => ad.includes(type) && disad.includes(type)
    );

    return neutrals;
  };

  useEffect(() => {
    const neutrals = removeNeutral();
    const advantageSet = new Set(getTypesName(advantage));
    const disadvantageSet = new Set(getTypesName(disadvantage));

    neutrals.forEach((n) => {
      advantageSet.delete(n);
      disadvantageSet.delete(n);
    });

    setAdvantageNames([...advantageSet]);
    setDisadvantageName([...disadvantageSet]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [advantage, disadvantage]);

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
          <PokemonTypes types={disadvantageName} />
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

const mapStateToProps = (state) => ({
  typesRelation: state.typesRelation,
});

const mapDispatchToProps = (dispatch) => ({
  changeRelation: () => dispatch(changeRelation()),
  getTypeRelations: (typeName, advantage) =>
    dispatch(getTypeRelations(typeName, advantage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForces);
