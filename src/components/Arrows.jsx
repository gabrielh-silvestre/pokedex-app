import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';

export default function Arrows({ actualPokemon, arrow, className }) {
  const [next, setNext] = useState(0);
  const [previous, setPrevious] = useState(0);

  useEffect(() => {
    setNextPokemon();
    setPrevPokemon();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPokemon]);

  const setNextPokemon = () => {
    if (actualPokemon < 898) {
      setNext(actualPokemon + 1);
    } else {
      setNext(actualPokemon);
    }
  };

  const setPrevPokemon = () => {
    if (actualPokemon > 1) {
      setPrevious(actualPokemon - 1);
    } else {
      setPrevious(actualPokemon);
    }
  };

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
