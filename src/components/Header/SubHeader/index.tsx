import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchGenerationList,
  fetchTypesList,
  selectSearchOption,
} from '../../../redux/actions/searchOptionsActions';
import {
  getPokemonsByGeneration,
  getPokemonsByType,
} from '../../../redux/actions/pokemonActions';
import { RootState } from '../../../redux/store';
import { capitalizeString } from '../../../services';

export function SubHeader() {
  const dispatch = useDispatch();
  const { generations, types, searchBy } = useSelector(
    (state: RootState) => state.searchOptions
  );

  const setPokemonsGeneration = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getPokemonsByGeneration(value));
    dispatch(
      selectSearchOption({ searchBy: 'generation', searchOption: value })
    );
  };

  const setPokemonsType = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getPokemonsByType(value));
    dispatch(selectSearchOption({ searchBy: 'type', searchOption: value }));
  };

  useEffect(() => {
    dispatch(fetchGenerationList());
    dispatch(fetchTypesList());
  }, [dispatch]);

  return (
    <nav>
      <select value={searchBy.generation} onChange={setPokemonsGeneration}>
      <option value="">Generations</option>
        {generations.map(({ name }, i) => (
          <option key={name} value={name}>{`${i + 1}º Generation`}</option>
        ))}
      </select>
      <select value={searchBy.type} onChange={setPokemonsType}>
        <option value="">Types</option>
        {types.map(
          ({ name }) =>
            name !== 'unknown' && (
              <option key={name} value={name}>
                {capitalizeString(name)}
              </option>
            )
        )}
      </select>
      <Link to="/favorites">Favorites</Link>
      <div>Bag</div>
      <div>PC</div>
    </nav>
  );
}
