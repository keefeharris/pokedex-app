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

console.log(pokemonList.length);
//logs on to the console the length of my array

/*
the for loop says if 'i' is less than the length of values in the pokemonList array,
keep adding 1 to i
*/
for(let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' is a ' + pokemonList[i].type + ' type pokemon. <br>');
  //the document.write function write text directly to html
  //pokemonList[i].name calls the name of the pokemon positioned at number "i" in the pokemonList array
  //the other charachters are strings that form a sentence in html
  //<br> element produce a line break in a sentence
}












