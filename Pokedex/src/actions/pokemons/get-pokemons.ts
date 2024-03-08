import { pokeApi } from "../../config/api/pokeApi";
import type { Pokemon } from "../../domain/entities/pokemon";
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from "../../infrastructure/interfaces/pokeApi.interface";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";


export const getPokemons = async ( page: number, limit: number = 20 ): Promise<Pokemon[]> => {

  try {
    const url = `/pokemon?offset=${ page }&limit=${ limit }`;
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>( url );

    const pokemonPromises = data.results.map( (info) => {
      return pokeApi.get<PokeAPIPokemon>( info.url );
    } )

    const pokeApiPokemons = await Promise.all( pokemonPromises );

    const pokemons = pokeApiPokemons.map( (item) => PokemonMapper.pokeApiPokemonToEntity( item.data ) );

    console.log( JSON.stringify(pokemons[0], null, 2) );

    return pokemons;
  } catch (error) {
    console.log( error );
    throw new Error('Error getting pokemons');
  }
}