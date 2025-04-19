// Función para mostrar una alerta personalizada en caso de error
function validation_alert(ptext) {
    Swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#8b0000",
        html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/3d1e0352-c9a6-48ea-9b78-33bfaf654d3c/S479XrtMKL.lottie"></iframe> <br><p>' + ptext + " </p>",
    });
}

// Función que valida los datos del formulario y maneja el login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;

    let username = "cenfo";  // Usuario correcto
    let password = "123";    // Contraseña correcta

    let error_count = 0;
    let text = "";

    // Validación de campos vacíos
    if (user_input === "" || pass_input === "") {
        if (user_input === "") {
            document.getElementById("in-txt-user").classList.add("error");
        }
        if (pass_input === "") {
            document.getElementById("in-txt-pass").classList.add("error");
        }
        text = "Los campos requeridos NO pueden estar vacíos.";
        validation_alert(text);
        error_count++;
    }

    // Si no hay errores, verificar las credenciales
    if (error_count === 0) {
        if (user_input === username && pass_input === password) {
            Swal.fire({
                title: "Acceso correcto",
                showConfirmButton: false,
                customClass: {
                    title: 'formatos1',
                },
                timer: 5000,
                html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/5038405a-51eb-4515-b0a5-ac50f9d3fbad/hgPmgBTAAP.lottie"></iframe> <br><br><p>Esperar un momento...</p>',
            }).then(() => {
                window.location.href = "landing.html";  // Redirigir a landing page
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text);
        }
    }
}

// Evento de clic para iniciar sesión
document.getElementById("btn-login").addEventListener("click", login);
