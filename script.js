let cronometro = document.querySelector('.display')
let h = 0
let m = 0
let s = 0
let ms = 0
rum = false

function updateT() {
    ms++
    if (ms >= 100) {
        ms = 0
        s++
        if (s >= 60) {
            s = 0
            m++
            if (m >= 60) {
                m = 0
                h++
            }
        }
    }
    // FORMATAR O TEMPO
    // let fh = h < 10 ? "0" + h : h
    // let fm = m < 10 ? "0" + m : m
    // let fs = s < 10 ? "0" + s : s
    // let fms = ms < 10 ? "0" + ms : ms
    let txt = `${h}:${m}:${s}:${ms}`
    // Dom
    cronometro.innerText = txt
}

//botao dom
function startStop() {
    if (rum) {
        clearInterval(time)
        rum = false
        document.querySelector('.but').innerText = 'Iniciar'
    } else {
        time = setInterval(updateT, 1)
        rum = true
        document.querySelector('.but').innerText = 'Parar'
    }
}

function salvar() {
    let ul = document.querySelector('ul')

    let li = document.createElement('li')
    li.innerHTML = cronometro.innerText
    ul.append(li)
}