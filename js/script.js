let pokemonRepository = (function() {
  let pokemonList = [];
  //an array name pokemonList is created

  pokemonList = [
    //object is added to array
    {
      name: 'Bulbasaur',
      number: '#001',
      type: ['grass'],
      height: 2.04,
      weight: 15.2,
      weaknesses: ['fire', 'psychic', 'flying', 'ice']
    },
    //object is added to array
    {
      name: 'Charmander',
      number: '#004',
      type: ['fire'],
      height: 2.0,
      weight: 18.7,
      weaknesses: ['water', 'ground', 'rock']
    },
    //object is added to array
    {
      name: 'Squirtle',
      number: '#007',
      type: ['water'],
      height: 1.08,
      weight: 19.8,
      weaknesses: ['grass', 'electric']
    }
  ];

  //forEach() uses pokemonList[] to iterate objects like the for loop
  //a function declaration is passed as a parameter
  pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + ' is a ' + pokemon.type + ' type pokemon.<br>');
    //What forEach() does is pass this function for each element in the array
  })

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

//for(let i = 0; i < pokemonList.length; i++) {
  //for loop goes through each object in array
  //if (pokemonList[i].weaknesses.length > 2) {
    //the length of the weakness array is selected from pokemonList array to carry out condition 
    //template literal were used to specify strings instead of "+" and "''".
    /*
    if the object has more than 2 weakness the first document.write statement goes to the document.
    if the object has less than 2 weakness the second document.write statment goes to the document.
    */
    //document.write(`${pokemonList[i].name} is vulnerable to at least 3 type of pokemon. <br>`);
  //} else {
    //document.write(`${pokemonList[i].name} is vulnerable to a maximum of 2 types of pokemon. <br>`);
  //}
//}











