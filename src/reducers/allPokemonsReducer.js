const INITIAL_STATE = {
  pokemons: [],
  lastPokemon: 1,
  manyPokemons: 24,
};

export default function allPokemons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        pokemons: [...state.pokemons, action.newPokemon],
        lastPokemon: state.lastPokemon + 1,
        manyPokemons: state.manyPokemons + 1,
      };
    default:
      return state;
  }
}
