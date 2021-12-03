import React from 'react';
import PropTypes from 'prop-types';

import PokemonImage from './PokemonImage';
import PokemonName from './PokemonName';
import PokemonPhysical from './PokemonPhysical';
import PokemonForces from './PokemonForces';
import PokemonStats from './PokemonStats';
import Arrows from './Arrows';

export default function PokemonDetails({ pokemon }) {
  const {
    id,
    name,
    types,
    abilities,
    height,
    weight,
    stats,
    sprites: { front_default },
  } = pokemon;

  const getAbility = () => abilities[0].ability.name;

  const getStats = (statName) =>
    stats.find(({ stat: { name } }) => name === statName);

  const typeNames = types.flatMap(({ type: { name } }) => name);

  return (
    <article className="grid pb-8 lg:flex">
      <Arrows
        arrow="left"
        actualPokemon={id}
        className="flex items-center row-start-3"
      />
      <div className="px-4 col-span-2 sm:grid sm:grid-cols-2 sm:gap-4 lg:px-24 xl:w-4/5 xl:mx-auto">
        <section className="text-5xl text-center my-4 text-gray-400 sm:row-start-1 sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:mb-0">
          <h1>
            <PokemonName name={name} />
          </h1>
        </section>

        <section className="flex justify-center items-center w-full bg-gray-200 my-4 rounded lg:row-start-1 lg:row-span-2 lg:mb-0">
          <PokemonImage sprite={front_default} name={name} />
        </section>

        <section className="bg-blue-500 p-8 my-4 text-center rounded-lg lg:col-start-2 lg:row-start-2 lg:mb-0">
          <PokemonPhysical
            height={height}
            weight={weight}
            ability={getAbility()}
          />
        </section>

        <section className="bg-gray-200 my-4 p-4 rounded-lg sm:col-start-2 sm:flex sm:flex-col sm:justify-between lg:flex-row lg:row-start-4 lg:col-span-2">
          <PokemonForces types={typeNames} />
        </section>

        <section className="bg-blue-500 p-8 my-4 text-center rounded-lg sm:col-start-1 sm:row-start-3 lg:col-span-2">
          <PokemonStats
            attack={getStats('attack')?.base_stat}
            spAttack={getStats('special-attack')?.base_stat}
            defense={getStats('defense')?.base_stat}
            spDefense={getStats('special-defense')?.base_stat}
            speed={getStats('speed')?.base_stat}
          />
        </section>
      </div>
      <Arrows
        arrow="right"
        actualPokemon={id}
        className="flex items-center justify-end row-start-3"
      />
    </article>
  );
}

PokemonDetails.protoTypes = {
  pokemon: PropTypes.string.isRequired,
};
