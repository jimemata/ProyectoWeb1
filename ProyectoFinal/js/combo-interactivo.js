// Función para la calculadora interactiva de costos
document.addEventListener("DOMContentLoaded", function() {
    // Elementos del DOM
    const servicioSelect = document.getElementById("servicioCalc");
    const cantidadInput = document.getElementById("cantidadAnimales");
    const calcularBtn = document.getElementById("calcularBtn");
    const costoElement = document.getElementById("costoEstimado");
    const detalleElement = document.getElementById("detalleServicio");
    
    // Precios base por servicio (en colones)
    const precios = {
        "consulta": 15000,
        "emergencia": 35000,
        "vacunacion": 8000,
        "desparasitacion": 6000,
        "cirugia": 120000
    };
    
    // Descuentos por cantidad de animales
    function calcularDescuento(cantidad) {
        if (cantidad >= 20) return 0.25; // 25% descuento para 20+ animales
        if (cantidad >= 10) return 0.15; // 15% descuento para 10-19 animales
        if (cantidad >= 5) return 0.1;   // 10% descuento para 5-9 animales
        return 0; // Sin descuento para menos de 5 animales
    }
    
    // Nombres completos de los servicios
    const nombresServicios = {
        "consulta": "Consulta Regular",
        "emergencia": "Atención de Emergencia",
        "vacunacion": "Vacunación",
        "desparasitacion": "Desparasitación",
        "cirugia": "Cirugía"
    };
    
    // Función para calcular el costo
    function calcularCosto() {
        // Obtener valores
        const servicio = servicioSelect.value;
        const cantidad = parseInt(cantidadInput.value) || 0;
        
        // Validar cantidad
        if (cantidad <= 0) {
            costoElement.textContent = "Por favor ingrese una cantidad válida";
            detalleElement.textContent = "";
            return;
        }
        
        // Calcular costo base
        const precioUnitario = precios[servicio];
        let costoTotal = precioUnitario * cantidad;
        
        // Aplicar descuento si corresponde
        const descuento = calcularDescuento(cantidad);
        const montoDescuento = costoTotal * descuento;
        costoTotal = costoTotal - montoDescuento;
        
        // Formatear el costo total como moneda (colones costarricenses)
        const costoFormateado = new Intl.NumberFormat('es-CR', {
            style: 'currency',
            currency: 'CRC',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(costoTotal);
        
        // Mostrar resultado con animación
        costoElement.style.opacity = "0";
        setTimeout(function() {
            costoElement.textContent = costoFormateado;
            costoElement.style.opacity = "1";
            
            // Aplicar clase de resaltado
            costoElement.classList.add("highlight");
            setTimeout(function() {
                costoElement.classList.remove("highlight");
            }, 1000);
        }, 200);
        
        // Mostrar detalles
        let detalle = `${cantidad} ${cantidad === 1 ? 'animal' : 'animales'} para ${nombresServicios[servicio]} a ₡${precioUnitario.toLocaleString()} por animal`;
        
        if (descuento > 0) {
            detalle += ` (Descuento del ${(descuento * 100)}% aplicado)`;
        }
        
        detalleElement.style.opacity = "0";
        setTimeout(function() {
            detalleElement.textContent = detalle;
            detalleElement.style.opacity = "1";
        }, 300);
    }
    
    // Event listener para el botón de calcular
    if (calcularBtn) {
        calcularBtn.addEventListener("click", calcularCosto);
    }
    
    // Event listener para permitir cálculo al presionar Enter en el input de cantidad
    if (cantidadInput) {
        cantidadInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                calcularCosto();
            }
        });
    }
    
    // Event listener para cambios en el servicio
    if (servicioSelect) {
        servicioSelect.addEventListener("change", function() {
            if (cantidadInput.value.trim() !== "" && parseInt(cantidadInput.value) > 0) {
                calcularCosto();
            }
        });
    }
});