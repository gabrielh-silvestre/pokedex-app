import { useDispatch, useSelector } from 'react-redux';
import { Pokemon } from 'pokenode-ts';

import { RootState } from '../../../redux/store';
import {
  addItemToFavorite,
  removeFromFavorite,
} from '../../../redux/actions/favoriteActions';

import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

interface FavoriteButtonProps {
  pokemon: Pokemon;
  className?: string;
}

export function FavoriteButton({ pokemon, className }: FavoriteButtonProps) {
  const favorite = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();
  const isFavorite = favorite.find(({ id }) => id === pokemon.id);

  return isFavorite ? (
    <button
      type="button"
      onClick={() => {
        dispatch(removeFromFavorite(pokemon));
      }}
    >
      <HiHeart
        className={`w-8 h-8 text-red-600 transition duration-300 ease-in-out transform hover:scale-125 ${className}`}
      />
    </button>
  ) : (
    <button
      type="button"
      onClick={() => {
        dispatch(addItemToFavorite(pokemon));
      }}
    >
      <HiOutlineHeart
        className={`w-8 h-8 text-red-600 opacity-50 transition duration-300 ease-in-out transform hover:scale-125 ${className}`}
      />
    </button>
  );
}
