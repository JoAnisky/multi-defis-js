const body = document.body;

const bl = "black"
const w = "white"
const r = "red"
const g = "green"
const b = "blue"
const p = "purple"
const y = "yellow"

changeBackgroundcolor(bl)

body.addEventListener("keydown", function(event) {
    if (event.key = "r") {
        changeBackgroundcolor(r)
    }
    else if (event.key = "g") {
        changeBackgroundcolor(g)
    }
    else if (event.key = "b") {
        changeBackgroundcolor(b)
    }
    else if (event.key = "p") {
        changeBackgroundcolor(p)
    }
}

function changeBackgroundcolor(appletName) {
    body.style.backgroundColor = appletName
}