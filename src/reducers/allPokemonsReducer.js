const INITIAL_STATE = [];

export default function allPokemons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_POKEMON': 
      return [...state, action.newPokemon];
    default:
      return state;
  }
}
