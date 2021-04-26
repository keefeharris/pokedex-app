let pokemonRepository = (function () {
  let pokemonList = [];

  pokemonList = [
    {
      name: "Bulbasaur",
      number: "#001",
      type: "grass",
      weaknesses: ["fire", "psychic", "flying", "ice"],
    },

    {
      name: "Charmander",
      number: "#004",
      type: "fire",
      weaknesses: ["water", "ground", "rock"],
    },

    {
      name: "Squirtle",
      number: "#007",
      type: "water",
      weaknesses: ["grass", "electric"],
    },
  ];

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add(".button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
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
