import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';

interface ArrowsProps {
  actualPokemon: number;
  arrow: 'right' | 'left';
  className: string;
}

export function Arrows({ actualPokemon, arrow, className }: ArrowsProps) {
  const [next, setNext] = useState(0);
  const [previous, setPrevious] = useState(0);

  const setNextPokemon = useCallback(() => {
    if (actualPokemon < 898) {
      setNext(actualPokemon + 1);
    } else {
      setNext(actualPokemon);
    }
  }, [actualPokemon]);

  const setPrevPokemon = useCallback(() => {
    if (actualPokemon > 1) {
      setPrevious(actualPokemon - 1);
    } else {
      setPrevious(actualPokemon);
    }
  }, [actualPokemon]);

  useEffect(() => {
    setNextPokemon();
    setPrevPokemon();
  }, [setNextPokemon, setPrevPokemon]);

  return arrow === 'right' ? (
    <Link className={className} to={`/pokemon/${next}`}>
      <RightArrow />
    </Link>
  ) : (
    <Link className={className} to={`/pokemon/${previous}`}>
      <LeftArrow />
    </Link>
  );
}
