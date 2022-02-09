import tw from 'tailwind-styled-components';

export const ForcesContainer = tw.section<{
  $middle?: boolean;
  $last?: boolean;
}>`
  ${({ $last }) => ($last ? 'mb-4' : 'mb-8')}

  lg:w-full
  ${({ $middle }) => ($middle ? 'lg:mx-4' : 'lg:mx-0')}
`;

export const ForcesTitle = tw.h3`
  mb-2

  text-xl
  text-center
`;

export const ContentContainer = tw.div`
  flex
  flex-wrap
  justify-around
`;
