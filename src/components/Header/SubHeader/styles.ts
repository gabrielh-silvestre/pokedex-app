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

export const Select = tw.select`
  h-10

  mb-4

  justify-items-stretch

  font-bold
  text-lg
  text-gray-200

  rounded

  bg-red-700

  lg:h-5
  lg:text-sm
  lg:my-auto
`;

export const SelectOption = tw.option`
  font-bold
  text-red-700

  bg-gray-200
`;

export const LinksContainer = tw.div`
  flex
  justify-between

  pb-2

  lg:items-center
  lg:pb-0
`;
