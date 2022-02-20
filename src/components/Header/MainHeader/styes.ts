import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
  py-4

  sticky
  top-0
  z-20

  bg-red-600

  lg:py-2
`;

export const ContentContainer = tw.div`
  container

  flex
  justify-between

  lg:grid
  lg:grid-cols-3

  xl:mx-auto
`;

export const HeaderTitle = tw.h1`
  text-4xl
  text-gray-100
`;

export const NavBar = tw.nav<{ $isVisible: boolean }>`
  p-4
  pt-7

  absolute
  right-0
  top-20

  ${({ $isVisible }) => $isVisible ? 'flex' : 'hidden'}
  rounded-bl-lg

bg-red-600

  lg:pt-4
  lg:mx-8

  lg:flex
  lg:items-center

  lg:static
  lg:col-start-2
`;

export const LinkList = tw.ul`
  text-lg
  text-right
  text-gray-100

  lg:flex
`;

export const LinkItem = tw.li<{ $first?: boolean }>`
  my-2
  ${({ $first }) => $first ? 'lg:ml-0' : 'lg:ml-5'}
`;

export const SearchContainer = tw.div<{ $isVisible: boolean }>`
  absolute
  right-0
  top-20

  ${({ $isVisible }) => $isVisible ? 'flex' : 'hidden' }

  overflow-hidden

  lg:w-full
  lg:static

  lg:flex
  lg:items-center
  lg:justify-end

  lg:col-start-3
`;
