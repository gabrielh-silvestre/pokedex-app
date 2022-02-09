import { Pokemon } from 'pokenode-ts';

import { capitalizeString } from '../../services';

import { TypeContainer } from './styles';

type PokemonTypesProps = Pick<Pokemon, 'types'>;

export function PokemonTypes({ types }: PokemonTypesProps) {
  return (
    <>
      {types.map(({ type }, i) => (
        <TypeContainer key={i} $type={type.name}>
          {capitalizeString(type.name)}
        </TypeContainer>
      ))}
    </>
  );
}
