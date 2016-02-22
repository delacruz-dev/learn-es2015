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

  list({query = ''} = {}) {
    return new Promise((resolve, reject) => {
      this._fetcher.get('http://pokeapi.co/api/v2/pokemon')
        .end((err, resp) => {
          if(err){
            reject(err);
            return;
          }
          try {
            resolve({pokemons: JSON.parse(resp.text).map(PokemonFactory.pokemonEntity)})
          } catch(err) { reject(err); }
        });
      });
  };
}
