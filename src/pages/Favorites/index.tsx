import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import { PokemonCard } from '../../components/PokemonCard';

import { Container, FavoriteAlert } from './styles';

export function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorite);

  return (
    <Container>
      {favorites.length > 0 ? (
        favorites.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <FavoriteAlert>
          Sorry you do not have any favorite Pokemon :(
        </FavoriteAlert>
      )}
    </Container>
  );
}
