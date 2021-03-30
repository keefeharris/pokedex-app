let pokemonRepository = (function() {
  let pokemonList = [];
  //an array name pokemonList is created

  pokemonList = [
    //object is added to array
    {
      name: 'Bulbasaur',
      number: '#001',
      type: ['grass'],
      height: '2.04m',
      weight: '15.2kg',
      weaknesses: ['fire', 'psychic', 'flying', 'ice']
    },
    //object is added to array
    {
      name: 'Charmander',
      number: '#004',
      type: ['fire'],
      height: '2.0m',
      weight: '18.7kg',
      weaknesses: ['water', 'ground', 'rock']
    },
    //object is added to array
    {
      name: 'Squirtle',
      number: '#007',
      type: ['water'],
      height: '1.08m',
      weight: '19.8kg',
      weaknesses: ['grass', 'electric']
    }
  ];

  //this local function is referenced by the return object
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //this local function is referenced by the return object
  function getAll() {
    return pokemonList;
  }

  //the return object references the local functions above
  return {
    add: add, 
    //the first add is property of this object 
    //the second add is calling the local function add()
    getAll: getAll 
    //the first getAll is property of this object 
    //the second getAll is calling the local function getAll()
  }
})();

function pokemonLoop(user) {
  if (user.weaknesses.length > 2) {
    document.write(user.name + ' is vulnerable to at least 3 type of pokemon. <br>');
  } else {
    document.write(user.name + ' is vulnerable to a maximum of 2 types of pokemon. <br>');
  }
}

console.log(pokemonRepository.getAll()); //logs to console all objects on pokemonList
pokemonRepository.add({
name: 'Dratini', 
number: '#147', 
type: ['dragon'], 
height: '1.8m', 
weight: '3.3kg', 
weaknesses: ['ice', 'dragon', 'fairy']
}); //adds a new object to the pokemonList
console.log(pokemonRepository.getAll());





















//console.log(pokemonList.length);
//logs on to the console the length of my array

/*
the for loop says if 'i' is less than the length of values in the pokemonList array,
keep adding 1 to i
*/

//for(let i = 0; i < pokemonList.length; i++) {
  //document.write(pokemonList[i].name + ' is a ' + pokemonList[i].type + ' type pokemon. <br>');
  //the document.write function write text directly to html
  //pokemonList[i].name calls the name of the pokemon positioned at number "i" in the pokemonList array
  //the other charachters are strings that form a sentence in html
  //<br> element produce a line break in a sentence
//}













