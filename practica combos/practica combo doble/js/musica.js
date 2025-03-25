function pago(){
    var dia = document.getElementById("dia").value;
    var cantidad = document.getElementById("cantidad").value;
    var tipo = document.getElementById("tipoEntrada").value;
    var pagoTipo = 0;

    //validación campos en blanco
    if(dia == "Seleccione el dia" || cantidad == "" || tipo == "Selecciones su preferencia"){
        swal.fire({
            icon: "error",
            title: "Atención usuario",
            text: "No dejar campos vacíos",
        });
    } else{
        //usamos un condicional para determinar el tipo de gradería
        if(tipo == "Graderia sur"){
            pagoTipo = 20000;
        } else if(tipo == "Gramilla"){
            pagoTipo = 35000;
        } else if(tipo == "Balcon premium"){
            pagoTipo = 70000;
        } else if(tipo == "Platea este"){
            pagoTipo = 61500;
        } else if(tipo == "Super VIP"){
            pagoTipo = 100000;
        } 

        //calculo
        var monto = cantidad * pagoTipo;
        //resultado en la página web
        document.getElementById("txtResultadoMontoFinal").innerHTML = " ₡" + monto;
        document.getElementById("diaE").innerHTML = " " + dia;
        document.getElementById("cant").innerHTML = " " + cantidad;
        document.getElementById("tipoE").innerHTML = " " + tipo;
    }
}

function btnLimpiar(){
    document.getElementById("dia").value = "Seleccione el dia";
    document.getElementById("cantidad").value = "";
    document.getElementById("tipoEntrada").value = "Seleccione su preferencia";
    document.getElementById("txtResultadoMontoFinal").value = "";
    document.getElementById("diaE").value = "";
    document.getElementById("cant").value = "";
    document.getElementById("tipoE").value = "";
}