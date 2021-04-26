let pokemonRepository = (function () {
  //pokemon from the API will fill this array
  //apiUrl is the link to the pokemon API we will use for our objects
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //pokemon will be added from the promise function
  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log(pokemon.name + " is not an applicable entry in the Pokedex!");
    }
  }

  //returns pokemon from pokemonList
  function getAll() {
    return pokemonList;
  }

  //an eventListener was added to activate showDetails function when clicked
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add(".button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  //promise function (loadList) is created to fetch API (by using apiUrl variable) then it will return a response object thats converted with .json
  //then a function with json parameter (the main object) is passed, for each pokemon (results), a pokemon variable is created with 2 keys, name & detailsURL. the parameter "item" is the unnamed object under results and using dot notation we access the name.
  //for each pokemon thats iterated, we use the add function to add the pokemon (add(pokemon))
  //the catch function will catch any errors from the api
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //variable url is created and is set to the detailsUrl from the loadList
  //the url variable is used to fetch the response object which is then converted by json
  //then we call another function for the converted response object to get details from the items parameter of the loadDetails function
  //the catch function will catch any errors that occured.
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //loadDetails is going to take information for a specific pokemon
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

//we pass the loadList to get all the pokemon then it will pass the 2 functions (getAll & addListItem) as values
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
