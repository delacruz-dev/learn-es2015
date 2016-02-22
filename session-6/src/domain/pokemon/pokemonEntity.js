import Entity from '../entity';

export default class PokemonEntity extends Entity {
  constructor({name, url} = {}){
    super({name, url});

    this.name = name;
    this.url = url;
  }
}