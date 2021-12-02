async function fetchPokemon(pokemon, callback) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await res.json();
  return callback(data);
}

async function fetchType(type, callback) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await res.json();
  return callback(data);
}

export { fetchPokemon, fetchType };