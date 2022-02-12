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
  size: string;
}

export function FavoriteButton({ pokemon, className, size }: FavoriteButtonProps) {
  const favorite = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();
  const isFavorite = favorite.find(({ id }) => id === pokemon.id);

  return isFavorite ? (
    <button
      type="button"
      className={`text-red-600 transition duration-300 ease-in-out transform hover:scale-125 ${className}`}
      onClick={() => {
        dispatch(removeFromFavorite(pokemon));
      }}
    >
      <HiHeart className={`${'w-' + size} ${'h-' + size}`} />
    </button>
  ) : (
    <button
      type="button"
      className={`text-red-600 transition duration-300 ease-in-out transform hover:scale-125 ${className}`}
      onClick={() => {
        dispatch(addItemToFavorite(pokemon));
      }}
    >
      <HiOutlineHeart className={`${'w-' + size} ${'h-' + size}`} />
    </button>
  );
}
