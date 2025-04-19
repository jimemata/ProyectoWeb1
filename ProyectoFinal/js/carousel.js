//variable de arreglo2.jpg
let micarrusel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "imagenes/cloruro_magnesio.png", titulo: "Foto #1" },
    { imageurl: "imagenes/flunixin.jpg", titulo: "Foto #2" },
    { imageurl: "imagenes/fosfato_dicalcico.jpg", titulo: "Foto #3" },
    { imageurl: "imagenes/ivermectina.jpg", titulo: "Foto #4" },
    { imageurl: "imagenes/vitamina_ADE.jpg", titulo: "Foto #5" }
];

// Función para inicializar el carrusel al cargar la página
window.onload = function() {
    // Cargar la primera imagen al iniciar
    cambiar(1);
};

//funcion que permite cambiar las imagenes (anterior y siguiente)
let cambiar = function(mas) {
    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    //almacena la proxima foto
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        //tiene la cantidad total de imagenes
        foto = total;
    }

    //instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
    //permite apuntar al arreglo de las fotos con la ruta da cada una
    document.thumb.src = micarrusel[foto - 1].imageurl;
    //asignacion del ID titulo 
    titulo = document.getElementById('titulo');
    //asignacion del arreglo para para referenciar la foto con el titulo
    titulo.innerText = micarrusel[foto - 1].titulo;
}