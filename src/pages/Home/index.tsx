import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { recoverFromLocal } from '../../redux/actions/favoriteActions';

import { Pokedex } from '../../components/Pokedex';

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recoverFromLocal());
  }, [dispatch]);

  return (
    <main className="bg-gray-50 min-h-screen">
      <Pokedex />
    </main>
  )
}
