import { Pokemon } from 'pokenode-ts';
import { capitalizeString } from '../../services';

type PokemonStatsProps = Pick<Pokemon, 'stats'>;

export function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <>
      <h2 className="text-2xl text-gray-100 mb-4">Base Stats</h2>
      <div className="lg:grid lg:grid-cols-2">
        {stats.map(({ stat, base_stat }, i) => (
          <div key={i} className="mb-2">
            <h3 className="text-xl text-gray-100">
              {capitalizeString(stat.name)}
            </h3>
            <p className="text-lg">{base_stat}</p>
          </div>
        ))}
      </div>
    </>
  );
}
