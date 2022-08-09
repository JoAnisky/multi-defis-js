console.log("😎<<--PapiScript-->>")

const body = document.body;

const bl = "black"
const w = "white"
const r = "red"
const g = "green"
const b = "blue"
const p = "pink"
const y = "yellow"

changeBackgroundcolor(bl)

body.addEventListener("keydown", function(event) {
    if (event.key === "r") {
        changeBackgroundcolor(r)
    }
    else if (event.key === "g") {
        changeBackgroundcolor(g)
    }
    else if (event.key === "b") {
        changeBackgroundcolor(b)
    }
    else if (event.key === "p") {
        changeBackgroundcolor(p)
    }
    else if (event.key === "y") {
        changeBackgroundcolor(y)
    }
    else changeBackgroundcolor(w)
})

function changeBackgroundcolor(appletName) {
    body.style.backgroundColor = appletName
}