import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchGame, fetchPokemon } from '../../services/api';

export const fetchGenerationList = createAsyncThunk(
  'search/getGenerationList',
  async () => {
    const res = await fetchGame.listGenerations();
    return res.results;
  }
);

export const fetchTypesList = createAsyncThunk(
  'search/getTypesList',
  async () => {
    const res = await fetchPokemon.listTypes();
    return res.results;
  }
);

export const resetSearchOption = createAction('search/resetSearchOption');
