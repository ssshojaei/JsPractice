const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const painting = document.getElementById('box')
const paint_style = getComputedStyle(painting)
let color = '#00CC99'
let size = 3
let pos = 50

canvas.width = parseInt(paint_style.getPropertyValue('width'))
canvas.height = parseInt(paint_style.getPropertyValue('height'))

let mouse = { x: 0, y: 0 }

canvas.onmousemove = e => {
    mouse.x = e.offsetX + pos
    mouse.y = e.offsetY + pos
}

ctx.lineWidth = size
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.strokeStyle = color

canvas.onmousedown = e => {
    ctx.beginPath()
    ctx.moveTo(mouse.x, mouse.y)
    canvas.addEventListener('mousemove', onPaint, false)
}

canvas.onmouseup = () => {
    canvas.removeEventListener('mousemove', onPaint, false)
}

const onPaint = () => {
    ctx.lineTo(mouse.x, mouse.y)
    ctx.stroke()
}
const pushColor = e => {
    color = e.id
    ctx.strokeStyle = color
}
const paletteColor = e => {
    color = e.value
    ctx.strokeStyle = color
}
const pushSize = e => {
    size = e.value
    pos = size * 2.5
    ctx.lineWidth = size
}