//variables controladoras 
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrará la escena 360
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/granja360.jpg');

//El valor 50 es el radio del infospot


var infospot1 = new PANOLENS.Infospot (30, 'imagenes/info.png');
infospot1.position.set(500 ,24 , 8);
infospot1.addHoverText('', -60);
infospot1.element.innerHTML = ` 
    <div style="background-color: #907761; color:#fff; border-raidus: 5px; padding: 10px; font-size: 14px; width: 250px; text-align: justify">
        Las gallinas son aves de corral domesticadas por el ser humano desde hace miles de años. Se crían principalmente por su carne y huevos, siendo fundamentales en la alimentación mundial. Son animales sociables e inteligentes, capaces de reconocer a sus cuidadores y establecer jerarquías dentro de su grupo.
        <br><br>
        <img src="imagenes/gallinas.jpg" alt="Imagen del dospositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;
panorama.add(infospot1);

var infospot2 = new PANOLENS.Infospot(30, 'imagenes/info.png');
infospot2.position.set(-500 ,-32 , 177);
infospot2.addHoverText('', -60);
infospot2.element.innerHTML = ` 
    <div style="background-color: #203500; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px; text-align: justify">
        Los caballos son mamíferos herbívoros conocidos por su velocidad, fuerza y elegancia. Han acompañado al ser humano durante siglos como medio de transporte, en labores agrícolas y en deportes ecuestres. Son animales inteligentes y sociables, capaces de formar vínculos con sus cuidadores y comunicarse a través de gestos y sonidos.
        <br><br>
        <img src="imagenes/caballos.jpg" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;
panorama.add(infospot2);


var infospot3 = new PANOLENS.Infospot (30, 'imagenes/info.png');
infospot3.position.set(-500, -20, -74);
infospot3.addHoverText('', -60);
infospot3.element.innerHTML = ` 
    <div style="background-color: #283e06; color:#fff; border-raidus: 5px; padding: 10px; font-size: 14px; width: 250px; text-align: justify">
        Las cabras son mamíferos rumiantes conocidos por su agilidad y capacidad de adaptación a distintos entornos. Se crían por su leche, carne y lana, siendo fundamentales en la ganadería. Son animales curiosos e inteligentes, con una gran habilidad para trepar y explorar su entorno.
        <br><br>
        <img src="imagenes/cabras.jpg" alt="Imagen del dospositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;
panorama.add(infospot3);

var infospot4 = new PANOLENS.Infospot (30, 'imagenes/info.png');
infospot4.position.set(-174 ,25 , 500);
infospot4.addHoverText('', -60);
infospot4.element.innerHTML = ` 
    <div style="background-color: #3c280d; color:#fff; border-raidus: 5px; padding: 10px; font-size: 14px; width: 250px; text-align: justify">
        Las vacas son mamíferos rumiantes fundamentales en la ganadería por su producción de leche, carne y cuero. Son animales sociables y tranquilos, que forman fuertes lazos dentro de su grupo. Su sistema digestivo les permite aprovechar pastos y forrajes, desempeñando un papel clave en la agricultura y la economía rural.
        <br><br>
        <img src="imagenes/vacas.jpg" alt="Imagen del dospositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;
panorama.add(infospot4);



var infospot5 = new PANOLENS.Infospot (30, 'imagenes/info.png');
infospot5.position.set(88 ,8 , -500);
infospot5.addHoverText('', -60);
infospot5.element.innerHTML = `  
    <div style="background-color: #203500; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 500px; text-align: justify">
        Los gatos se bañan lamiéndose para mantenerse limpios, regular su temperatura y eliminar olores. Su lengua áspera ayuda a remover suciedad y distribuir aceites naturales en su pelaje.
        <br><br>
        <video autoplay muted loop class="video-fondo" style="width: 100%; max-width: 450px; border-radius: 5px; display: block; margin: 0 auto;">
            <source src="videos/video1.mp4">
        </video>
        <br><br>
    </div>
`;
panorama.add(infospot5);


var infospot6 = new PANOLENS.Infospot(30, 'imagenes/info.png');
infospot6.position.set(-500, 34, 448);
infospot6.addHoverText('', -60);
infospot6.element.innerHTML = ` 
    <div style="background-color: #1560bd; color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 500px; text-align: justify">
        Los perros son animales leales e inteligentes, conocidos por su fuerte vínculo con los humanos. Son sociables, juguetones y desempeñan roles en compañía, trabajo y seguridad.
        <br><br>
        <video autoplay muted loop class="video-fondo" style="width: 100%; max-width: 450px; border-radius: 5px; display: block; margin: 0 auto;">
            <source src="videos/video2.mp4">
        </video>
        <br><br>
    </div>
`;
panorama.add(infospot6);



var infospot7 = new PANOLENS.Infospot (30, 'imagenes/info.png');
infospot7.position.set(-459 ,-16 , -500);
infospot7.addHoverText('Un audio MP3 multimedia...', -60);
infospot7.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/gato.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot7);


var infospot8 = new PANOLENS.Infospot (30, 'imagenes/info.png');
infospot8.position.set(485 ,-4 , -500);
infospot8.addHoverText('Un audio MP3 multimedia...', -60);
infospot8.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/granja.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot8);


var infospot9 = new PANOLENS.Infospot (50, 'imagenes/info.png');
infospot9.position.set(265, 50, 940);
infospot9.addHoverText('Un audio MP3 multimedia...', -60);
infospot9.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/vacas.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot9);


var infospot10 = new PANOLENS.Infospot (50, 'imagenes/info.png');
infospot10.position.set(-430, 50, -1000);
infospot10.addHoverText('Entrar al PDF', 100);
infospot10.element.innerHTML = `
    <div style="background-color: #ecab0f; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px; text-align: justify">
        Haz click en el icono para entrar al PDF.
    </div>
`;
//Agregar un evento de clic para abrir el PDF
infospot10.addEventListener('click', function(){
    //Abrir el PDF en una nueva pestaña
    window.open("pdf/Curiosidades_sobre_los_gatos.pdf", "_blank");
});
panorama.add(infospot10);

var infospot11 = new PANOLENS.Infospot (30, 'imagenes/info.png');
infospot11.position.set(500 ,9 , 338);
infospot11.addHoverText('Entrar al PDF', 100);
infospot11.element.innerHTML = `
    <div style="background-color: #ff8000; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px; text-align: jcenter">
        Haz click en el icono para entrar al PDF.
    </div>
`;
//Agregar un evento de clic para abrir el PDF
infospot11.addEventListener('click', function(){
    //Abrir el PDF en una nueva pestaña
    window.open("pdf/la_vaca_que_puso_un_huevo.pdf", "_blank");
});
panorama.add(infospot11);

//Agrega la panóramica al visor con pantalla completa habiltada
viewer = new PANOLENS.Viewer({
    container: container,
    //Habilita salida en pantalla completa
    output: 'fullscreen',
    autoHideInfospot: false
});
viewer.add(panorama);