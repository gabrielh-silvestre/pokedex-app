import { Link } from 'react-router-dom';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface ArrowsProps {
  arrow: 'right' | 'left';
  currId: number;
  className: string;
}

export function Arrows({ arrow, currId, className }: ArrowsProps) {
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
