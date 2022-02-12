import { combineReducers } from "@reduxjs/toolkit";

import { FavoriteReducer } from "./favoriteReducer";
import { PokemonReducer } from './pokemonReducer';

export const rootReducer = combineReducers({
  favorite: FavoriteReducer,
  pokemons: PokemonReducer,
});
