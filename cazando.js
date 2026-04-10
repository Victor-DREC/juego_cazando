let canvas=document.getElementById("areaDeJuego");
let ctx=canvas.getContext("2d");

//posicion comida
let comidaX=0;
let comidaY=0;
//Definimos el tamaño del "gato" (rectángulo)
const anchoGato = 80;
const altoGato = 50;
//Definimos el tamaño del cuadrado
const altoComida = 20;
const anchoComida = 20;  
//posicion gato
// Calculamos el centro exacto del canvas
// (Ancho del canvas / 2) - (Ancho del objeto / 2)
let gatoX= (canvas.width / 2) - (anchoGato / 2);
let gatoY= (canvas.height / 2) - (altoGato / 2);
let puntos=0;
let tiempo = 10; 

function graficarGato() {
    //color del gato
    let colorG= "#1900ff";
    graficarRectangulo(gatoX, gatoY, anchoGato,altoGato, colorG);
}

function graficarComida() {
    graficarRectangulo(comidaX,comidaY,anchoComida, altoComida, "#FF0808");
}

function iniciarJuego() {
    if (!window.intervaloActivo) {
        setInterval(restarTiempo, 1000);
        window.intervaloActivo = true; 
    }
    // Llamamos a las funciones que ya creaste
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha() {
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
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

        comidaX = Math.floor(Math.random() * (canvas.width - 20));
        comidaY = Math.floor(Math.random() * (canvas.height - 20));

        iniciarJuego();
    }
}


function restarTiempo() {
    tiempo = tiempo - 1;

    cambiarTexto("tiempo", tiempo);

    if (tiempo <= 0) {
        alert("¡Fin del tiempo!");
        tiempo = 10; 
    }
}