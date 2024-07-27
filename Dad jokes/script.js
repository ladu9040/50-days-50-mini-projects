const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


jokeBtn.addEventListener('click', generatejoke)

generatejoke()


async function generatejoke() {
    const config = {
        headers: {
            Accept: 'appllication.json',
        },
    }

    const res = await fetch('#', config)

    const data = await res.json()

    jokeE1.innerHTML = data.joke
}