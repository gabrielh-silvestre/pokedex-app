import { Pokemon } from 'pokenode-ts';
import { Link } from 'react-router-dom';
import { capitalizeString } from '../../../services';
import { FavoriteButton } from '../../Buttons/FavoriteButton';

import { PokemonTypes } from '../../PokemonTypes';

import {
  Container,
  InfoContainer,
  ContainerTitle,
  TypesContainer,
} from './styles';

interface FavoriteCardProps {
  pokemon: Pokemon;
}

export function FavoriteCard({ pokemon }: FavoriteCardProps) {
  return (
    <Container>
      <Link to={`/pokemon/${pokemon.id}`} className="p-3 md:p-2 md:h-32">
        <img
          className="md:h-full"
          src={
            pokemon.sprites.other['official-artwork'].front_default as string
          }
          alt={pokemon.name}
        />
      </Link>

      <InfoContainer>
        <ContainerTitle>{capitalizeString(pokemon.name)}</ContainerTitle>
        <TypesContainer>
          <PokemonTypes types={pokemon.types} />
        </TypesContainer>
      </InfoContainer>

      <FavoriteButton pokemon={pokemon} size={'full'} className="m-7" />
    </Container>
  );
}
