// Función para manejar el cambio en el combo simple
function mostrarDescripcionServicio() {
    // Obtener el valor seleccionado
    const servicioSeleccionado = document.getElementById("comboServicio").value;
    const descripcionElement = document.getElementById("descripcionServicio");
    
    // Definir las descripciones para cada servicio
    const descripciones = {
        "default": "Seleccione un servicio para ver su descripción detallada.",
        "consulta": "Nuestras consultas veterinarias incluyen un examen físico completo, evaluación de parámetros fisiológicos, diagnóstico y plan de tratamiento. Contamos con profesionales especializados en ganado bovino que identifican y tratan cualquier condición de salud, desde problemas respiratorios hasta trastornos digestivos.",
        "cirugia": "Realizamos procedimientos quirúrgicos avanzados para bovinos, incluyendo cesáreas, corrección de desplazamientos de abomaso, reparación de hernias y extirpación de tumores. Nuestro quirófano está equipado con tecnología de vanguardia y seguimos estrictos protocolos de esterilización.",
        "reproduccion": "Ofrecemos servicios completos de reproducción bovina, incluyendo diagnóstico de gestación, inseminación artificial, transferencia de embriones y evaluación de fertilidad en toros. Ayudamos a optimizar la eficiencia reproductiva de su hato con las técnicas más avanzadas.",
        "nutricional": "Nuestros expertos en nutrición bovina desarrollan planes alimenticios personalizados según las necesidades específicas de su ganado, considerando factores como edad, etapa productiva y condiciones ambientales. Realizamos análisis de forrajes y formulamos raciones balanceadas para maximizar la producción.",
        "preventiva": "Implementamos programas de medicina preventiva que incluyen calendarios de vacunación, control de parásitos internos y externos, y monitoreo de enfermedades. Nuestro enfoque proactivo ayuda a reducir la incidencia de enfermedades y mejorar la salud general del hato."
    };
    
    // Mostrar la descripción correspondiente
    if (descripciones[servicioSeleccionado]) {
        descripcionElement.textContent = descripciones[servicioSeleccionado];
        // Mostrar animación de aparición
        descripcionElement.style.opacity = "0";
        descripcionElement.style.display = "block";
        
        setTimeout(function() {
            descripcionElement.style.opacity = "1";
        }, 10);
    } else {
        descripcionElement.style.display = "none";
    }
}

// Inicializar cuando la página cargue
document.addEventListener("DOMContentLoaded", function() {
    const comboServicio = document.getElementById("comboServicio");
    if (comboServicio) {
        comboServicio.addEventListener("change", mostrarDescripcionServicio);
    }
});