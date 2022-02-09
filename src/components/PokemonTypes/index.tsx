import { Pokemon } from 'pokenode-ts';

import { capitalizeString } from '../../services';

type PokemonTypesProps = Pick<Pokemon, 'types'>;

export function PokemonTypes({ types }: PokemonTypesProps) {
  return (
    <>
      {types.map(({ type }, i) => (
        <p key={i} className={`${type.name} py-1 px-5 mb-2 rounded-xl lg:mx-2`}>
          {capitalizeString(type.name)}
        </p>
      ))}
    </>
  );
}
