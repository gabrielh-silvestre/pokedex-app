async function fetchPokemon(pokemon, callback) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await res.json();
  callback(data);
}

async function fetchType(type, callback) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await res.json();
  callback(data);
}

async function fetchEvolution(id, callback) {
  const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
  const data = await res.json();
  callback(data);
}

export { fetchPokemon, fetchType, fetchEvolution };
