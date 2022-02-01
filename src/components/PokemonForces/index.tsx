import { useCallback, useEffect, useState } from 'react';
import { PokemonClient, Pokemon, NamedAPIResource } from 'pokenode-ts';

import { capitalizeString } from '../../services';

import { PokemonTypes } from '../PokemonTypes';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

type PokemonForcesProps = Pick<Pokemon, 'types'>;

export function PokemonForces({ types }: PokemonForcesProps) {
  const [loading, setLoading] = useState(true);
  const [advantageNames, setAdvantageNames] = useState<NamedAPIResource[]>([]);
  const [disadvantageNames, setDisadvantageNames] = useState<
    NamedAPIResource[]
  >([]);

  const getAllRelations = useCallback(async (typeName: string) => {
    const typeApi = new PokemonClient();
    setLoading(true);

    const { damage_relations } = await typeApi.getTypeByName(typeName);
    const { double_damage_from, double_damage_to } = damage_relations;
    setAdvantageNames(double_damage_to);
    setDisadvantageNames(double_damage_from);

    setLoading(false);
  }, []);

  useEffect(() => {
    types.forEach(({ type }) => {
      getAllRelations(type.name);
    });
  }, [types, getAllRelations]);

  useEffect(() => {
    console.log({ advantageNames, disadvantageNames });
  }, [advantageNames, disadvantageNames]);

  return loading ? (
    <LoadSpinner />
  ) : (
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
          {advantageNames.map(({ name }, i) => (
            <p key={i} className={`${name} py-1 px-5 mb-2 rounded-xl lg:mx-2`}>
              {capitalizeString(name)}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-4 lg:w-full">
        <h3 className="text-xl text-center mb-2">Weak Against</h3>
        <div className="flex flex-wrap justify-around">
          {disadvantageNames.map(({ name }, i) => (
            <p key={i} className={`${name} py-1 px-5 mb-2 rounded-xl lg:mx-2`}>
              {capitalizeString(name)}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
