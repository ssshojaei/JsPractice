const panel = document.getElementById('left')
const pushBtn = e => {
    const rnd = Math.floor(1 + Math.random() * 1000)
    if (e.innerHTML == 'title'){
        panel.innerHTML += `<h3 id='title_${rnd}' ondblclick="pushInp(this)">Title</h3>`
    }
    else if (e.innerHTML == 'textarea'){
        panel.innerHTML += `<textarea ondblclick="pushInp(this)" id='textarea_${rnd}' placeholder='textarea'></textarea>`
    }
    else {
        panel.innerHTML += `<input ondblclick="pushInp(this)" id='${e.innerHTML}_${rnd}' type='${e.innerHTML}' placeholder='${e.innerHTML}'>`
    }
}

const pushInp = e => {
    if (e.type == 'submit'){
        const editValue = prompt('Enter new label for button')
        document.getElementById(e.id).value = editValue
    }
    else if (e.type == undefined){
        const editTitle = prompt('Enter new title')
        document.getElementById(e.id).innerHTML = editTitle
    }
    else {
        const editPlace = prompt('Enter new placeholder')
        document.getElementById(e.id).placeholder = editPlace
    }
}

const getCode = () => {
    alert (panel.innerHTML)
}