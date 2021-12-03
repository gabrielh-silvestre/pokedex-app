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

export function getTypeRelations(typeName) {
  return async (dispatch) => {
    dispatch({ type: 'REQ_RELATIONS' });
    const res = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
    const data = await res.json();
    dispatch({
      type: 'GET_DAMAGE_RELATIONS',
      advantage: data.damage_relations.double_damage_to,
      disadvantage: data.damage_relations.double_damage_from,
    });
  };
}

export function increasePokemons() {
  return { type: 'INCREASE_POKEMONS' };
}

export function resetPokemons() {
  return { type: 'RESET_POKEMON' };
}

export function changeRelation() {
  return { type: 'CHANGE_RELATIONS' };
}
