import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import { SubHeader } from '../../components/Header/SubHeader';
import { MainCard } from '../../components/Card/MainCard';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';

import { Container } from './styles';

export function StaticList() {
  const { pokemonsIds } = useSelector((state: RootState) => state.pokemons);

  return (
    <>
      <SubHeader />
      <Container>
        {pokemonsIds.length > 0 ? (
          pokemonsIds.map((pokemonId) => (
            <MainCard key={pokemonId} pokemonId={pokemonId} />
          ))
        ) : (
          <LoadSpinner />
        )}
      </Container>
    </>
  );
}
