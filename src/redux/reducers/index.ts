import { combineReducers } from "@reduxjs/toolkit";

import { FavoriteReducer } from "./favoriteReducer";

export const rootReducer = combineReducers({
  favorite: FavoriteReducer,
});
