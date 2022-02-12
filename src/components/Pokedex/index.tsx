import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { RootState } from '../../redux/store';
import { getMultPokemonsById } from '../../redux/actions/pokemonActions';

import { MainCard } from '../Card/MainCard';
import { SubHeader } from '../Header/SubHeader';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

export function Pokedex() {
  const dispatch = useDispatch();
  const { pokemonsIds, fetchNumber } = useSelector(
    (state: RootState) => state.pokemons
  );

  useEffect(() => {
    dispatch(getMultPokemonsById());
  }, [dispatch]);

  return (
    <>
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
        className="container z-0 hidden-scroll sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {pokemonsIds.length > 0 &&
          pokemonsIds.map((pokemonId) => (
            <MainCard key={pokemonId} pokemonId={pokemonId} />
          ))}
      </InfiniteScroll>
    </>
  );
}
