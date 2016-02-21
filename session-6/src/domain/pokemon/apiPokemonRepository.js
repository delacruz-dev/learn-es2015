import PokemonRepository from './pokemonRepository';
import PokemonFactory from '../factories/pokemon';

/**
 * @implements PokemonRepository
 * */
export default class ApiPokemonRepository extends PokemonRepository {
  constructor(fetcher){
    super(fetcher);
    this._fetcher = fetcher;
  }

  list({query}) {
    return new Promise((resolve, reject) => {
      resolve({});
    });
  }
}
