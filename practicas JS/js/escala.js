//funcion que permite evaluar el test evaluativo
function evalua() {

    var escala = document.getElementById('escala_txt').value;
    var resultado = document.getElementById('resultado');

    //isNaN(numero).  Comprueba que el valor número que se ha convertido previamente es un número y no letra
    if (isNaN(parseInt(escala))) {
        //invoca un desplegable JS
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'El campo esta vacío/NO digite letras'
        });
        return false;
    } else
    //validacion campo vacio escala     
    if (escala == "" || escala < 0) {
        //desplegable JS con tiempo limite 5seg        
        Swal.fire({
            title: 'Atención Amigo!',
            text: 'Número negativo. Digite un valor [1-10] por favor...',
            icon: 'info',
            timer: 5000,
            onOpen: function() {
                swal.showLoading()
            }
        }).then(
            function() {},
            function(dismiss) {
                if (dismiss === 'timer') {
                    console.log('Desplegable cerrada')
                }
            }
        )
    } else
    if (escala >= 11) {
        //enviar un dato por HTML usando una variable
        resultado.innerHTML = 'NO EXISTE EVALUACION';
        document.getElementById('escala_txt').value = "";
        document.getElementById("ima0").style.display = 'none';

    } else {
        if (escala == 0) {
            document.getElementById('escala_txt').value = "";
            limpiar();
        }
        if (escala == 10) {
            resultado.innerHTML = 'EXCELENTE';
            document.getElementById("ima1").style.display = 'block';
            document.getElementById("ima0").style.display = 'none';
            document.getElementById("ima2").style.display = 'none';
            document.getElementById("ima3").style.display = 'none';
            document.getElementById("ima4").style.display = 'none';
            document.getElementById("ima5").style.display = 'none';
            document.getElementById("ima6").style.display = 'none';

        } else {
            if (escala == 9) {
                resultado.innerHTML = 'MUY BUENO';
                document.getElementById("ima2").style.display = 'block';
                document.getElementById("ima0").style.display = 'none';
                document.getElementById("ima1").style.display = 'none';
                document.getElementById("ima3").style.display = 'none';
                document.getElementById("ima4").style.display = 'none';
                document.getElementById("ima5").style.display = 'none';
                document.getElementById("ima4").style.display = 'none';
                document.getElementById("ima6").style.display = 'none';
                document.getElementById('escala_txt').value = "";
            } else {
                if (escala == 8) {
                    resultado.innerHTML = 'BUENO';
                    document.getElementById("ima3").style.display = 'block';
                    document.getElementById("ima0").style.display = 'none';
                    document.getElementById("ima1").style.display = 'none';
                    document.getElementById("ima2").style.display = 'none';
                    document.getElementById("ima4").style.display = 'none';
                    document.getElementById("ima5").style.display = 'none';
                    document.getElementById("ima6").style.display = 'none';
                    document.getElementById('escala_txt').value = "";


                } else {
                    if (escala == 7) {
                        resultado.innerHTML = 'REGULAR';
                        document.getElementById("ima4").style.display = 'block';
                        document.getElementById("ima0").style.display = 'none';
                        document.getElementById("ima1").style.display = 'none';
                        document.getElementById("ima2").style.display = 'none';
                        document.getElementById("ima3").style.display = 'none';
                        document.getElementById("ima5").style.display = 'none';
                        document.getElementById("ima6").style.display = 'none';
                        document.getElementById('escala_txt').value = "";

                    } else {
                        if (escala == 6) {
                            resultado.innerHTML = 'MALO';
                            document.getElementById("ima5").style.display = 'block';
                            document.getElementById("ima0").style.display = 'none';
                            document.getElementById("ima1").style.display = 'none';
                            document.getElementById("ima2").style.display = 'none';
                            document.getElementById("ima3").style.display = 'none';
                            document.getElementById("ima4").style.display = 'none';
                            document.getElementById("ima6").style.display = 'none';
                            document.getElementById('escala_txt').value = "";

                        } else {
                            if (escala >= 1 && escala < 6) {
                                resultado.innerHTML = 'MUY MALO';
                                document.getElementById("ima6").style.display = 'block';
                                document.getElementById("ima0").style.display = 'none';
                                document.getElementById("ima1").style.display = 'none';
                                document.getElementById("ima2").style.display = 'none';
                                document.getElementById("ima3").style.display = 'none';
                                document.getElementById("ima4").style.display = 'none';
                                document.getElementById("ima5").style.display = 'none';
                                document.getElementById('escala_txt').value = "";
                            }
                        }
                    }
                }
            }
        }
    }
    //cierre de la función
}

function limpiar() {
    document.getElementById('escala_txt').value = "";
    resultado.innerHTML = '';
    document.getElementById("ima0").style.display = 'block';
    document.getElementById("ima1").style.display = 'none';
    document.getElementById("ima2").style.display = 'none';
    document.getElementById("ima3").style.display = 'none';
    document.getElementById("ima4").style.display = 'none';
    document.getElementById("ima5").style.display = 'none';
    document.getElementById("ima6").style.display = 'none';
}