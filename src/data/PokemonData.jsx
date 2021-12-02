import { fetchPokemon } from '../services';

const capitalizeString = (str) =>
  str.replace(/^\w/, (char) => char.toUpperCase());

const getAbility = ({ abilities }) =>
  capitalizeString(abilities[0].ability.name);

const getStats = ({ stats }) =>
  stats.reduce((acc, curr) => {
    acc[curr.stat.name] = curr.base_stat;
    return acc;
  }, {});

const getTypes = ({ types }) => types.map(({ type }) => type.name);

const pokemonConstructor = (pokemonData) => ({
  id: pokemonData.id,
  name: capitalizeString(pokemonData.name),
  sprite: pokemonData.sprites.front_default,
  charact: {
    height: pokemonData.height,
    weight: pokemonData.weight,
    ability: getAbility(pokemonData),
  },
  stats: getStats(pokemonData),
  types: getTypes(pokemonData),
});

export default function pokemon(id) {
  return fetchPokemon(id, (data) => pokemonConstructor(data));
}
