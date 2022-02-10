import { Link } from 'react-router-dom';
import { Pokemon as PokemonCardProps } from 'pokenode-ts';

import { capitalizeString } from '../../services';

import { PokemonTypes } from '../PokemonTypes';

import {
  Container,
  ImageContainer,
  ContentContainer,
  ContentIdentifier,
  ContainerTitle,
  ContentTypes,
} from './styles';

export function PokemonCard({
  sprites: { front_default },
  id,
  name,
  types,
}: PokemonCardProps) {
  return (
    <Container>
      <Link to={`/pokemon/${id}`} className="w-full">
        <ImageContainer>
          <img
            className="w-8/12 sm:w-2/4"
            src={front_default as string}
            alt={name}
          />
        </ImageContainer>
      </Link>

      <ContentContainer>
        <ContentIdentifier>
          <p>Nº {id}</p>
        </ContentIdentifier>
        <ContainerTitle>
          <h4>{capitalizeString(name)}</h4>
        </ContainerTitle>
        <ContentTypes>
          <PokemonTypes types={types} />
        </ContentTypes>
      </ContentContainer>
    </Container>
  );
}
