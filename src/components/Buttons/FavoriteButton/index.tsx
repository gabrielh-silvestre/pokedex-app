import { useDispatch, useSelector } from 'react-redux';
import { Pokemon } from 'pokenode-ts';

import { RootState } from '../../../redux/store';
import {
  addItemToFavorite,
  removeFromFavorite,
} from '../../../redux/actions/favoriteActions';

interface FavoriteButtonProps {
  pokemon: Pokemon;
}

export function FavoriteButton({ pokemon }: FavoriteButtonProps) {
  const favorite = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();
  const isFavorite = favorite.find(({ id }) => id === pokemon.id);

  return (
    <button
      type="button"
      onClick={() => {
        isFavorite
          ? dispatch(removeFromFavorite(pokemon))
          : dispatch(addItemToFavorite(pokemon));
      }}
    >
      Favorite
    </button>
  );
}
