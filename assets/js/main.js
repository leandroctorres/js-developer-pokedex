const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const loadKantoButton = document.getElementById('loadKantoButton')
const loadJohtoButton = document.getElementById('loadJohtoButton')
const loadHoennButton = document.getElementById('loadHoennButton')
const loadSinnohButton = document.getElementById('loadSinnohButton')
const loadUnovaButton = document.getElementById('loadUnovaButton')




const maxRecords = 649
const limit = 15
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

//kanto
function loadPokemonKantoItens(offset, limit) {
	pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
			const newHtml = pokemons.map(convertPokemonToLi).join('')
			pokemonList.innerHTML = newHtml
	})
}

loadPokemonKantoItens(offset, limit)


loadKantoButton.addEventListener('click', () => {
	offset = 0
	const qtdRecordsWithNexPage = offset + limit

	if (qtdRecordsWithNexPage >= maxRecords) {
			const newLimit = maxRecords - offset
			loadPokemonKantoItens(offset, newLimit)

			loadMoreButton.parentElement.removeChild(loadMoreButton)
	} else {
		loadPokemonKantoItens(offset, limit)
	}
})

//Johto
function loadPokemonJohtoItens(offset, limit) {
	pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
			const newHtml = pokemons.map(convertPokemonToLi).join('')
			pokemonList.innerHTML = newHtml
	})
}

//loadPokemonJohtoItens(offset, limit)


loadJohtoButton.addEventListener('click', () => {
	offset = 151
	const qtdRecordsWithNexPage = offset + limit

	if (qtdRecordsWithNexPage >= maxRecords) {
			const newLimit = maxRecords - offset
			loadPokemonJohtoItens(offset, newLimit)

			loadMoreButton.parentElement.removeChild(loadMoreButton)
	} else {
		loadPokemonJohtoItens(offset, limit)
	}
})

//Hoenn
function loadPokemonHoennItens(offset, limit) {
	pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
			const newHtml = pokemons.map(convertPokemonToLi).join('')
			pokemonList.innerHTML = newHtml
	})
}

//loadPokemonHoennItens(offset, limit)


loadHoennButton.addEventListener('click', () => {
	offset = 251
	const qtdRecordsWithNexPage = offset + limit

	if (qtdRecordsWithNexPage >= maxRecords) {
			const newLimit = maxRecords - offset
			loadPokemonHoennItens(offset, newLimit)

			loadMoreButton.parentElement.removeChild(loadMoreButton)
	} else {
		loadPokemonHoennItens(offset, limit)
	}
})

//Sinnoh
function loadPokemonSinnohItens(offset, limit) {
	pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
			const newHtml = pokemons.map(convertPokemonToLi).join('')
			pokemonList.innerHTML = newHtml
	})
}

//loadPokemonSinnohItens(offset, limit)


loadSinnohButton.addEventListener('click', () => {
	offset = 386
	const qtdRecordsWithNexPage = offset + limit

	if (qtdRecordsWithNexPage >= maxRecords) {
			const newLimit = maxRecords - offset
			loadPokemonSinnohItens(offset, newLimit)

			loadMoreButton.parentElement.removeChild(loadMoreButton)
	} else {
		loadPokemonSinnohItens(offset, limit)
	}
})

//Unova
function loadPokemonUnovaItens(offset, limit) {
	pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
			const newHtml = pokemons.map(convertPokemonToLi).join('')
			pokemonList.innerHTML = newHtml
	})
}

//loadPokemonUnovaItens(offset, limit)


loadUnovaButton.addEventListener('click', () => {
	offset = 493
	const qtdRecordsWithNexPage = offset + limit

	if (qtdRecordsWithNexPage >= maxRecords) {
			const newLimit = maxRecords - offset
			loadPokemonUnovaItens(offset, newLimit)

			loadMoreButton.parentElement.removeChild(loadMoreButton)
	} else {
		loadPokemonUnovaItens(offset, limit)
	}
})

