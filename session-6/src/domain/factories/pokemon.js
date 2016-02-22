import PokemonListUseCase from '../pokemon/pokemonListUseCase';
import ApiPokemonRepository from '../pokemon/apiPokemonRepository';
import PokemonEntity from '../pokemon/pokemonEntity';
import superagent from 'superagent';

export default class PokemonFactory {

  static pokemonListUseCase() {
    return new PokemonListUseCase({repository: PokemonFactory.apiPokemonRepository()});
  }

  static apiPokemonRepository() {
    return new ApiPokemonRepository(PokemonFactory.fetcher());
  }

  static fetcher(){
    return superagent;
  }

  static pokemonEntity({name, url} = {}){
    return new PokemonEntity({name, url});
  }
}
