const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innnerHTML = ''

    movies.forEach((movie) => {
        const{title, poster_path, vote_average, overview} = movie

       const movieE1 = document.createElement('div')
       movieE1.classList.add('movie')

       movieE1.innerHTML = `
       <img src="${IMG_PATH + poster_path}" alt ="${title}">
       <div class = "movie-info">
       <h3>${title}</h3>
       <span class="${getClassByRate(vote_average)}">${vote_average}
       </div>

       <div class="overview>
       <h3>overview</h3>
       ${overview}
       </div>`

       main.appendChild(movieE1)
        
    });
}

function getClassByRate(vote) {
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'

    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    }else{
        window.location.reload()
    }
})