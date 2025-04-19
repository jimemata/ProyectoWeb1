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
    let asunto = document.getElementById('asuntoTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    //funcion del boton Enviar
    btnEnviar.onclick = function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        
        // Obtener valores actuales de los campos
        nombre = nombreTxt.value.trim();
        apellido = apellidoTxt.value.trim();
        email = emailTxt.value.trim();
        numero = numberTxt.value.trim();
        asuntoValue = asunto.value.trim();
        mensaje = mensajeTxt.value.trim();

        // Mostrar animación de procesamiento
        btnEnviar.disabled = true;
        btnEnviar.value = "Enviando...";
        btnEnviar.classList.add('enviando');

        //condicionales anidadas para validar cada campo del form 
        if (nombre === '' || apellido === '' || email === '' || numero === '' || asuntoValue === '' || mensaje === '') {
            mostrarError('Todos los campos son obligatorios.');
            return;
        } else if (nombre === '') {
            mostrarError('El campo nombre está vacío.');
            return;
        } else if (apellido === '') {
            mostrarError('El campo apellido está vacío.');
            return;
        } else if (email === '') {
            mostrarError('El campo email está vacío.');
            return;
        } else if (expressionEmail.test(email) === false) {
            mostrarError('El formato de email es inválido.');
            return;
        } else if (numero === '') {
            mostrarError('El campo teléfono está vacío.');
            return;
        } else if (asuntoValue === '') {
            mostrarError('El campo asunto está vacío.');
            return;
        } else if (mensaje === '') {
            mostrarError('El campo mensaje está vacío.');
            return;
        } else {
            // Si no hay errores, enviar el formulario
            setTimeout(function() {
                //si NO existe error en los campos validados se envian los datos al servidor de correo 
                alerta.textContent = '¡Mensaje enviado con éxito! Pronto nos pondremos en contacto con usted.';
                alerta.classList.add('alertaVerde');
                alerta.classList.remove('alertaRoja');
                
                //service ID/template ID/ID form/public key cuenta
                //el id del formulario es #form
                emailjs.sendForm('service_uzviqof', 'template_c418kyj', '#form1', '-8a_1lXePMpd5mJmX')
                    .then(function() {
                        console.log('Email enviado correctamente');
                    }, function(error) {
                        console.log('Error al enviar el email:', error);
                        mostrarError('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo.');
                    });
                
                //carga de la funcion limpiar
                limpiar();
                
                // Restaurar el botón
                btnEnviar.disabled = false;
                btnEnviar.value = "Enviar";
                btnEnviar.classList.remove('enviando');
            }, 1500); // Simular proceso de envío por 1.5 segundos
        }
    }

    // Función para mostrar mensajes de error
    function mostrarError(mensaje) {
        alerta.textContent = mensaje;
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');
        
        // Efecto de aparición para el mensaje
        alerta.style.opacity = '0';
        setTimeout(function() {
            alerta.style.opacity = '1';
        }, 10);
        
        // Restaurar el botón
        btnEnviar.disabled = false;
        btnEnviar.value = "Enviar";
        btnEnviar.classList.remove('enviando');
        
        // Enfocar el primer campo con error
        if (nombre === '') nombreTxt.focus();
        else if (apellido === '') apellidoTxt.focus();
        else if (email === '' || expressionEmail.test(email) === false) emailTxt.focus();
        else if (numero === '') numberTxt.focus();
        else if (asuntoValue === '') asuntoTxt.focus();
        else if (mensaje === '') mensajeTxt.focus();
    }

    // Función para limpiar el formulario
    function limpiar() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        asuntoTxt.value = '';
        mensajeTxt.value = '';
        
        // Efecto visual de limpieza
        const inputs = [nombreTxt, apellidoTxt, emailTxt, numberTxt, asuntoTxt, mensajeTxt];
        inputs.forEach(input => {
            input.classList.add('limpiado');
            setTimeout(() => {
                input.classList.remove('limpiado');
            }, 500);
        });
    }
    
    // Listeners para los campos del formulario (validación en tiempo real)
    nombreTxt.addEventListener('blur', function() {
        validarCampo(this, this.value.trim() !== '', 'Por favor ingrese su nombre');
    });
    
    apellidoTxt.addEventListener('blur', function() {
        validarCampo(this, this.value.trim() !== '', 'Por favor ingrese sus apellidos');
    });
    
    emailTxt.addEventListener('blur', function() {
        validarCampo(this, expressionEmail.test(this.value.trim()), 'Por favor ingrese un email válido');
    });
    
    numberTxt.addEventListener('blur', function() {
        validarCampo(this, this.value.trim() !== '', 'Por favor ingrese su teléfono');
    });
    
    asuntoTxt.addEventListener('blur', function() {
        validarCampo(this, this.value.trim() !== '', 'Por favor ingrese el asunto');
    });
    
    mensajeTxt.addEventListener('blur', function() {
        validarCampo(this, this.value.trim() !== '', 'Por favor ingrese su mensaje');
    });
    
    // Función para validar campos
    function validarCampo(campo, condicion, mensaje) {
        if (!condicion) {
            campo.classList.add('campo-error');
            
            // Crear o actualizar el mensaje de error
            let mensajeError = campo.parentNode.querySelector('.mensaje-error');
            if (!mensajeError) {
                mensajeError = document.createElement('div');
                mensajeError.className = 'mensaje-error';
                campo.parentNode.appendChild(mensajeError);
            }
            mensajeError.textContent = mensaje;
        } else {
            campo.classList.remove('campo-error');
            
            // Eliminar mensaje de error si existe
            const mensajeError = campo.parentNode.querySelector('.mensaje-error');
            if (mensajeError) {
                campo.parentNode.removeChild(mensajeError);
            }
        }
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