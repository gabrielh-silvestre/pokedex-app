import { useCallback, useEffect, useState } from 'react';
import { NamedAPIResource } from 'pokenode-ts';

import { fetchGame, fetchPokemon } from '../../../services/api';
import { Link } from 'react-router-dom';
import { capitalizeString } from '../../../services';

export function SubHeader() {
  const [generationList, setGenerationList] = useState<NamedAPIResource[]>(
    [] as NamedAPIResource[]
  );
  const [typeList, setTypeList] = useState<NamedAPIResource[]>(
    [] as NamedAPIResource[]
  );

  const getGenerationList = useCallback(async () => {
    const resultList = await fetchGame.listGenerations();
    setGenerationList(resultList.results as NamedAPIResource[]);
  }, []);

  const getTypeList = useCallback(async () => {
    const resultList = await fetchPokemon.listTypes();
    setTypeList(resultList.results as NamedAPIResource[]);
  }, []);

  useEffect(() => {
    getGenerationList();
  }, [getGenerationList]);

  useEffect(() => {
    getTypeList();
  }, [getTypeList]);

  return (
    <nav>
      <select>
        {generationList.map(({ name }, i) => (
          <option value={ name }>{`${i + 1}º Generation`}</option>
        ))}
      </select>
      <select>
        {typeList.map(({ name }) => (
          <option>{capitalizeString(name)}</option>
        ))}
      </select>
      <Link to="/favorites">Favorites</Link>
      <div>Bag</div>
      <div>PC</div>
    </nav>
  );
}
