import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import {
  fetchGenerationList,
  fetchTypesList,
  resetSearchOption,
} from '../../../redux/actions/searchOptionsActions';
import {
  getPokemonsByGeneration,
  getPokemonsByType,
} from '../../../redux/actions/pokemonActions';
import { RootState } from '../../../redux/store';
import { capitalizeString } from '../../../services';

import { Select } from '../../Select';

import {
  Container,
  ContentContainer,
  SelectContainer,
  LinksContainer,
} from './styles';

type Params = {
  pokemonId?: string;
  searchOpt?: string;
}

export function SubHeader() {
  const history = useHistory();
  const slug = useParams<Params>();

  const dispatch = useDispatch();
  const { generations, types } = useSelector(
    (state: RootState) => state.searchOptions
  );

  const setPokemonsGeneration = (generationName: string) => {
    dispatch(getPokemonsByGeneration(generationName));

    history.push(`/searchBy/${generationName}`);
  };

  const setPokemonsType = (typeName: string) => {
    dispatch(getPokemonsByType(typeName));

    history.push(`/searchBy/${typeName}`);
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
            optionSelected={slug.searchOpt || ''}
            templateOption={generationTemplate}
            onClick={setPokemonsGeneration}
          />
          <Select
            label="TYPES"
            options={types.map(({ name }) => name)}
            optionSelected={slug.searchOpt || ''}
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
