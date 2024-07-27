const testimonilasConntainer = document.querySelector('.testimonials-contatiner')
const testimonial = document.querySelector('.testimonial')
const userImage =  document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'laxman subudhi',
        position: 'web developing'
        photo: '#',
        Text : "I have wirked with literally hundreds of html,css p[rojects."

    },
    {
        name: 'nilipta palai',
        position: 'web developing'
        photo: '#',
        Text : "I have wirked with literally hundreds of html,css p[rojects."

    },
    {
        name: 'kanhucharan beja',
        position: 'web developing'
        photo: '#',
        Text : "I have wirked with literally hundreds of html,css p[rojects."

    },
]

let idx = 1

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx>testimonials.length - 1) [
        idx = 0
    ]
}

setInterval(updateTestimonial, 100000)

