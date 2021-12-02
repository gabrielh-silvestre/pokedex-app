import { combineReducers } from "redux";

import allPokemons from "./allPokemonsReducer";

const rootReducer = combineReducers({ allPokemons });

export default rootReducer;
