import { createAction } from "@reduxjs/toolkit";
import { Pokemon } from "pokenode-ts";

export const addItemToFavorite = createAction<Pokemon>('favorite/add');
export const removeFromFavorite = createAction<Pokemon>('favorite/remove');
