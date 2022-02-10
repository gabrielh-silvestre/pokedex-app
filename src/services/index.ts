import { PokemonClient } from 'pokenode-ts';

export const fetchPokemon = new PokemonClient();

export const fetchType = (type: string) => fetchPokemon.getTypeByName(type);


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
