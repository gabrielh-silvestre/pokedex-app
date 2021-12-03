export async function fetchPokemon(pokemon) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await res.json();
  return data;
}

export async function fetchType(type) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await res.json();
  return data;
}

export function capitalizeString(str) {
  return str.replace(/^\w/, (char) => char.toUpperCase());
}
