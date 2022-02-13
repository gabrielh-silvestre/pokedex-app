import { createReducer } from '@reduxjs/toolkit';
import { NamedAPIResource } from 'pokenode-ts';
import { fetchGenerationList, fetchTypesList } from '../actions/searchOptionsActions';

const INITIAL_STATE = {
  generations: [] as NamedAPIResource[],
  types: [] as NamedAPIResource[],
}

export const SearchOptionsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchGenerationList.fulfilled, (state, { payload }) => {
      state.generations = payload as NamedAPIResource[];
    })
    .addCase(fetchTypesList.fulfilled, (state, { payload }) => {
      state.types = payload as NamedAPIResource[];
    });
});
