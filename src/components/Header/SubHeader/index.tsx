import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchGenerationList,
  fetchTypesList,
} from '../../../redux/actions/searchOptionsActions';
import { RootState } from '../../../redux/store';
import { capitalizeString } from '../../../services';

export function SubHeader() {
  const dispatch = useDispatch();
  const { generations, types } = useSelector(
    (state: RootState) => state.searchOptions
  );

  useEffect(() => {
    dispatch(fetchGenerationList());
    dispatch(fetchTypesList());
  }, [dispatch]);

  return (
    <nav>
      <select>
        {generations.map(({ name }, i) => (
          <option value={name}>{`${i + 1}º Generation`}</option>
        ))}
      </select>
      <select>
        {types.map(({ name }) => (
          name !== 'unknown'
          && <option value={name}>{capitalizeString(name)}</option>
        ))}
      </select>
      <Link to="/favorites">Favorites</Link>
      <div>Bag</div>
      <div>PC</div>
    </nav>
  );
}
