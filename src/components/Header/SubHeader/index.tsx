import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchGenerationList,
  fetchTypesList,
  resetSearchOption,
  selectSearchOption,
} from '../../../redux/actions/searchOptionsActions';
import {
  getPokemonsByGeneration,
  getPokemonsByType,
} from '../../../redux/actions/pokemonActions';
import { RootState } from '../../../redux/store';

import { Select } from '../../Select';

import {
  Container,
  ContentContainer,
  SelectContainer,
  LinksContainer,
} from './styles';
import { capitalizeString } from '../../../services';

export function SubHeader() {
  const dispatch = useDispatch();
  const { generations, types, searchBy } = useSelector(
    (state: RootState) => state.searchOptions
  );

  const setPokemonsGeneration = (generationName: string) => {
    dispatch(getPokemonsByGeneration(generationName));
    dispatch(
      selectSearchOption({
        searchBy: 'generation',
        searchOption: generationName,
      })
    );
  };

  const setPokemonsType = (typeName: string) => {
    dispatch(getPokemonsByType(typeName));
    dispatch(selectSearchOption({ searchBy: 'type', searchOption: typeName }));
  };

  const generationTemplate = (str: string, index: number) =>
    `${index + 1}º Generation`;

  const typeTemplate = (str: string) => `${capitalizeString(str)}`;

  useEffect(() => {
    dispatch(fetchGenerationList());
    dispatch(fetchTypesList());

    return () => {
      dispatch(resetSearchOption());
    }
  }, [dispatch]);

  return (
    <Container>
      <ContentContainer>
        <SelectContainer>
          <Select
            label="GENERATIONS"
            options={generations.map(({ name }) => name)}
            optionSelected={searchBy.generation}
            templateOption={generationTemplate}
            onClick={setPokemonsGeneration}
          />
          <Select
            label="TYPES"
            options={types.map(({ name }) => name)}
            optionSelected={searchBy.type}
            templateOption={typeTemplate}
            onClick={setPokemonsType}
          />
        </SelectContainer>

        <LinksContainer>
          <span className="cursor-not-allowed font-bold text-gray-200 opacity-60 lg:text-sm">
            BAG
          </span>
          <span className="cursor-not-allowed font-bold text-gray-200 opacity-60 lg:text-sm">
            PC
          </span>
          <Link to="/favorites" className="font-bold text-gray-200 lg:text-sm">
            FAVORITES
          </Link>
        </LinksContainer>
      </ContentContainer>
    </Container>
  );
}
