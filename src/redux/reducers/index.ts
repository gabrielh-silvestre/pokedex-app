import { combineReducers } from "@reduxjs/toolkit";

import { FavoriteReducer } from "./favoriteReducer";
import { PokemonReducer } from './pokemonReducer';
import { SearchOptionsReducer } from './searchOptionsReducer';

export const rootReducer = combineReducers({
  favorite: FavoriteReducer,
  pokemons: PokemonReducer,
  searchOptions: SearchOptionsReducer,
});
