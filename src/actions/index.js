export function addPokemon(pokemonId) {
  return async (dispatch) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await res.json();
    dispatch({ type: 'ADD_POKEMON', newPokemon: data });
  };
}

export function getPokemon(pokemonId) {
  return async (dispatch) => {
    dispatch({ type: 'REQ_POKEMON' });
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await res.json();
    dispatch({ type: 'GET_POKEMON', pokemon: data });
  };
}
