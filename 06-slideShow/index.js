let count = 0
const slides = []
const imgs = document.getElementsByClassName('item')
let dot = ''

// set images list
for (let i = 0; i < imgs.length; i++){
    slides[i] = imgs[i].src
    dot += `<button class="dot" id="dot_${i}" onClick="sliderPoint(this)" value="${i}"></button>`
}

const setImg = () => {
    document.getElementById('slide').src = slides[count]
    document.getElementById(`dot_${count}`).style.background = '#333333'
    if (count >= 1) {
        document.getElementById(`dot_${count-1}`).style.background = '#eeeeee'
    }
    else {
        document.getElementById(`dot_${document.getElementsByClassName('dot').length-1}`).style.background = '#eeeeee'
    }
    if (count < imgs.length - 1) {
        count++
    }
    else {
        count = 0
    }
    setTimeout(setImg, 5000)
}

document.getElementById('dots').innerHTML = dot
window.onload = setImg

const sliderPoint = e => {
    console.log(e.value)
    count = e.value
}