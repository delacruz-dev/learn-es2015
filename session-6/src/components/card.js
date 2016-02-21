class Card {
  constructor({title, description, imageUrl} = {}){
    this._title = title;
    this._description = description;
    this._imageUrl = imageUrl;
  }

  render() {
    const div = document.createElement('div');
    div.class = 'Card';
    div.textContent = this._text;
    return div;
  }
};

export default Card;
