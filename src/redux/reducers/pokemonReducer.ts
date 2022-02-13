import { createReducer } from '@reduxjs/toolkit';
import { getMultPokemonsById, getPokemonsByGeneration } from '../actions/pokemonActions';

const INITIAL_STATE = {
  pokemonsIds: [] as (number | string)[],
  fetchNumber: 24,
};

export const PokemonReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(getMultPokemonsById, (state) => {
      state.pokemonsIds = Array.from({length: state.fetchNumber}, (_, i) => i + 1);
      state.fetchNumber += 24;
    })
    .addCase(getPokemonsByGeneration.fulfilled, (state, { payload }) => {
      state.pokemonsIds = payload;
      state.fetchNumber = 24;
    })
    .addCase(getPokemonsByGeneration.rejected, (state) => {
      state.pokemonsIds = Array.from({length: 24}, (_, i) => i + 1);
      state.fetchNumber = 24;
    });
})
