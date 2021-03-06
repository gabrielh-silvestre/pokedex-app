import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { SearchInput } from './style';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [code, setCode] = useState('');

  const handleInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
    setCode(code);
  };

  const handleKeyUp = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    setCode(code);
  };

  useEffect(() => {
    if (code === 'Enter') setCode('');
  }, [code]);

  return (
    <>
      {code === 'Enter' && <Redirect to={`/pokemon/${searchTerm}`} />}
      <SearchInput
        type="text"
        name="pokemon-name-input"
        id="pokemon-name-input"
        placeholder="Digite o nome ou id"
        onKeyUp={handleKeyUp}
        onChange={handleInput}
      />
      <Link
        className="px-4 text-lg bg-red-600 text-gray-100 font-bold rounded-md hidden lg:block"
        to={`/pokemon/${searchTerm}`}
      >
        Search
      </Link>
    </>
  );
}
