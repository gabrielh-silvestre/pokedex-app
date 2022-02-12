import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import { PokemonCard } from '../../components/PokemonCard';

export function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorite);

  return (
    <main className="relative container h-full md:grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 2xl:grid-cols-4">
      {favorites.length > 0 ? (
        favorites.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <div className="h-full flex justify-center items-center text-2xl text-center text-gray-500 md:col-span-full">
          Sorry you do not have any favorite Pokemon :(
        </div>
      )}
    </main>
  );
}
