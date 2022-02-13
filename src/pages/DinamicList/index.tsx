import { useEffect } from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { getMultPokemonsById } from '../../redux/actions/pokemonActions';

import { SubHeader } from '../../components/Header/SubHeader';
import { MainCard } from '../../components/Card/MainCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';

export function DinamicList() {
  const dispatch = useDispatch();
  const { pokemonsIds, fetchNumber } = useSelector(
    (state: RootState) => state.pokemons
  );

  useEffect(() => {
    dispatch(getMultPokemonsById());
  }, [dispatch]);

  return (
    <main className="bg-gray-50 min-h-screen">
      <SubHeader />
      <InfiniteScroll
        dataLength={fetchNumber}
        next={() => {
          dispatch(getMultPokemonsById());
        }}
        scrollThreshold={0.9}
        hasMore={true}
        loader={<LoadSpinner />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="container z-0 scroll-hidden sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {pokemonsIds.length > 0 &&
          pokemonsIds.map((pokemonId) => (
            <MainCard key={pokemonId} pokemonId={pokemonId} />
          ))}
      </InfiniteScroll>
    </main>
  );
}
