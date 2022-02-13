import tw from 'tailwind-styled-components';

export const ContainerSelect = tw.section`
  h-10
  w-full

  mb-4

  justify-items-stretch

  z-10

  bg-red-700

  lg:h-5
  lg:text-sm
  lg:my-auto
`;

export const SelectOptionContainer = tw.div<{ $isVisible: boolean }>`
  max-h-60

  pt-2

  ${({ $isVisible }) => ($isVisible ? 'grid' : 'hidden')}
  grid-cols-1

  overflow-y-auto
  scroll-hidden

  rounded-b-md
`;

export const SelectLabel = tw.button`
  w-full

  flex
  justify-between
  items-center

  font-bold
  text-gray-200
`;

export const SelectOption = tw.button<{ $isSelected: boolean }>`
  py-2
  px-4

  font-bold
  text-left

  ${({ $isSelected }) =>
    $isSelected ? 'text-gray-200 bg-red-700' : 'text-red-700 bg-white'}

  bg-white

  filter
  hover:brightness-95
`;
