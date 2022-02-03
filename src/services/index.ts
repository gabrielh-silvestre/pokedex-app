export async function fetchPokemon(pokemon: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await res.json();
  return data;
}

export async function fetchType(type: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await res.json();
  return data;
}

export function capitalizeString(str: string) {
  return str.replace(/^\w/, (char) => char.toUpperCase());
}

export async function getDmgRelations(type: string) {
  const data = await fetchType(type);

  return {
    advantage: data.damage_relations.double_damage_to,
    disadvantage: data.damage_relations.double_damage_from,
  };
}
