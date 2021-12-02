import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from './Button';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [code, setCode] = useState('');

  const handleInput = ({ code, target: { value } }) => {
    setSearchTerm(value);
    setCode(code);
  };

  useEffect(() => {
    if (code === 'Enter') setCode('');
  }, [code]);

  return code === 'Enter' ? (
    <Redirect to={`/pokemon/${searchTerm}`} />
  ) : (
    <>
      <input
        className="pl-2 outline-none py-1 lg:py-0 lg:rounded lg:w-full"
        type="text"
        name="pokemon-name-input"
        id="pokemon-name-input"
        placeholder="Digite o nome ou id"
        onKeyUp={handleInput}
      />
      <Link to={`/pokemon/${searchTerm}`}>
        <Button
          className="px-4 text-lg bg-red-600 text-gray-100 font-bold rounded-md hidden lg:block"
          btnContent="Search"
        />
      </Link>
    </>
  );
}
