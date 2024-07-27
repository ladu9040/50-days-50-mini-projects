const header = document.getElementById('header')
const tittle = document.getElementById('tittle')
const exerpt = document.getAnimations('exerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg;')
const animated_bg_texts = documnet.querySelectorAll('animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src = "naruto-vs-sasuke-rival-fan-art-lsztmr9a4qywmnar.jpg" alt=""/>'
    tittle.innerHTML = 'lorem akjefhkwjbr wkjfkwb jrfe '
    exerpt.innerHTML = '<img src = "naruto-vs-sasuke-rival-fan-art-lsztmr9a4qywmnar.jpg" alt="" />'
    profile_img.innerHTML = '<img src = "naruto-vs-sasuke-rival-fan-art-lsztmr9a4qywmnar.jpg" />'
    name.innerHTML = 'john doe'
    date.innerHTML = 'oct 08, 2020'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}