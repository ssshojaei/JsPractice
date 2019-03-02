const output = document.getElementById('output')
const pushBtn = object => {
    const value = object.innerHTML
    if (value == '=') {
        output.innerHTML = eval(output.innerHTML)
    }
    else if (value == 'AC'){
        output.innerHTML = 0
    }
    else {
        if (output.innerHTML == '0'){
            output.innerHTML = value
        }
        else {
            output.innerHTML += value
        }
    }
}