let pokemonRepository = (function() {
  let pokemonList = [];

  pokemonList = [
    {
      name: 'Bulbasaur',
      number: '#001',
      type: 'grass',
      weaknesses: ['fire', 'psychic', 'flying', 'ice']
    },
    
    {
      name: 'Charmander',
      number: '#004',
      type: 'fire',
      weaknesses: ['water', 'ground', 'rock']
    },
    
    {
      name: 'Squirtle',
      number: '#007',
      type: 'water',
      weaknesses: ['grass', 'electric']
    }
  ];
  
  function pokeFilter() {
    let filt = pokemonList.filter(function (pokemon) {
      return pokemon.name === 'Dratini';
    });
    console.log(filt);
  }
  
  function add(pokemon) {
    if(typeof pokemon === 'object') {
      console.log(
        'Is this a pokemon? ' + Object.keys(pokemonList[0]).every(property => property in pokemon)
      );
      if (Object.keys(pokemonList[0]).every(property => property in pokemon)) {
        alert('New pokemon named ' + pokemon.name + ' has been added to Pokedex.');
      }
      pokemonList.push(pokemon);
    } else {
      alert(pokemon.name + ' is not an applicable entry in the Pokedex!');
    }
  }
  
  function getAll() {
    return pokemonList;
  }
  
  return {
    //addNewItem: addNewItem,
    pokeFilter: pokeFilter,
    add: add, 
    getAll: getAll
  }
})();

console.log(pokemonRepository.getAll());

pokemonRepository.add({
  name: 'Dratini', 
  number: '#147', 
  type: 'dragon',
  weaknesses: ['ice', 'dragon', 'fairy']
});

console.log(pokemonRepository.getAll()); 

console.log(pokemonRepository.pokeFilter());

pokemonRepository.getAll().forEach(function (pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = 'placeholder';
  button.classList.add('.button-class');
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
});










































































  

/*
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addNewItem(pokemon);
});
*/






