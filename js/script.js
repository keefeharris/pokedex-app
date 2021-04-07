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

  /*
  //function pokeFilter is created
  //variable named filt is defined
  //filt equals the filter function that searches pokemonList array
  //the parameter 'pokemon' is passed and returned with dot notation to find the name ".name" value of Dratini.
  //the filt variable is then logged on the console when pokeFilter is called
  */
  function pokeFilter() {
    let filt = pokemonList.filter(function (pokemon) {
      return pokemon.name === 'Dratini';
    });
    console.log(filt);
  }
  
  //this local function is referenced by the return object
  /*
    The typeof operator returns a string indicating the type of the unevaluated operand.
    Operands can be any of the JavaScript data types, as well as objects or arrays.
    The '===' operator checks for equal value and equal type.
    We want the type of parameter added to be equal to an 'object'......a pokemon.
  /*
   Object keys return the properties in the object (for this project properties are name, number, type, etc...)
   pokemonList[0] is the parameter of the Object.keys() method
   pokemonList[0] is the first object in the pokemonList
   The dot notation provide access to an object's properties
   The every() method checks if all elements in an array pass a test
   In the every method, key is a parameter to check for the 'keys' in item parameter which is the pokemon "object" we want to add
  */
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

  //this local function is referenced by the return object
  function getAll() {
    return pokemonList;
  }

  //the return object references the local functions above
  return {
    //addNewItem: addNewItem,
    pokeFilter: pokeFilter,
    add: add, 
    getAll: getAll 
    //the first getAll is property of this object 
    //the second getAll is calling the local function getAll()
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
//logs content retrived from the pokeFilter function in the pokemonRepository 








































































/*
  function showDetails(pokemon){
    console.log()
  }
  */
 /*
  function addNewItem(pokemon) {
    let ulPokemon = document.querySelector('.pokemon-List');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokeButton');
    button.addEventListener('click', showDetails(pokemon))
    listItem.appendChild(button);
    ulPokemon.appendChild(listItem);
  }
  */

/*
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addNewItem(pokemon);
});
*/

/*
pokemonRepository.getAll().forEach(
  function(pokemon) {
    console.log(pokemon.name + ' is a ' + pokemon.type + ' type pokemon.');
  }
)
*/

/*
Object.keys(pokemonRepository.getAll()).forEach( 
  function (pokemon) {
    document.write(pokemon + '<br>');
  }
);
*/

//pokemonRepository.getAll().forEach(function (pokemon));
//adds a new object (a pokemon)to the pokemonList

//console.log(pokemonRepository.getAll());
//logs to console all objects on pokemonList including the object I just added

//pokemonRepository.getAll().forEach(function (pokemon)  {
  //pokemonRepository.addNewItem(pokemon)
//});

//pokemonRepository.getAll().forEach(function (pokemon)  {
  //pokemonRepository.propKeys(pokemon)
//});