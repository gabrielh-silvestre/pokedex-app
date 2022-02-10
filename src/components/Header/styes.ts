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
  px-4
  mx-auto

  flex
  justify-between

  lg:px-24
  lg:grid

  xl:w-4/5
  xl:mx-auto
`;

export const HeaderTitle = tw.h1`
  text-4xl
  text-gray-100
`;

export const NavBar = tw.nav`
  p-4
  pt-7

  absolute
  right-0
  top-20

  hidden
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

export const SearchContainer = tw.div`
  absolute
  right-0
  top-20

  overflow-hidden

  lg:w-full
  lg:static

  lg:flex
  lg:items-center
  lg:justify-end

  lg:col-start-3
`;
