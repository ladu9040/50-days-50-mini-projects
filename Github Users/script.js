const APIURL =  'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try {
        const{data} = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    }catch(err) {
    if(err.response.status == 404) {
        createErrorCard('No profile with this username')
    }
  }
}

async function getrepos(username) {
    try {
        const {data} = await axios(APIURL + username + '/repos?sort=cretaed')
        addReposToCard(data)
    } catch(err) {
        createErrorCard('problem fetching repos')
    }
}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<P>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
    <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
    <h2>${userID}</h2>
    ${userBio}
    <ul>
    <li>${user.followers} <strong>Followers</strong></li>
    <li>${user.following} <strong>Following</strong></li>
    <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>
    
    <div id="repos"></div>
    </div>
    </div>
    `

    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
   const reposE1 =document.getElementById('repos')

   repos.slice(0, 5)
   .forEach(repo => {
    const repoE1 = document.createElement('a')
    repoE1.classList.add('repo')
    repoE1.href = repo.html_url
    repoE1.target = '_blank'
    repoE1.innerText = repo.name

    reposE1.appendChild(repoE1)
   })
}

form.add('submit', (e) => {
    e.preventDefault()

    const user = search.ariaValueMax
    if(user) {
        getUser(user)

        search.value = ''
    }
})