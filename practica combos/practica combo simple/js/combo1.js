//evento que carga la función automaticamente
window.onload = function(){
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";
    //evento que permite cambian el objeto onchange
    document.getElementById("stadium").onchange = function(e){
        //destino del valor seleccionado por el usuario
        let n = e.target.value;
        //expresiones que guardan las imágenes de los estadios y la información de cada uno...
        let imagen = "<img src='img/" + n + ".jpg' class='' alt='estadio' />";
        let text = ["Ciudad: Al Rayyan - Capacidad 60.000 espectadores", "Ciudad: Al Khor City - Capacidad 60.000 espectadores",
        "Ciudad: Al Wakrah - Capacidad 40.000 espectadores",
        "Ciudad: Al Doha - Capacidad 40.000 espectadores",
        "Ciudad: Al Rayyan - Capacidad 40.000 espectadores",
        "Ciudad: Al Doha - Capacidad 45.416 espectadores",
        "Ciudad: Al Doha - Capacidad 80.000 espectadores",
        "Ciudad: Al Doha - Capacidad 40.000 espectadores",
        ];
        //salida de las imágenes y los textos informativos...
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n - 1];
    };
};

//función del botón reiniciar
document.getElementById("btn-clean").onclick = function(){
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";
    //limpia los textos de los estadios...
    document.getElementById("output-txt").innerHTML = "";
    //dejar el select con el texto por defecto...
    document.getElementById("stadium").value = "";
};