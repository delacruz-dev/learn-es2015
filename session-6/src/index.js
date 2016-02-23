import Card from './components/card';
import Pokedex from './domain';
import './index.scss';

Pokedex.get('pokemons_list_use_case')
  .execute()
  .then((pokemons) => {
    return pokemons.map(p => new Card({
      title: p.name,
      image: p.image
    }))
  })
  .then((cards) => {
    for(let card of cards)
      document.body.appendChild(card.render());
  });
