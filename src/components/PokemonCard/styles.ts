import tw from 'tailwind-styled-components';

export const Container = tw.section`
  w-full

  mx-auto
  my-8

  relative

  flex
  flex-col
  items-center

  shadow-sm
  rounded

  duration-200

  hover:shadow-xl
`;

export const ImageContainer = tw.div`
  w-full
  h-40

  p-8

  flex
  items-center
  justify-center

  rounded-t

  bg-gray-200

  2xl:h-auto
`;

export const ContentContainer = tw.div`
  w-full

  p-4

  flex
  flex-col

  text-sm
`;

export const ContentIdentifier = tw.div`
  mb-2

  text-gray-400
`;

export const ContainerTitle = tw.div`
  mb-2

  text-xl
  text-gray-600
`;

export const ContentTypes = tw.div`
  my-2

  flex
  justify-around

  text-xs
`;
