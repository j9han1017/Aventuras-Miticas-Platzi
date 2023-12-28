const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPersonajeJugador = document.getElementById('boton-personaje')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
const spanPersonajeJugador = document.getElementById('personaje-jugador')

const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let Personajes = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDePersonajes
let inputReina
let inputDraco
let inputSir
let ataquesPersonajeEnemigo
let personajeJugador
let ataquesPersonaje
let botonCaballero
let botonDragon
let botonTesoro
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

class personajeAventurasMiticas {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let reina = new personajeAventurasMiticas('Reina', './assets/reinajoya.png', 5)
let draco = new personajeAventurasMiticas('Draco', './assets/draco.png', 5)
let sir = new personajeAventurasMiticas('Sir', './assets/sir.png', 5)

reina.ataques.push({ nombre: '💎', id: 'boton-tesoro' }, { nombre: '💎', id: 'boton-tesoro' }, { nombre: '💎', id: 'boton-tesoro' }, { nombre: '⚔', id: 'boton-caballero' }, { nombre: '🐉', id: 'boton-dragon' },)
draco.ataques.push({ nombre: '🐉', id: 'boton-dragon' }, { nombre: '🐉', id: 'boton-dragon' }, { nombre: '🐉', id: 'boton-dragon' }, { nombre: '💎', id: 'boton-tesoro' }, { nombre: '⚔', id: 'boton-caballero' },)
sir.ataques.push({ nombre: '⚔', id: 'boton-caballero' }, { nombre: '⚔', id: 'boton-caballero' }, { nombre: '⚔', id: 'boton-caballero' }, { nombre: '💎', id: 'boton-tesoro' }, { nombre: '🐉', id: 'boton-dragon' },)
Personajes.push(reina, draco, sir)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    Personajes.forEach((mokepon) => {
        opcionDePersonajes = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDePersonajes
        inputReina = document.getElementById('Reina')
        inputDraco = document.getElementById('Draco')
        inputSir = document.getElementById('Sir')
    })
    botonPersonajeJugador.addEventListener('click', seleccionarpersonajeJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarpersonajeJugador() {
    sectionSeleccionarPersonaje.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    if (inputReina.checked) {
        spanPersonajeJugador.innerHTML = inputReina.id
        personajeJugador = inputReina.id
    } else if (inputDraco.checked) {
        spanPersonajeJugador.innerHTML = inputDraco.id
        personajeJugador = inputDraco.id
    } else if (inputSir.checked) {
        spanPersonajeJugador.innerHTML = inputSir.id
        personajeJugador = inputSir.id
    } else { alert('Selecciona un personaje') }
    extraerAtaques(personajeJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(personajeJugador) {
    let ataques
    for (let i = 0; i < Personajes.length; i++) { if (personajeJugador === Personajes[i].nombre) { ataques = Personajes[i].ataques } }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPersonaje = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPersonaje
    })
    botonCaballero = document.getElementById('boton-caballero')
    botonDragon = document.getElementById('boton-dragon')
    botonTesoro = document.getElementById('boton-tesoro')
    botones = document.querySelectorAll('.BAtaque')



}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '⚔') {
                ataqueJugador.push('CABALLERO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'  
                boton.disabled = true; 
            } else if (e.target.textContent === '🐉') {
                ataqueJugador.push('DRAGON')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            } else {
                ataqueJugador.push('TESORO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}

function seleccionarMascotaEnemigo() {
    let personajeAleatorio = aleatorio(0, Personajes.length -1)

    spanPersonajeEnemigo.innerHTML = Personajes[personajeAleatorio].nombre
    ataquesPersonajeEnemigo = Personajes[personajeAleatorio].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
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
function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
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
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
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
    botonCaballero.disabled = true
    botonDragon.disabled = true
    botonTesoro.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() { location.reload() }

function aleatorio(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }
window.addEventListener('load', iniciarJuego)