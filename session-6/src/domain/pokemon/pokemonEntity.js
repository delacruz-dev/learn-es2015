import Entity from '../entity';
import capitalize from 'underscore.string/capitalize';

export default class PokemonEntity extends Entity {
  constructor({name, url} = {}){
    super({name, url});

    this._name = name;
    this.url = url;
  }

  get name() {
    return capitalize(this._name);
  }
}