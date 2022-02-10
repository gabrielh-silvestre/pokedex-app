import tw from 'tailwind-styled-components';

export const TypeContainer = tw.p<{ $type: string }>`
  ${({ $type }) => $type}

  py-1
  px-5
  mb-2
  rounded-xl
  lg:mx-2
`
