import PokemonListUseCase from '../pokemon/pokemonListUseCase';
import ApiPokemonRepository from '../pokemon/apiPokemonRepository';
import superagent from 'superagent';

export default class PokemonFactory {

  static pokemonListUseCase() {
    return new PokemonListUseCase(PokemonFactory.apiPokemonRepository());
  }

  static apiPokemonRepository() {
    return new ApiPokemonRepository(PokemonFactory.fetcher());
  }

  static fetcher(){
    return superagent;
  }
}
