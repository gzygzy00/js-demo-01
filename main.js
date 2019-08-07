let div = document.createElement('div')
document.body.appendChild(div)
div.className = 'demo'

let dragging = false
let lastX, lastY

div.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

div.onmouseup = function(){
    dragging = false
}

document.body.onmousemove = function (e) {
    if (dragging === true) {
        let deltaX = e.clientX - lastX
        let deltaY = e.clientY - lastY
        let top = parseInt(div.style.top) || 0
        let left = parseInt(div.style.left) || 0
        div.style.top = top + deltaY + 'px'
        div.style.left = left + deltaX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }

}
