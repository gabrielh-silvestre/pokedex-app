export default async function fetchPokemon(pokemon, callback) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await res.json();
  callback(data);
}
