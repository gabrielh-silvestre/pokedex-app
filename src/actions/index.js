const receivePokemon = (newPokemon) => ({ type: 'ADD_POKEMON', newPokemon });

export function addPokemon(pokemonId) {
  return async (dispatch) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await res.json();
    dispatch(receivePokemon(data));
  }
}
