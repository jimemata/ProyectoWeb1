// Obtener el modal
var modal = document.getElementById("modal1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Obtener todas las imágenes con la clase 'myImg'
var imgs = document.getElementsByClassName("myImg");

// Asignar evento a cada imagen
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}

// Botón cerrar
var cerrar = document.getElementsByClassName("close")[0];
cerrar.onclick = function () {
    modal.style.display = "none";
};
