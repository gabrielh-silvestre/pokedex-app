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

import {
  Container,
  ContentContainer,
  SelectContainer,
  Select,
  SelectOption,
  LinksContainer,
} from './styles';

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
    <Container>
      <ContentContainer>
        <SelectContainer>
          <Select
            value={searchBy.generation}
            onChange={setPokemonsGeneration}
          >
            <option value="">Generations</option>
            {generations.map(({ name }, i) => (
              <SelectOption
                key={name}
                value={name}
              >
                {`${i + 1}º Generation`}
              </SelectOption>
            ))}
          </Select>
          <Select
            value={searchBy.type}
            onChange={setPokemonsType}
          >
            <option value="">Types</option>
            {types.map(
              ({ name }) =>
                name !== 'unknown' && (
                  <SelectOption
                    key={name}
                    value={name}
                  >
                    {capitalizeString(name)}
                  </SelectOption>
                )
            )}
          </Select>
        </SelectContainer>

        <LinksContainer>
          <span className="font-bold text-gray-200 opacity-60 lg:text-sm">BAG</span>
          <span className="font-bold text-gray-200 opacity-60 lg:text-sm">PC</span>
          <Link to="/favorites" className="font-bold text-gray-200 lg:text-sm">
            FAVORITES
          </Link>
        </LinksContainer>
      </ContentContainer>
    </Container>
  );
}
