import tw from 'tailwind-styled-components';

export const Container = tw.main<{ $hasFavorite: boolean }>`
  ${({ $hasFavorite }) => $hasFavorite ?'h-auto' : 'h-full'}
  container

  md:grid
  md:grid-cols-2
  md:gap-x-8

  2xl:grid-cols-3
`;

export const FavoriteAlert = tw.div`
  h-full

  flex
  justify-center
  items-center

  text-2xl
  text-center
  text-gray-500

  md:col-span-full
`;
