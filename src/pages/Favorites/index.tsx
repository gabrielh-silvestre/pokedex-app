import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import { FavoriteCard } from '../../components/Card/FavoriteCard';

import { Container, FavoriteAlert } from './styles';

export function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorite);

  return (
    <Container $hasFavorite={favorites.length > 0}>
      {favorites.length > 0 ? (
        favorites.map((pokemon) => (
          <FavoriteCard key={pokemon.id} pokemon={ pokemon } />
        ))
      ) : (
        <FavoriteAlert>
          Sorry you do not have any favorite Pokemon :(
        </FavoriteAlert>
      )}
    </Container>
  );
}
