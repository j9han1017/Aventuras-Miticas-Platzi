<h1 align="center"><b> AVENTURAS MITICAS </b><img src="https://images.emojiterra.com/google/android-12l/512px/1f3f0.png" width="35"></h1>
<div align="center" width="50">

## DE QUE TRATA EL JUEGO:
Este proyecto implementa un juego de aventuras interactivo donde el jugador elige entre tres personajes y se enfrenta a enemigos a través de diferentes ataques. El juego se desarrolla en un mapa visualizado mediante un canvas, con interacciones de usuario mediante teclas y botones.

## FUNCIONALIDADES PRINCIPALES
### Seleccionar personaje
- Al iniciar el juego, el jugador puede elegir entre tres personajes: Reina, Draco y Sir.
- El personaje seleccionado se muestra en pantalla y se inicia la partida.

### Ataques y Combate.
- Cada personaje tiene una serie de ataques representados por emojis (⚔️, 🐉, 💎).
- El jugador elige un ataque, y el enemigo realiza un ataque aleatorio.
- Los resultados del combate se muestran en la interfaz..

### Mapa de Aventuras
- El juego se desarrolla en un mapa visualizado en un canvas.
- Los personajes se mueven utilizando las teclas de flecha del teclado.
- Se detectan colisiones y se muestra una pantalla de selección de ataques cuando ocurren.

### Resultados y Reinicio
- Se muestran mensajes de resultado en la interfaz del juego.
- Al finalizar la partida, se indica si fue un empate, una victoria o una derrota.
- Se proporciona la opción de reiniciar el juego.

#### Implementación Técnica
### Estructura del Código
- El código está organizado en funciones y clases que gestionan diferentes aspectos del juego.
- Se utiliza JavaScript para la lógica del juego y manipulación del DOM.
- La interfaz de usuario se estiliza con CSS.

#### Mapa y Canvas
- El mapa se representa mediante un canvas HTML5, actualizado periódicamente para mostrar animaciones.
- Se utilizan funciones de detección de colisiones para gestionar encuentros con enemigos.

### Interfaz de Usuario (UI)
- La interfaz se construye dinámicamente utilizando JavaScript para mostrar tarjetas de personajes, ataques y mensajes.
- Se emplea CSS para estilizar la interfaz y proporcionar una experiencia visual atractiva.

### Requerimientos del Sistema
- El juego utiliza tecnologías web estándar y se espera que se ejecute en cualquier navegador moderno.
- Se asume que el servidor está disponible en http://localhost:8080 para la interacción con el juego.

### Instrucciones de Uso
- Abre el archivo index.html en un navegador web.
- Selecciona un personaje al iniciar el juego.
- Utiliza las flechas del teclado para mover tu personaje en el mapa.
- Selecciona ataques con los botones correspondientes.
- Supera a tus enemigos y observa los resultados del combate.
- Al finalizar, reinicia el juego si lo deseas.
¡Explora el fascinante mundo de las aventuras y demuestra tu destreza en la batalla!
