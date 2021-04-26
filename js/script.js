let pokemonRepository = (function () {
  //pokemon from the API will fill this array
  //apiUrl is the link to the pokemon API we will use for our objects
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add(".button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  //promise function (loadList) is created to fetch API (by using apiUrl variable) then it will return a response object thats converted with .json
  //then a function with json parameter (the main object) is passed, for each pokemon (results), a pokemon variable is created with 2 keys, name & detailsURL. the parameter "item" is the unnamed object under results and using dot notation we access the name.
  //for each pokemon thats iterated, we use the add function to add the pokemon (add(pokemon))
  function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json(); 
      }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            }; add(pokemon);
  }

  function add(pokemon) {
    if (typeof pokemon === "object") {
      console.log(
        "Is this a pokemon? " +
          Object.keys(pokemonList[0]).every((property) => property in pokemon)
      );
      if (
        Object.keys(pokemonList[0]).every((property) => property in pokemon)
      ) {
        alert(
          "New pokemon named " + pokemon.name + " has been added to Pokedex."
        );
      }
      pokemonList.push(pokemon);
    } else {
      alert(pokemon.name + " is not an applicable entry in the Pokedex!");
    }
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    addListItem: addListItem,
    getAll: getAll,
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.add({
  name: "Dratini",
  number: "#147",
  type: "dragon",
  weaknesses: ["ice", "dragon", "fairy"],
});

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

/*
function showDetails(pokemon) {
    for (pokemon = 0; pokemon < pokemonList.length; pokemon++) {
      console.log(pokemonList[pokemon].name);
    }
  }

  pokeFilter: pokeFilter,

  function pokeFilter() {
    let filt = pokemonList.filter(function (pokemon) {
      return pokemon.name === "Dratini";
    });
    console.log(filt);
  }
*/
