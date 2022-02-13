import { Link, useParams } from 'react-router-dom';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface ArrowsProps {
  arrow: 'right' | 'left';
  className: string;
}

type PokemonParams = {
  pokemonId: string;
};

export function Arrows({ arrow, className }: ArrowsProps) {
  const { pokemonId } = useParams<PokemonParams>();
  const currId = Number(pokemonId);

  return arrow === 'right' ? (
    <Link
      className={className}
      to={currId < 898 ? `/pokemon/${currId + 1}` : `/pokemon/${currId}`}
    >
      <HiChevronRight />
    </Link>
  ) : (
    <Link
      className={className}
      to={currId > 1 ? `/pokemon/${currId - 1}` : `/pokemon/${currId}`}
    >
      <HiChevronLeft />
    </Link>
  );
}
