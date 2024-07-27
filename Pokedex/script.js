const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: 'DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: 'F4E7DA',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = ''
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)

}

const createPokemonCard = (pokemon) => {
    const pokemonE1 = document.createElement('div')
    pokemonE1.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]
    pokemonE1.style.backgroundColor = color


const pokemonInnerHTML = `
<div class="img-container">
<img src = "">
</div>
<div class = "info">
<span class = "number">#${id}</span>
<h3 class = "name">${name}</h3>
<small class ="type">Type: <span>${type}</span> </small>
</div>`

pokemonE1.innerHTML = pokemonInnerHTML

poke_container.appendChild(pokemonE1)
}

fetchPokemons()