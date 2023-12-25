let ataqueJugador

function iniciarJuego(){
let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)    
let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
    
}    

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipego = document.getElementById('Capipego')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucupalma = document.getElementById('Tucupalma')
    let inputPydos = document.getElementById('Pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
       spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipego.checked){
        spanMascotaJugador.innerHTML = 'Capipego'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    }else if (inputTucupalma.checked){
        spanMascotaJugador.innerHTML = 'Tucupalma'
    }else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
    }else{ 
        alert('tienes que seleccionar alguna de las mascotas')
}
seleccionarMascotaEnemigo()}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipego'
    }else if(ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }else if(ataqueAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }else if(ataqueAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Tucupalma'
    }else if(ataqueAleatorio == 6){
        spanMascotaEnemigo.innerHTML = 'Pydos'    
     
 
}




}



function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)
    if(ataqueAleatorio==1){
        ataqueEnemigo='FUEGO'
    }else if(ataqueAleatorio==2){
        ataqueEnemigo='AGUA'
    }else{
        ataqueEnemigo='TIERRA'}
    crearMensaje()}

    function crearMensaje(){
    let sectionMensajes=document.getElementById('mensajes')
    let parrafo=document.createElement('p')
    parrafo.innerHTML='Tu mascota atacó con '+ataqueJugador+', las mascota del enemigo atacó con '+ataqueEnemigo+'- PENDIENTE'
    sectionMensajes.appendChild(parrafo)
}



function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)