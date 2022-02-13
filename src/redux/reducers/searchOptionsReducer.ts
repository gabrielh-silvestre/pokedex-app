import { createReducer } from '@reduxjs/toolkit';
import { NamedAPIResource } from 'pokenode-ts';

import {
  fetchGenerationList,
  fetchTypesList,
  selectSearchOption,
} from '../actions/searchOptionsActions';

const INITIAL_STATE = {
  searchBy: {
    type: '',
    generation: '',
  },
  generations: [] as NamedAPIResource[],
  types: [] as NamedAPIResource[],
};

export const SearchOptionsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchGenerationList.fulfilled, (state, { payload }) => {
      state.generations = payload as NamedAPIResource[];
    })
    .addCase(fetchTypesList.fulfilled, (state, { payload }) => {
      state.types = payload as NamedAPIResource[];
    })
    .addCase(selectSearchOption, (state, { payload }) => {
      state.searchBy = { type: '', generation: '' };
      state.searchBy[payload.searchBy] = payload.searchOption;
    });
});
