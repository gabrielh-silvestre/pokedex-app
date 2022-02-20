import { Pokemon } from 'pokenode-ts';

import { capitalizeString } from '../../services';

import { PokemonPhysical } from '../PokemonPhysical';
import { PokemonForces } from '../PokemonForces';
import { PokemonStats } from '../PokemonStats';
import { Arrows } from '../Arrows';

import {
  Container,
  ContentContainer,
  ContainerTitle,
  ContainerImage,
  PhysicalSection,
  ForcesSection,
  StatsSection,
} from './styles';
import { FavoriteButton } from '../Buttons/FavoriteButton';

type PokemonDetailsProps = {
  pokemon: Pokemon;
};

export function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const {
    id,
    name,
    abilities,
    types,
    height,
    weight,
    stats,
    sprites: { other },
  } = pokemon;

  const getAbility = () => abilities[0].ability.name;

  return (
    <Container>
      <Arrows
        arrow="left"
        currId={ id }
        className="flex items-center row-start-3"
      />
      <ContentContainer>
        <ContainerTitle>
          <h1>{capitalizeString(name)}</h1>
        </ContainerTitle>

        <ContainerImage>
          <FavoriteButton
            pokemon={pokemon}
            className="w-10 h-10 absolute top-0 right-0 lg:w-16 lg:h-16"
          />
          <img
            className="w-8/12 sm:w-2/4"
            src={other['official-artwork'].front_default as string}
            alt={name}
          />
        </ContainerImage>

        <PhysicalSection>
          <PokemonPhysical
            height={height}
            weight={weight}
            ability={getAbility()}
          />
        </PhysicalSection>

        <ForcesSection>
          <PokemonForces types={types} />
        </ForcesSection>

        <StatsSection>
          <PokemonStats stats={stats} />
        </StatsSection>
      </ContentContainer>
      <Arrows
        arrow="right"
        currId={ id }
        className="flex items-center justify-end row-start-3"
      />
    </Container>
  );
}
