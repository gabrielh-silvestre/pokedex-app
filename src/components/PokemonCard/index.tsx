import { Link } from 'react-router-dom';
import { Pokemon } from 'pokenode-ts';

import { capitalizeString } from '../../services';

import { PokemonTypes } from '../PokemonTypes';
import { FavoriteButton } from '../Buttons/FavoriteButton';

import {
  Container,
  ImageContainer,
  ContentContainer,
  ContentIdentifier,
  ContainerTitle,
  ContentTypes,
} from './styles';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const {
    sprites: { other },
    id,
    name,
    types,
  } = pokemon;

  return (
    <Container>
      <FavoriteButton pokemon={pokemon} className="absolute top-0 right-0" />
      <Link to={`/pokemon/${id}`} className="w-full">
        <ImageContainer>
          <img
            className="w-8/12 sm:w-2/4"
            src={other['official-artwork'].front_default as string}
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
