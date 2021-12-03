import { combineReducers } from "redux";

import allPokemons from "./allPokemonsReducer";
import singlePokemon from "./singlePokemonReducer";

const rootReducer = combineReducers({ allPokemons, singlePokemon });

export default rootReducer;
