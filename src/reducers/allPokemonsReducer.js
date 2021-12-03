// not used

const INITIAL_STATE = {
  pokemons: [],
  lastPokemon: 1,
  manyPokemons: 24,
};

export default function allPokemons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_POKEMON':
      return { ...state, pokemons: [...state.pokemons, action.newPokemon] };
    case 'INCREASE_POKEMONS':
      return {
        ...state,
        lastPokemon: state.lastPokemon + 24,
        manyPokemons: state.manyPokemons + 24,
      };
    case 'RESET_POKEMON':
      return { pokemons: [], lastPokemon: 1, manyPokemons: 24 };
    default:
      return state;
  }
}
