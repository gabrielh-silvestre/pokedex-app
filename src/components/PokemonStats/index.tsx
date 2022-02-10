import { Pokemon } from 'pokenode-ts';

import { capitalizeString } from '../../services';

import {
  StatTitle,
  StatsContainer,
  ContentContainer,
  StatName,
  StatValue,
} from './styles';

type PokemonStatsProps = Pick<Pokemon, 'stats'>;

export function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <>
      <StatTitle>Base Stats</StatTitle>
      <StatsContainer>
        {stats.map(({ stat, base_stat }, i) => (
          <ContentContainer key={i}>
            <StatName>{capitalizeString(stat.name)}</StatName>
            <StatValue>{base_stat}</StatValue>
          </ContentContainer>
        ))}
      </StatsContainer>
    </>
  );
}
