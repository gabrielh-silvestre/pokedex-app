import { useCallback, useEffect, useState } from 'react';
import { PokemonClient, Pokemon, NamedAPIResource } from 'pokenode-ts';

import { capitalizeString } from '../../services';

import { PokemonTypes } from '../PokemonTypes';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

import { ForcesContainer, ForcesTitle, ContentContainer } from './styles';

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

  return loading ? (
    <LoadSpinner />
  ) : (
    <>
      <ForcesContainer>
        <ForcesTitle>Type</ForcesTitle>
        <ContentContainer>
          <PokemonTypes types={types} />
        </ContentContainer>
      </ForcesContainer>

      <ForcesContainer $middle>
        <ForcesTitle>Strong Against</ForcesTitle>
        <ContentContainer>
          {advantageNames.map(({ name }, i) => (
            <p key={i} className={`${name} py-1 px-5 mb-2 rounded-xl lg:mx-2`}>
              {capitalizeString(name)}
            </p>
          ))}
        </ContentContainer>
      </ForcesContainer>

      <ForcesContainer $last>
        <ForcesTitle>Weak Against</ForcesTitle>
        <ContentContainer>
          {disadvantageNames.map(({ name }, i) => (
            <p key={i} className={`${name} py-1 px-5 mb-2 rounded-xl lg:mx-2`}>
              {capitalizeString(name)}
            </p>
          ))}
        </ContentContainer>
      </ForcesContainer>
    </>
  );
}
