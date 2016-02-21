class Card {
  constructor(PokemonEntity){
    this._title = PokemonEntity.title;
    this._description = PokemonEntity.description;
    this._imageUrl = PokemonEntity.imageUrl;
  }

  render(){
    const div = document.createElement('div');
    div.class = 'Card';
    div.textContent = this._text;
    return div;
  }
};

export default Card;