let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else {
      console.log(pokemon.name + " is not an applicable entry in the Pokedex!");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("text-capitalize");
    button.classList.add("btn-light");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModal");
    listItem.append(button);
    pokemonList.append(listItem);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    modalBody.empty();
    //let nameElement = $("<h1>" + pokemon.name + "</h1>");
    let nameElement = document.createElement("h1");
    nameElement.innerText = pokemon.name;
    nameElement.classList.add("text-capitalize");
    let imagePokemon = $('<img class="pokemon-image">');
    imagePokemon.attr("src", pokemon.imageUrl);
    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
    let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");

    modalBody.append(nameElement);
    modalBody.append(imagePokemon);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item, pokemonNumber) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemonNumber + 1
            }.png`,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  return {
    showDetails: showDetails,
    addListItem: addListItem,
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
