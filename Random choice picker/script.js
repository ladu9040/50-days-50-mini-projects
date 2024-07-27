const tagsE1 = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => {
        tagsE1.innerHTML = ''

        tags.forEach(tag => {
            const tagE1 =document.createElement('span')
            tagE1.classList.add('tag')
            tagE1.innerText = tag
            tagE1.appendChild(tagE1)

            
        });
    })
}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined){
            highLightTag(randomTag)

            setTimeout(() => {
                unHighLightTag(randomTag)
            }, 100)
        }
    },100)

}


function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highLightTag(tag) {
    tag.classList.add ('highlight')
    
}

function unHighLightTag (tag){
    tag.classList.remove('highlight')

}