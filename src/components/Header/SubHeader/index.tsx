import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchGenerationList,
  fetchTypesList,
} from '../../../redux/actions/searchOptionsActions';
import {
  getPokemonsByGeneration,
  getPokemonsByType,
} from '../../../redux/actions/pokemonActions';
import { RootState } from '../../../redux/store';
import { capitalizeString } from '../../../services';

export function SubHeader() {
  const dispatch = useDispatch();
  const { generations, types } = useSelector(
    (state: RootState) => state.searchOptions
  );

  const setPokemonsGeneration = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getPokemonsByGeneration(value));
  };

  const setPokemonsType = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getPokemonsByType(value));
  };

  useEffect(() => {
    dispatch(fetchGenerationList());
    dispatch(fetchTypesList());
  }, [dispatch]);

  return (
    <nav>
      <select onChange={setPokemonsGeneration}>
        {generations.map(({ name }, i) => (
          <option value={name}>{`${i + 1}º Generation`}</option>
        ))}
      </select>
      <select onChange={setPokemonsType}>
        {types.map(
          ({ name }) =>
            name !== 'unknown' && (
              <option value={name}>{capitalizeString(name)}</option>
            )
        )}
      </select>
      <Link to="/favorites">Favorites</Link>
      <div>Bag</div>
      <div>PC</div>
    </nav>
  );
}
