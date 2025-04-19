
// Combo doble para la página de farmacia
document.addEventListener("DOMContentLoaded", function() {
    // Elementos del DOM
    const categoriasSelect = document.getElementById("categoriaProducto");
    const productosSelect = document.getElementById("productoEspecifico");
    const descripcionElement = document.getElementById("descripcionProducto");
    const precioElement = document.getElementById("precioProducto");
    const imagenProducto = document.getElementById("imagenProducto");
    
    // Base de datos de productos por categoría
    const productosPorCategoria = {
        "antibioticos": [
            { id: "pen_g", nombre: "Penicilina G Procaínica", descripcion: "Antibiótico de espectro reducido efectivo contra bacterias Gram positivas. Se usa para tratar infecciones respiratorias, mastitis y metritis en bovinos.", precio: 15000, imagen: "imagenes/penicilina_g.png" },
            { id: "oxitetraciclina", nombre: "Oxitetraciclina LA", descripcion: "Antibiótico de amplio espectro con acción prolongada. Eficaz contra bacterias Gram positivas y Gram negativas, ideal para el tratamiento de neumonía, fiebre de embarque y pezuña podrida.", precio: 18500, imagen: "imagenes/oxitetraciclina.jpg" },
            { id: "ceftiofur", nombre: "Ceftiofur Sódico", descripcion: "Cefalosporina de tercera generación. Eficaz contra bacterias resistentes a otros antibióticos. Tratamiento de elección para infecciones respiratorias graves y metritis post-parto.", precio: 25000, imagen: "imagenes/ceftiofur.jpg" }
        ],
        "antiparasitarios": [
            { id: "ivermectina", nombre: "Ivermectina 1%", descripcion: "Antiparasitario de amplio espectro eficaz contra parásitos internos (nematodos gastrointestinales y pulmonares) y externos (ácaros, piojos y ciertos dípteros).", precio: 12000, imagen: "imagenes/ivermectina.jpg" },
            { id: "albendazol", nombre: "Albendazol 10%", descripcion: "Desparasitante de amplio espectro efectivo contra nematodos gastrointestinales, pulmonares y tenias. También tiene actividad contra formas adultas de fasciola hepática.", precio: 9500, imagen: "imagenes/albendazol.jpg" },
            { id: "doramectina", nombre: "Doramectina", descripcion: "Antiparasitario de la familia de las avermectinas con persistencia prolongada. Eficaz contra parásitos internos y externos, brindando protección por hasta 35 días.", precio: 17500, imagen: "imagenes/doramectina.png" }
        ],
        "antiinflamatorios": [
            { id: "flunixin", nombre: "Flunixin Meglumine", descripcion: "Antiinflamatorio no esteroidal (AINE) con potente acción analgésica, antipirética y antiinflamatoria. Utilizado para el tratamiento de inflamaciones agudas y dolor.", precio: 14500, imagen: "imagenes/flunixin.jpg" },
            { id: "dexametasona", nombre: "Dexametasona", descripcion: "Corticosteroide de acción prolongada con potente efecto antiinflamatorio. Útil en casos de shock, alergias e inflamaciones severas. Debe usarse con precaución en animales gestantes.", precio: 8500, imagen: "imagenes/dexametasona.jpg" },
            { id: "ketoprofeno", nombre: "Ketoprofeno", descripcion: "AINE con excelente efecto analgésico y antipirético. Indicado para el tratamiento de cojeras, mastitis y procesos inflamatorios en general.", precio: 13000, imagen: "imagenes/ketoprofeno.png" }
        ],
        "vitaminas": [
            { id: "complejo_b", nombre: "Complejo B", descripcion: "Combinación de vitaminas del complejo B esenciales para el metabolismo energético, función nerviosa y producción de glóbulos rojos. Indicado en casos de deficiencias, estrés y recuperación.", precio: 9000, imagen: "imagenes/complejo_b.jpg" },
            { id: "ade", nombre: "Vitamina ADE", descripcion: "Combinación de vitaminas liposolubles fundamentales para la visión, reproducción, sistema inmune y metabolismo del calcio. Ideal para mejorar la condición general del ganado.", precio: 11500, imagen: "imagenes/vitamina_ADE.jpg" },
            { id: "selenio_e", nombre: "Selenio + Vitamina E", descripcion: "Combinación que actúa sinérgicamente como antioxidante. Previene la enfermedad del músculo blanco y mejora la respuesta inmune y la fertilidad.", precio: 13500, imagen: "imagenes/selenio_e.png" }
        ],
        "minerales": [
            { id: "calcio", nombre: "Calcio + Fósforo", descripcion: "Suplemento de calcio y fósforo en proporción 2:1. Previene y trata la hipocalcemia (fiebre de leche) y desbalances minerales en vacas lecheras de alta producción.", precio: 8500, imagen: "imagenes/calcio_fosforo.jpg" },
            { id: "sal_mineral", nombre: "Sal Mineralizada", descripcion: "Mezcla balanceada de macro y microminerales esenciales para el ganado. Mejora la fertilidad, producción de leche y desarrollo muscular.", precio: 6500, imagen: "imagenes/sal_mineral.jpg" },
            { id: "magnesio", nombre: "Cloruro de Magnesio", descripcion: "Suplemento de magnesio para prevenir y tratar la hipomagnesemia (tetania de los pastos). Especialmente importante en temporadas de pastos jóvenes y húmedos.", precio: 7500, imagen: "imagenes/cloruro_magnesio.png" }
        ]
    };
    
    // Función para actualizar el segundo combo
    function actualizarProductos() {
        // Obtener la categoría seleccionada
        const categoriaSeleccionada = categoriasSelect.value;
        
        // Limpiar el segundo combo
        productosSelect.innerHTML = '<option value="">-- Seleccione un producto --</option>';
        
        // Resetear información del producto
        descripcionElement.textContent = "Seleccione un producto para ver su descripción.";
        precioElement.textContent = "";
        imagenProducto.src = "";
        imagenProducto.style.display = "none";
        
        // Si hay una categoría válida seleccionada
        if (categoriaSeleccionada && productosPorCategoria[categoriaSeleccionada]) {
            // Añadir las opciones de productos correspondientes
            productosPorCategoria[categoriaSeleccionada].forEach(producto => {
                const option = document.createElement("option");
                option.value = producto.id;
                option.textContent = producto.nombre;
                productosSelect.appendChild(option);
            });
            
            // Habilitar el segundo combo
            productosSelect.disabled = false;
        } else {
            // Deshabilitar el segundo combo si no hay categoría
            productosSelect.disabled = true;
        }
    }
    
    // Función para mostrar la información del producto seleccionado
    function mostrarProducto() {
        // Obtener valores seleccionados
        const categoriaSeleccionada = categoriasSelect.value;
        const productoSeleccionado = productosSelect.value;
        
        // Buscar el producto en la base de datos
        if (categoriaSeleccionada && productoSeleccionado && productosPorCategoria[categoriaSeleccionada]) {
            const producto = productosPorCategoria[categoriaSeleccionada].find(p => p.id === productoSeleccionado);
            
            if (producto) {
                // Mostrar información del producto
                descripcionElement.textContent = producto.descripcion;
                
                // Formatear el precio como moneda (colones costarricenses)
                const precioFormateado = new Intl.NumberFormat('es-CR', {
                    style: 'currency',
                    currency: 'CRC',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(producto.precio);
                
                precioElement.textContent = "Precio: " + precioFormateado;
                
                // Mostrar imagen si existe
                if (producto.imagen) {
                    imagenProducto.src = producto.imagen;
                    imagenProducto.alt = producto.nombre;
                    imagenProducto.style.display = "block";
                } else {
                    imagenProducto.style.display = "none";
                }
                
                // Aplicar efecto de aparición
                descripcionElement.style.opacity = "0";
                precioElement.style.opacity = "0";
                
                setTimeout(function() {
                    descripcionElement.style.opacity = "1";
                    precioElement.style.opacity = "1";
                }, 10);
            }
        } else {
            // Resetear información si no hay producto seleccionado
            descripcionElement.textContent = "Seleccione un producto para ver su descripción.";
            precioElement.textContent = "";
            imagenProducto.src = "";
            imagenProducto.style.display = "none";
        }
    }
    
    // Event listeners
    if (categoriasSelect) {
        categoriasSelect.addEventListener("change", actualizarProductos);
    }
    
    if (productosSelect) {
        productosSelect.addEventListener("change", mostrarProducto);
    }
    
    // Inicializar al cargar
    actualizarProductos();
});
