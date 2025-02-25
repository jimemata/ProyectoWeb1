//botones parrafos 
let tam = 18;

//invocar el id aumentarParrafo (incrementar)
document.getElementById("aumentarParrafo").addEventListener("click", function() {
    tam++;
    document.getElementById("miParrafo").style.fontSize = tam + "px";
});

//invocar el id disminuirParrafo (decrementar)
document.getElementById("disminuirParrafo").addEventListener("click", function() {
    tam--;
    document.getElementById("miParrafo").style.fontSize = tam + "px";
});


//funcion de la altura de linea 
document.getElementById("alturaLinea").addEventListener("click", function() {
    document.getElementById("miParrafo").style.lineHeight = "30px";
});

//funcion cambio de cursor de imagen
document.getElementById("tamCursor").addEventListener("click", function() {
    //crear una imagen personalizada para el cursor
    const cursorImage = new Image();
    cursorImage.src = "imagenes/cursor.png";
    // cargar la imagen del cursor usando el evento onload
    cursorImage.onload = function() {
        //establecer la imagen personalizada como cursor
        document.body.style.cursor = `url(${cursorImage.src}) 14 14, auto`;
        // "14 14" son las coordenadas (x, y) del centro del cursor personalizado
    };
});

//funcion alto contraste
document.getElementById("altoContraste").addEventListener("click", function(event) {
    //permite prevenir el comportamiento predeterminado de un evento en un navegador web.
    //es útil cuando se trabaja con eventos de elementos HTML, como hacer clic en enlaces o enviar formularios.
    event.preventDefault();
    //estilo de fondo y color de texto
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
});

//funcion estado normal
document.getElementById("estadoNormal").addEventListener("click", function() {
    document.getElementById("miParrafo").style.fontSize = "large";
    document.getElementById("miParrafo").style.lineHeight = "70px";
    document.getElementById("miParrafo").style.lineHeight = "normal";
    // Para establecer el cursor por defecto
    document.body.style.cursor = "default";
    //contraste normal de pantalla fondo y color de texto
    document.body.style.color = "#000";
    document.body.style.backgroundColor = "#fff";
});