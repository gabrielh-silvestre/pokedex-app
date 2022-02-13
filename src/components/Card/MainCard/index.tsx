import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from 'pokenode-ts';

import { capitalizeString } from '../../../services';
import { fetchPokemon } from '../../../services/api';

import { PokemonTypes } from '../../PokemonTypes';
import { FavoriteButton } from '../../Buttons/FavoriteButton';

import {
  Container,
  ImageContainer,
  ContentContainer,
  ContentIdentifier,
  ContainerTitle,
  ContentTypes,
} from './styles';

interface MainCardProps {
  pokemonId: number | string;
}

export function MainCard({ pokemonId }: MainCardProps) {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  const getPokemonById = useCallback(async () => {
    if (typeof pokemonId === 'number') {
      const pokemonData = await fetchPokemon.getPokemonById(pokemonId);
      setPokemon(pokemonData);
    } else {
      const pokemonData = await fetchPokemon.getPokemonByName(pokemonId);
      setPokemon(pokemonData);
    }
  }, [pokemonId]);

  useEffect(() => {
    getPokemonById();
  }, [getPokemonById]);

  return pokemon.id ? (
    <Container>
      <FavoriteButton
        pokemon={pokemon}
        className="w-12 h-12 absolute top-0 right-0"
      />
      <Link to={`/pokemon/${pokemon.id}`} className="w-full">
        <ImageContainer>
          <img
            className="w-8/12 sm:w-2/4"
            src={
              pokemon.sprites.other['official-artwork'].front_default as string
            }
            alt={pokemon.name}
          />
        </ImageContainer>
      </Link>

      <ContentContainer>
        <ContentIdentifier>
          <p>Nº {pokemon.id}</p>
        </ContentIdentifier>
        <ContainerTitle>
          <h4>{capitalizeString(pokemon.name)}</h4>
        </ContainerTitle>
        <ContentTypes>
          <PokemonTypes types={pokemon.types} />
        </ContentTypes>
      </ContentContainer>
    </Container>
  ) : (
    <div />
  );
}
