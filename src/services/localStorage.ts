import { Pokemon } from 'pokenode-ts';

const LOCAL_FAVORITES = 'favoritePokemons';

function getInitialValue(
  key: string,
  defaultValue: any,
  convertFromString = JSON.parse
) {
  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue) {
    try {
      return convertFromString(localStorageValue);
    } catch {
      localStorage.removeItem(key);
    }
  }
  return defaultValue;
}

export async function addItemToFavoriteLocal(
  newItem: Pokemon,
  convertToString = JSON.stringify
) {
  const favoriteItems = getInitialValue(LOCAL_FAVORITES, []);
  const attItems = [...favoriteItems, newItem];

  localStorage.setItem(LOCAL_FAVORITES, convertToString(attItems));
}

export async function removeFromFavoriteLocal(
  removeItem: Pokemon,
  convertToString = JSON.stringify
) {
  const favoriteItems = getInitialValue(LOCAL_FAVORITES, []);
  const attItems = favoriteItems.filter(
    (item: Pokemon) => item.id !== removeItem.id
  );

  localStorage.setItem(LOCAL_FAVORITES, convertToString(attItems));
}

export function recoverFavoritesFromLocal() {
  const favoriteItems = getInitialValue(LOCAL_FAVORITES, []);
  return favoriteItems as Pokemon[];
}
