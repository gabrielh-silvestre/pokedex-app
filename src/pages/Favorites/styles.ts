import tw from 'tailwind-styled-components';

export const Container = tw.main`
  h-full
  container
  relative

  md:grid
  md:grid-cols-2
  md:gap-x-8

  lg:grid-cols-3

  2xl:grid-cols-4
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
