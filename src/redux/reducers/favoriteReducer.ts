import { createReducer } from "@reduxjs/toolkit";
import { Pokemon } from "pokenode-ts";

import { addItemToFavorite, removeFromFavorite } from '../actions/favoriteActions';

type FavoritePokemons = Pokemon[];

const INITIAL_STATE = [] as FavoritePokemons;

export const FavoriteReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addItemToFavorite, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(removeFromFavorite, (state, { payload }) => {
      return state.filter(({ id }) => id !== payload.id);
    });
});
