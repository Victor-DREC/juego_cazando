let canvas=document.getElementById("areaDeJuego");
let ctx=canvas.getContext("2d");

//posicion comida
let comidaX=0;
let comidaY=0;
//Definimos el tamaño del "gato" (rectángulo)
const anchoGato = 150;
const altoGato = 120;
//Definimos el tamaño del cuadrado
const altoComida = 20;
const anchoComida = 20;  
//posicion gato
// Calculamos el centro exacto del canvas
// (Ancho del canvas / 2) - (Ancho del objeto / 2)
let gatoX= (canvas.width / 2) - (anchoGato / 2);
let gatoY= (canvas.height / 2) - (altoGato / 2);
let puntos=0;
let tiempo = 15; 
let cronometroIniciado = false;
let identificadorTiempo;
let limiteTiempoActual=15;

// Adicionar al inicio con las demás variables
let imagenGato = new Image();
imagenGato.src = "gato2.png"; 

function graficarGato() {
    //color del gato
    let colorG= "#1900ff";
    graficarRectangulo(gatoX, gatoY, anchoGato,altoGato, colorG);
}

function graficarComida() {
    graficarRectangulo(comidaX,comidaY,anchoComida, altoComida, "#FF0808");
}

function iniciarJuego() {
    imagenGato.onload = function() {
        graficarGato();
        graficarComida();
    };
    if (imagenGato.complete) {
        graficarGato();
        graficarComida();
    }
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    if (cronometroIniciado == false) {
        
        identificadorTiempo = setInterval(restarTiempo, 1000);
        cronometroIniciado = true;
    }
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha() {
    if (cronometroIniciado == false) {
        
        identificadorTiempo = setInterval(restarTiempo, 1000);
        cronometroIniciado = true;
    }
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    if (cronometroIniciado == false) {
        
        identificadorTiempo = setInterval(restarTiempo, 1000);
        cronometroIniciado = true;
    }
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
    if (cronometroIniciado == false) {
        
        identificadorTiempo = setInterval(restarTiempo, 1000);
        cronometroIniciado = true;
    }
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision() {
    if (
        gatoX<(comidaX+anchoComida) &&
        (gatoX+anchoGato)>comidaX &&
        gatoY<(comidaY+altoComida) &&
        (gatoY+altoGato)>comidaY
    ) {
        puntos = puntos + 1;

        cambiarTexto("puntos", puntos);

       if (puntos >= 6) {
            clearInterval(identificadorTiempo);
            alert("¡FELICIDADES! Eres el ganador.");
            reiniciarVariables(); 
        } else {
            limiteTiempoActual=limiteTiempoActual-1;
            tiempo=limiteTiempoActual;
            cambiarTexto("tiempo",tiempo);
            comidaX = Math.floor(Math.random() * (canvas.width - 20));
            comidaY = Math.floor(Math.random() * (canvas.height - 20));
            iniciarJuego();
        }
    }
}


function restarTiempo() {
    tiempo = tiempo - 1;

    cambiarTexto("tiempo", tiempo);

    if (tiempo <= 0) {
    clearInterval(identificadorTiempo);
    alert("GAME OVER - Se agotó el tiempo.");
    reiniciarVariables(); 
}
}


function reiniciarVariables() {
    limpiarCanva();
    
    puntos = 0;
    tiempo = 15;
    cronometroIniciado = false;
    
    
    gatoX = (canvas.width / 2) - 25;
    gatoY = (canvas.height / 2) - 25;

    
    cambiarTexto("puntos", puntos);
    cambiarTexto("tiempo", tiempo);

    iniciarJuego();
}

function ejecutarReiniciar() {
    clearInterval(identificadorTiempo);
    
    cronometroIniciado = false;
    puntos = 0;
    tiempo = 15;
    limiteTiempoActual=15;

    gatoX = (canvas.width / 2) - 25;
    gatoY = (canvas.height / 2) - 25;
    comidaX = 0;
    comidaY = 0;

    limpiarCanva();

    cambiarTexto("puntos", puntos);
    cambiarTexto("tiempo", tiempo);

    graficarGato();
    graficarComida();
}

function graficarGato() {
    ctx.drawImage(imagenGato, gatoX, gatoY, anchoGato, altoGato);
}