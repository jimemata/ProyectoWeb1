//carga de la funcion init 
window.addEventListener('load', init, false);

//funcion inicial
function init() {
    // Ajustar el tamaño del formulario
    ajustarFormulario();
    
    //declaracion de
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    //funcion del boton Enviar
    btnEnviar.onclick = function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        
        nombre = nombreTxt.value;
        apellido = apellidoTxt.value;
        email = emailTxt.value;
        numero = numberTxt.value;
        mensaje = mensajeTxt.value;

        //condicionales anidadas para validar cada campo del form 
        if (nombre === '' && apellido === '' && email === '' && numero === '' && mensaje === '') {
            alerta.textContent = 'Debe llenar todos los campos.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (nombre === '') {
            alerta.textContent = 'El campo nombre está vacío.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (apellido === '') {
            alerta.textContent = 'El campo apellido está vacío.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (email === '') {
            alerta.textContent = 'El campo email está vacío.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email inválido.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (numero === '') {
            alerta.textContent = 'El campo teléfono está vacío.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (mensaje === '') {
            alerta.textContent = 'El campo mensaje está vacío.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            //si NO existe error en los campos validados se envian los datos al servidor de correo 
            alerta.textContent = 'Mensaje enviado. Pronto le confirmaremos!';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //service ID/template ID/ID form/public key cuenta
            //el id del formulario es #form
            emailjs.sendForm('service_avlrw33', 'template_w5ostd2', '#form1', '-8a_1lXePMpd5mJmX');
            //carga de la funcion limpiar
            limpiar();
        }
    }

    function limpiar() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        mensajeTxt.value = '';
    }
}

// Función para ajustar el formulario
function ajustarFormulario() {
    const form = document.getElementById('form1');
    
    if (form) {
        // Ajustar para ambos formularios
        form.style.maxWidth = '850px';
        
        // Asegurar el correcto espaciado en dispositivos móviles
        if (window.innerWidth <= 768) {
            const formGroups = document.querySelectorAll('.form-group');
            formGroups.forEach(group => {
                group.style.flex = '0 0 calc(100% - 30px)';
                group.style.maxWidth = 'calc(100% - 30px)';
                group.style.marginBottom = '20px';
            });
        } else {
            // Espaciado normal para pantallas más grandes
            const formGroups = document.querySelectorAll('.form-group');
            formGroups.forEach(group => {
                if (group.classList.contains('full-width')) {
                    group.style.flex = '0 0 calc(100% - 30px)';
                    group.style.maxWidth = 'calc(100% - 30px)';
                } else {
                    group.style.flex = '0 0 calc(50% - 30px)';
                    group.style.maxWidth = 'calc(50% - 30px)';
                }
                group.style.margin = '0 15px';
            });
            
            const formRows = document.querySelectorAll('.form-row');
            formRows.forEach(row => {
                row.style.marginBottom = '35px';
            });
        }
    }
}