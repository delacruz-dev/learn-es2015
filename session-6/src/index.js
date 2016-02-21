import Card from './components/card';
import Pokedex from './domain';

const card = new Card({
  title: 'Hello, World!',
  description: 'This is supposed to be a Pokemon Card',
  imageUrl: 'path/to/image.url'
});

document.body.appendChild(card.render());
