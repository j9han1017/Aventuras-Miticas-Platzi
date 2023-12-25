let sectionSeleccionarAtaque
let sectionReiniciar

let botonPersonajeJugador
let botonDragon
let botonCaballero
let botonTesoro
let botonReiniciar

let sectionSeleccionarPersonaje
let spanPersonajeJugador

let ataqueAleatorio
let spanPersonajeEnemigo

let spanVidasJugador
let spanVidasEnemigo

let sectionMensajes
let ataquesDelJugador
let ataquesDelEnemigo
let contenedorAtaques = document.getElementById('contenedorAtaques')

let personajes = []
let ataqueJugador
let ataqueEnemigo
let opcionDePersonajes
let inputReina
let inputDraco
let inputSir
let personajeJugador
let ataquesPersonaje

let contenedorTarjetas 
let vidasJugador = 3
let vidasEnemigo = 3

class AventurasMisticas {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Reina = new AventurasMisticas('Reina', 'assest/reinajoya.png', 5)
let Draco = new AventurasMisticas('Draco', 'assest/draco.png', 5)
let Sir = new AventurasMisticas('Sir', 'assest/sir.png', 5)
 

Reina.ataques.push(
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '⚔️', id: 'boton-caballero' }
)

Draco.ataques.push(
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '🐉', id: 'boton-dragon' },
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '⚔️', id: 'boton-caballero' }
)

Sir.ataques.push(
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '⚔️', id: 'boton-caballero' },
    { nombre: '💎', id: 'boton-tesoro' },
    { nombre: '🐉', id: 'boton-dragon' }
)


personajes.push(Reina, Draco, Sir)

function iniciarJuego() {
    sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    contenedorTarjetas = document.getElementById('contenedorTarjetas')
    personajes.forEach((AventurasMisticas) => {
        opcionDePersonajes = `
     <input type="radio" name="personaje" id=${AventurasMisticas.nombre}>
        <label class="tarjeta-de-aventuras" for=${AventurasMisticas.nombre}>
     <p id=nombre>${AventurasMisticas.nombre}</p>
     <img src=${AventurasMisticas.foto} alt=${AventurasMisticas.nombre}>
    </label>`
    
    contenedorTarjetas.innerHTML += opcionDePersonajes

    inputReina = document.getElementById('Reina')
    inputDraco = document.getElementById('Draco')
    inputSir = document.getElementById('Sir')
    })

    sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    botonPersonajeJugador = document.getElementById('boton-personaje')
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)

    botonDragon = document.getElementById('boton-dragon')
    botonDragon.addEventListener('click', ataqueDragon)

    botonCaballero = document.getElementById('boton-caballero')
    botonCaballero.addEventListener('click', ataqueCaballero)

    botonTesoro = document.getElementById('boton-tesoro')
    botonTesoro.addEventListener('click', ataqueTesoro)

    botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)


}

function seleccionarPersonajeJugador() {
    sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
    sectionSeleccionarPersonaje.style.display = 'none'


    sectionSeleccionarAtaque.style.display = 'flex'

    inputReina = document.getElementById('Reina')
    inputDraco = document.getElementById('Draco')
    inputSir = document.getElementById('Sir')
    spanPersonajeJugador = document.getElementById('personaje-jugador')

    if (inputReina.checked) {
        spanPersonajeJugador.innerHTML = inputReina.id
        personajeJugador = inputReina.id
    } else if (inputDraco.checked) {
        spanPersonajeJugador.innerHTML = inputDraco.id
        personajeJugador = inputDraco.id
    } else if (inputSir.checked){
        spanPersonajeJugador.innerHTML = inputSir.id
        personajeJugador = inputSir.id
    } else {
        alert('Tienes que seleccionar algun personaje')
    }

    extraerAtaques(personajeJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(personajeJugador){
    let ataques
    for (let i = 0; i < personajes.length; i++) {
       if (personajeJugador === personajes[i].nombre) {
            ataques = personajes[i].ataques
       }
       console.log(ataques)
       mostrarAtaques(ataques)

    }
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataque)=>{
      ataquesPersonaje =` 
      <button id=${ataque.id} class="botones-ataque">${ataque.nombre}</button>`
      contenedorAtaques = document.getElementById('contenedorAtaques')
      contenedorAtaques.innerHTML += ataquesPersonaje 
    })
}

function seleccionarMascotaEnemigo() {
    ataqueAleatorio = aleatorio(0, personajes.length -1)
    spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    spanPersonajeEnemigo.innerHTML = personajes[ataqueAleatorio].nombre




}

function ataqueDragon() {
    ataqueJugador = 'DRAGON'
    ataqueAleatorioEnemigo()
}

function ataqueCaballero() {
    ataqueJugador = 'CABALLERO'
    ataqueAleatorioEnemigo()
}

function ataqueTesoro() {
    ataqueJugador = 'TESORO'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'DRAGON'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'CABALLERO'
    } else {
        ataqueEnemigo = 'TESORO'
    }
    combate()
}

function combate() {
    spanVidasJugador = document.getElementById('vidas-jugador')
    spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'DRAGON' && ataqueEnemigo == 'TESORO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'CABALLERO' && ataqueEnemigo == 'DRAGON') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TESORO' && ataqueEnemigo == 'CABALLERO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES! GANASTES')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('LO SIENTO PERDISTES =(')
    }
}

function crearMensaje(resultado) {
    sectionMensajes = document.getElementById('resultado')
    ataquesDelJugador = document.getElementById('ataques-del-jugador')
    ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal


    botonDragon = document.getElementById('boton-dragon')
    botonDragon.disabled = true
    botonCaballero = document.getElementById('boton-caballero')
    botonCaballero.disabled = true
    botonTesoro = document.getElementById('boton-tesoro')
    botonTesoro.disabled = true

    sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)