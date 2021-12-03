import { combineReducers } from 'redux';

import singlePokemon from './singlePokemonReducer';
import typesRelation from './typesReducer';

const rootReducer = combineReducers({ singlePokemon, typesRelation });

export default rootReducer;
