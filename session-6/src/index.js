import Card from './components/card';
import Pokedex from './domain';

// TODO: Make a domain with use case mappings
// Create a factory for use case, repository and PokemonEntity
// Create Pokemon Entity
// Create use case
// Create Repository
// Accesss pokemon api using promises
// Map results into Pokemon Entities
// Map Pokemon Entity Array to Card components
const p = new Card({
  title: 'Hello, World!',
  description: 'This is supposed to be a Pokemon Card',
  imageUrl: 'path/to/image.url'
});

document.body.appendChild(p.render());
