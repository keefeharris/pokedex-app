let pokemonRepository = (function () {
  //pokemon from the API will fill this array
  //apiUrl is the link to the pokemon API we will use for our objects
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //returns pokemon from pokemonList
  function getAll() {
    return pokemonList;
  }

  //addListItem is ran for each pokemon from the forEach function outside the pokemonReopository (IIFE)
  //pokemonList selects pokemon-List class in <ul> in index.html
  //listItem creates <li> tags
  //button creates a button element
  //button.classList.add adds css class to the button
  //button.innerText adds the pokemon name to the button through dot notation
  /*
    appendChild attaches element as last-child to element
    <button> becomes child of listItem
    listItem <li> becomes a child of PokemonList <ul>
  */
  //an eventListener was added to the button to activate showDetails function when clicked
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add(".button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }
  /*
    showDetails is called from addEventListener "click"
    dot notation is used to call function loadDetails from the pokemonRepository
    loadDetails contains a promise so the then method is called
    In the then method is a callback function which is executed once a promise is fulfilled 
    once the promise is fulfilled(when the result is available), the callback function in the then method will run (console.log(item))
  */
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  //url variable is item.detailsUrl which comes from the loadList function and in the loadList detailsUrl is set to item.url so all of this equals the json object when you click 'url' in a pokemon name (these are the stats)
  //item.detailsUrl is able to be a variable because of the dot notation used on the pokemonRepository in the showDetails function
  //url is then fetched and creates a promise
  //then function calls back the response object and converts it with json method
  //then another callback function on the json object which is the url with stats
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
        item.weight = details.weight;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //promise function (loadList) is created to fetch API (by using apiUrl variable) then it will return a response object thats converted with .json
  //once that promise is fulfilled, we use the json object (api) in callback function
  //in the callback function, for each pokemon (.results) in json object(.json) we create a pokemon
  //the dot notation is used with the parameter and keys in the .results to create pokemon
  //then we add the pokemon using the add function
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
            height: item.height,
            weight: item.weight,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //pokemon will be added from the promise function loadList
  //if the condition is met, a new pokemon from the converted json object is pushed to the pokemonList
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "weight" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log(pokemon.name + " is not an applicable entry in the Pokedex!");
    }
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
/*
  getAll returns the pokemonList array from the pokemonRepository
  forEach function runs a loop for each pokemon from the .getAll function
  through the addItemList
  What is the pokemon parameter for?
*/
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
