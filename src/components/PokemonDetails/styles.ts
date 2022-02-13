import tw from 'tailwind-styled-components';

export const Container = tw.article`
  pb-8

  grid

  lg:flex
`;

export const ContentContainer = tw.div`
  px-4
  col-span-2

  sm:grid
  sm:grid-cols-2
  sm:gap-4

  lg:px-24

  xl:w-4/5
  xl:mx-auto
`;

export const ContainerTitle = tw.section`
  my-4
  text-5xl
  text-center
  text-gray-400

  sm:row-start-1
  sm:col-span-2

  lg:col-span-1
  lg:col-start-2
  lg:mb-0
`;

export const ContainerImage = tw.section`
  w-full

  my-4

  relative

  flex
  justify-center
  items-center

  rounded
  bg-gray-200

  lg:mb-0
  lg:row-start-1
  lg:row-span-2
`;

export const PhysicalSection = tw.section`
  p-8
  my-4

  text-center

  rounded-lg
  bg-blue-500

  lg:mb-0
  lg:col-start-2
  lg:row-start-2
`;

export const ForcesSection = tw.section`
  my-4
  p-4

  rounded-lg
  bg-gray-200

  sm:col-start-2
  sm:flex
  sm:flex-col
  sm:justify-between

  lg:flex-row
  lg:row-start-4
  lg:col-span-2
`;

export const StatsSection = tw.section`
  p-8
  my-4

  text-center

  rounded-lg
  bg-blue-500

  sm:col-start-1
  sm:row-start-3

  lg:col-span-2
`;
