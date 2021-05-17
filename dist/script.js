let pokemonRepository = (function () {
  let t = [],
    e = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  function n(e) {
    "object" == typeof e
      ? t.push(e)
      : alert(e.name + " is not an applicable entry in the Pokedex!");
  }
  function o(t) {
    pokemonRepository.loadDetails(t).then(function () {
      !(function (t) {
        let e = $(".modal-body");
        e.empty();
        let n = document.createElement("h1");
        (n.innerText = t.name), n.classList.add("text-capitalize");
        let o = $('<img class="pokemon-image" height="200px" width="200px">');
        o.attr("src", t.imageUrl);
        let i = $("<p>Height : " + t.height + "</p>"),
          a = $("<p>Weight : " + t.weight + "</p>");
        e.append(n), e.append(o), e.append(i), e.append(a);
      })(t);
    });
  }
  return {
    showDetails: o,
    addListItem: function (t) {
      let e = document.querySelector(".pokemon-list"),
        n = document.createElement("li");
      n.classList.add("list-group-item"),
        n.classList.add("list-group-item-light");
      let i = document.createElement("button");
      (i.innerText = t.name),
        i.classList.add("text-capitalize"),
        i.classList.add("btn-light"),
        i.setAttribute("data-toggle", "modal"),
        i.setAttribute("data-target", "#pokeModal"),
        n.append(i),
        e.append(n),
        i.addEventListener("click", function () {
          o(t);
        });
    },
    add: n,
    getAll: function () {
      return t;
    },
    loadList: function () {
      return fetch(e)
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t, e) {
            n({
              name: t.name,
              detailsUrl: t.url,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                e + 1
              }.png`,
            });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: function (t) {
      let e = t.detailsUrl;
      return fetch(e)
        .then(function (t) {
          return t.json();
        })
        .then(function (e) {
          (t.imageUrl = e.sprites.front_default),
            (t.height = e.height),
            (t.weight = e.weight);
        })
        .catch(function (t) {
          console.error(t);
        });
    },
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
