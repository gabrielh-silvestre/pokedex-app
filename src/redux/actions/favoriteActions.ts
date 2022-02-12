import { createAction } from '@reduxjs/toolkit';
import { Pokemon } from 'pokenode-ts';

import {
  addItemToFavoriteLocal,
  removeFromFavoriteLocal,
  recoverFavoritesFromLocal,
} from '../../services/localStorage';

export const addItemToFavorite = createAction(
  'favorite/add',
  (newFavoriteItem: Pokemon) => {
    addItemToFavoriteLocal(newFavoriteItem);
    return { payload: newFavoriteItem };
  }
);
export const removeFromFavorite = createAction(
  'favorite/remove',
  (removeFavoriteItem: Pokemon) => {
    removeFromFavoriteLocal(removeFavoriteItem);
    return { payload: removeFavoriteItem };
  }
);

export const recoverFromLocal = createAction('favorite/recover', () => {
  const favoritePokeFromLocal = recoverFavoritesFromLocal();
  return { payload: favoritePokeFromLocal };
});
