const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonpersonajeJugador = document.getElementById('boton-personaje')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarpersonaje = document.getElementById('seleccionar-personaje')
const spanPersonajeJugador = document.getElementById('personaje-jugador')

const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let personajes = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDePersonajes
let inputReina
let inputDraco
let inputSir
let personajeJugador
let personajeJugadorObjeto
let ataquesPersonaje
let ataquesPersonajeEnemigo
let botoncaballero
let botondragon
let botontesoro
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mapa.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Aventuras {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarAventuras() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let reina = new Aventuras('Reina', './assets/reinajoya.png', 5, './assets/reina,cabeza.png')

let draco = new Aventuras('Draco', './assets/draco.png', 5, './assets/draco,cabeza.png')

let sir = new Aventuras('Sir', './assets/sir.png', 5, './assets/sir,cabeza.png')

let reinaEnemigo = new Aventuras('Reina', './assets/reina.png', 5, './assets/reina,cabeza.png')

let dracoEnemigo = new Aventuras('Draco', './assets/draco.png', 5, './assets/draco,cabeza.png')

let sirEnemigo = new Aventuras('Sir', './assets/sir.png', 5, './assets/sir,cabeza.png')

reina.ataques.push(
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '💎', id: 'boton-tesoro' },
)

reinaEnemigo.ataques.push(
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '💎', id: 'boton-tesoro' },
)

draco.ataques.push(
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '⚔️', id: 'boton-caballero' },
    
)

dracoEnemigo.ataques.push(
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '⚔️', id: 'boton-caballero' },
    
)

sir.ataques.push(
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '⚔️', id: 'boton-caballero' }, 
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '💎', id: 'boton-tesoro' },
)

sirEnemigo.ataques.push(
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '⚔️', id: 'boton-caballero' }, 
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '💎', id: 'boton-tesoro' },
)

personajes.push(reina,draco,sir)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    personajes.forEach((Aventuras) => {
        opcionDePersonajes = `
        <input type="radio" name="personaje" id=${Aventuras.nombre} />
        <label class="tarjeta-de-Aventuras" for=${Aventuras.nombre}>
            <p>${Aventuras.nombre}</p>
            <img src=${Aventuras.foto} alt=${Aventuras.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDePersonajes

     inputReina = document.getElementById('Reina')
     inputDraco = document.getElementById('Draco')
     inputSir = document.getElementById('Sir')

    })
    
    botonpersonajeJugador.addEventListener('click', seleccionarpersonajeJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarpersonajeJugador() {
    
    sectionSeleccionarpersonaje.style.display = 'none'
    
    if (inputReina.checked) {
        spanPersonajeJugador.innerHTML = inputReina.id
        personajeJugador = inputReina.id
    } else if (inputDraco.checked) {
        spanPersonajeJugador.innerHTML = inputDraco.id
        personajeJugador = inputDraco.id
    } else if (inputSir.checked) {
        spanPersonajeJugador.innerHTML = inputSir.id
        personajeJugador = inputSir.id
    } else {
        alert('Selecciona una personaje')
    }

    extraerAtaques(personajeJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function extraerAtaques(personajeJugador) {
    let ataques
    for (let i = 0; i < personajes.length; i++) {
        if (personajeJugador === personajes[i].nombre) {
            ataques = personajes[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPersonaje = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPersonaje
    })

     botoncaballero = document.getElementById('boton-caballero')
     botondragon = document.getElementById('boton-dragon')
     botontesoro = document.getElementById('boton-tesoro')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '⚔️') {
                ataqueJugador.push('CABALLERO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   
            } else if (e.target.textContent === '🐉') {
                ataqueJugador.push('DRAGON')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else {
                ataqueJugador.push('TESORO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}

function seleccionarpersonajeEnemigo(enemigo) {
    spanPersonajeEnemigo.innerHTML = enemigo.nombre
    ataquesPersonajeEnemigo = enemigo.ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    console.log('Ataques enemigo', ataquesPersonajeEnemigo);
    let ataqueAleatorio = aleatorio(0,ataquesPersonajeEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('CABALLERO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('DRAGON')
    } else {
        ataqueEnemigo.push('TESORO')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'CABALLERO' && ataqueEnemigo[index] === 'TESORO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='DRAGON' && ataqueEnemigo[index] === 'CABALLERO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TESORO' && ataqueEnemigo[index] === 'DRAGON') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal


    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
    personajeJugadorObjeto.x = personajeJugadorObjeto.x + personajeJugadorObjeto.velocidadX
    personajeJugadorObjeto.y = personajeJugadorObjeto.y + personajeJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    personajeJugadorObjeto.pintarAventuras()
    reinaEnemigo.pintarAventuras()
    dracoEnemigo.pintarAventuras()
    sirEnemigo.pintarAventuras()
    if (personajeJugadorObjeto.velocidadX !== 0 || personajeJugadorObjeto.velocidadY !== 0) {
        revisarColision(reinaEnemigo)
        revisarColision(dracoEnemigo)
        revisarColision(sirEnemigo)
    }
}

function moverDerecha() {
    personajeJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    personajeJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
    personajeJugadorObjeto.velocidadY = 5
}

function moverArriba() {
    personajeJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    personajeJugadorObjeto.velocidadX = 0
    personajeJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {

    personajeJugadorObjeto = obtenerObjetopersonaje(personajeJugador)
    console.log(personajeJugadorObjeto, personajeJugador);
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetopersonaje() {
    for (let i = 0; i < personajes.length; i++) {
        if (personajeJugador === personajes[i].nombre) {
            return personajes[i]
        }
        
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribapersonaje = 
        personajeJugadorObjeto.y
    const abajopersonaje = 
        personajeJugadorObjeto.y + personajeJugadorObjeto.alto
    const derechapersonaje = 
        personajeJugadorObjeto.x + personajeJugadorObjeto.ancho
    const izquierdapersonaje = 
        personajeJugadorObjeto.x

    if(
        abajopersonaje < arribaEnemigo ||
        arribapersonaje > abajoEnemigo ||
        derechapersonaje < izquierdaEnemigo ||
        izquierdapersonaje > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarpersonajeEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)