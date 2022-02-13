import tw from 'tailwind-styled-components';

export const Container = tw.nav`
  pt-2

  bg-red-700

  lg:py-2
`;

export const ContentContainer = tw.div`
  container

  flex
  flex-col

  lg:grid
  lg:grid-cols-2
  lg:gap-x-4
`;

export const SelectContainer = tw.div`
  grid
  grid-cols-2
  gap-x-4
`;

export const LinksContainer = tw.div`
  flex
  justify-between

  pb-2

  lg:items-center
  lg:pb-0
`;
