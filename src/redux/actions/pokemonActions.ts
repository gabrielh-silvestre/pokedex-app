import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchGame, fetchPokemon } from '../../services/api';

export const getMultPokemonsById = createAction('pokemon/incrementIdArray');

export const getPokemonsByGeneration = createAsyncThunk(
  'pokemon/setNameArray',
  async (generationName: string) => {
    const res = await fetchGame.getGenerationByName(generationName);
    return res.pokemon_species.map(({ name }) => name);
  }
);

export const getPokemonsByType = createAsyncThunk(
  'pokemon/setNameArray',
  async (typeName: string) => {
    const res = await fetchPokemon.getTypeByName(typeName);
    return res.pokemon.map(({ pokemon }) => pokemon.name);
  }
);
