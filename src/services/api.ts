import { PokemonClient, GameClient } from 'pokenode-ts';

export const fetchPokemon = new PokemonClient();
export const fetchGame = new GameClient();

export async function fetchGenerationList() {
  const genData = await fetchGame.listGenerations();

  return genData.results;
}
