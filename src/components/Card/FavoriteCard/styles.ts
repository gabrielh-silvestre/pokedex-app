import tw from 'tailwind-styled-components';

export const Container = tw.section`
  w-full
  relative

  my-4

  grid
  grid-cols-3
  justify-items-center
  gap-x-2

  shadow
  rounded

  duration-200

  hover:shadow-xl
`;

export const InfoContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center

  text-sm
`;


export const ContainerTitle = tw.h3`
  mb-3

  text-2xl
  text-gray-600
`;

export const TypesContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center

  md:flex-row
`;
