$("#r0").click(function() {
    Swal.fire({
        icon: 'error',
        title: 'Atención usuario',
        text: 'Digite el número de escala deseado'
    });
});


$("#r1").click(function() {
    Swal.fire({
        title: '',
        imageUrl: 'imagenes/alerta.jpg',
        icon: 'question',
        iconColor: '#eea025',
        position: 'center',
        confirmButtonColor: '#eea025',
        confirmButtonText: 'Aceptar',

        animation: true,
        showClass: {
            popup: 'animated bounceIn',
        },
        hideClass: {
            popup: 'animated bounceOut',
        },
        showCloseButton: true,
        html: '<strong>Para disminuir gastos de combustible y transporte en tiempos de COVID-19 puede utilizar plataformas digitales para:</strong> ' +
            '<br><br><br>' +
            '<p> - Pagar los servicios públicos: como agua, teléfono y electricidad. </p>' +
            '<br>' +
            '<p> - Comprar en línea alimentos y otros productos para el hogar. </p>' +
            '<br>' +
            '<p> - Mantenerse en contacto con su entidad financiera y realizar consultas o gestiones. </p>'
    });
});



$("#r2").click(function() {
    Swal.fire({
        title: '',
        imageUrl: 'imagenes/logo.jpg',
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        showClass: {
            popup: 'animated fadeInDown',
        },
        hideClass: {
            popup: 'animated fadeOutUp',
        },
        showCloseButton: true,
        html: '<strong> ¡Más tarjetas de crédito es sinónimo de más deudas! </strong> ' +
            '<br><br><br>' +
            '<p class="aliizq">- Es por eso que antes de adquirir una tarjeta de crédito en estos momentos, le aconsejamos analizar si realmente la requiere. </p>' +
            '<br>' +
            '<p class="aliizq">- La tarjeta de crédito puede ser un instrumento útil siempre y cuando se tenga claro cómo funciona y desde luego, pueda manejarla. </p>'
    });
});



$("#r3").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Información general',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales (HTML y CSS) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.',
        footer: '<a href="https://www.google.com" target="blank">Derechos Reservados</a>'
    });
});



$("#r4").click(function() {
    Swal.fire({
        title: 'Información',
        text: 'Framework CSS.',
        imageUrl: 'imagenes/personaje.png',
        imageWidth: 500,
        imageHeight: 400,
        imageAlt: 'Logo',
    });
});



$("#r5").click(function() {
    Swal.fire({
        title: 'Atención Amigo!',
        text: 'Esta ventana va a cerrarse en 3 segundos',
        icon: 'info',
        timer: 3000,
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
});