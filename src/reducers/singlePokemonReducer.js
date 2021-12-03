const INITIAL_STATE = {
  isLoading: true,
  pokemon: {},
};

export default function singlePokemon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_POKEMON':
      return { ...state, pokemon: action.pokemon, isLoading: false };
    case 'REQ_POKEMON':
      return { ...state, isLoading: true }
    default:
      return state;
  }
}
