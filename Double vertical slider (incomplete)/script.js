const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slideLength = document.querySelectorAll('div').length

let activeSliderIndex = 0

slideLeft.style.top = `-${(slideLength -  1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const slideHeight = sliderContainer.clientHeight
    if(direction === up) {
        activeSliderIndex++
        if(activeSliderIndex > slideLength - 1) {
            activeSliderIndex = 0
        }
    } else if (direction === down) {
        activeSliderIndex--
        if(activeSliderIndex < 0) {
            activeSliderIndex = slideLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSliderIndex * slideHeight}px)`
    slideLeft.style.transform = `translateY(-${activeSliderIndex * slideHeight}px)`

}