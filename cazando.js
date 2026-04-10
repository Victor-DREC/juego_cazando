let canvas=document.getElementById("areaDeJuego");
let ctx=canvas.getContext("2d");

function graficarGato() {
    // 1. Definimos el tamaño del "gato" (rectángulo)
    const anchoGato = 50;
    const altoGato = 50;

    // 2. Calculamos el centro exacto del canvas
    // (Ancho del canvas / 2) - (Ancho del objeto / 2)
    const x = (canvas.width / 2) - (anchoGato / 2);
    const y = (canvas.height / 2) - (altoGato / 2);

    // 3. Dibujamos el rectángulo
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, anchoGato, altoGato);
}

function graficarComida() {
    const tamañoComida = 20; // Definimos el tamaño del cuadrado

    // La esquina superior izquierda siempre es X=0, Y=0
    const x = 0;
    const y = 0;

    ctx.fillStyle = "#FF0000"; // Color rojo para la comida
    ctx.fillRect(x, y, tamañoComida, tamañoComida);
}

function iniciarJuego() {
    // Llamamos a las funciones que ya creaste
    graficarGato();
    graficarComida();
}