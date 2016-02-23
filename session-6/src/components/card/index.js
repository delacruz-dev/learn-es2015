const createAction = (url) => {
  const cardAction = createContainer('Card-action');
  const link = document.createElement('a');
  const href = document.createAttribute('href');
  href.value = url;
  link.setAttributeNode(href);
  const textLink = document.createTextNode('Ver Pokémon');
  link.appendChild(textLink);
  cardAction.appendChild(link);

  return cardAction;
};

const createContainer = (className) => {
  const cardContent = document.createElement('div');
  cardContent.className = className;
  return cardContent;
};

const createImage = (image) => {
  const img = document.createElement('img');
  const src = document.createAttribute('src');
  src.value = `http://pokeapi.co/${image}`;
  img.setAttributeNode(src);
  return img;
};

class Card {
  constructor({title, description, url, image} = {}){
    this._title = title;
    this._description = description;
    this._url = url;
    this._image = image;
  }

  render() {
    const card = createContainer('Card');

    const title = createContainer('Card-title');
    title.appendChild(document.createTextNode(this._title));
    
    const description = document.createElement('p');
    description.appendChild(document.createTextNode(this._description));

    const cardContent = createContainer('Card-content');
    cardContent.appendChild(title);
    cardContent.appendChild(description);

    const cardAction = createAction(this._url);

    const image = createImage(this._image);
    card.appendChild(image);
    card.appendChild(cardContent);
    card.appendChild(cardAction);
    return card;
  }
};

export default Card;
