
function domotica(){
    $(document).on('mousedown', function(event) {
        console.log(event.button);
    })
}




//Función que nos va a retornar el nombre del documento html en el que nos encontramos actualmente
function localizacion_actual () {
    var ruta_completa = window.location.href;
    var ruta_separada = ruta_completa.split("/");
    var pagina_exacta = ruta_separada[ruta_separada.length-1]; //Nos quedamos con el nombre concreto de la página.
    return pagina_exacta;
}


function cambio_vista(){
    let hoja_css = $('#dark_mode'); //Almacenamos el id de la hoja de estilo modo oscuro
    let cambio_modo = !hoja_css.prop('disabled'); //Almacenamos la contraria a la que tengamos
    hoja_css.prop('disabled', cambio_modo); //Establecemos la propiedad disabled a su nuevo valor

    sessionStorage.setItem('modo_oscuro', cambio_modo.toString()); //Almacenamos modo_oscuro true / false depende del estado
    console.log("cambiamos de vista"); //Mensaje orientativo
}






//Cuando todo esté listo:

$(document).ready(function(){
    var modo_oscuro_activo = sessionStorage.getItem('modo_oscuro') === 'true'; //Vemos el modo en el que andamos
    if(!modo_oscuro_activo) cambio_vista(); //Aplicamos el estilo
    $('#cambio_vista').on('click', cambio_vista); //Asignamos el evento al botón de cambio de vistaç
    console.log("Cargando jquery propio...");
    console.log("Hola desde jquery!");
    //Actuaciones jQuery generales.
    domotica();
    //Función para la descarga del CV... POR HACER
    $('.user-info__btn').on('click', function(){
        console.log("Todavía no se programó la descarga del CV");

    })
    


    //Funcion de prueba de timeStamp, perfecto, almacena el momento exacto del movimiento.
    $(document).on('mousemove', function(event) {
        var timestamp = event.timeStamp;
        var ejeY = event.pageY;
        //console.log(`Evento de raton en el tiempo: ${timestamp} y estoy en la posicio Y: ${ejeY}`);
    })




    //Actuaciones jQuery individuales.
    let pagina_exacta = localizacion_actual();
    switch (pagina_exacta){
        case "index.html":
            console.log("Ese index ahí!!");
        break;
        case "blog.html":
            console.log("Un buen blog siempre entra bien");
        break;
        case "contacto.html":
            console.log("Página para contactar conmigo");
        break;
        case "curriculum.html":
            console.log("Mi curriculum");
            //Agregamos los pop ups para los cerfiticados.
            $('.certificate__img').on('click', function(){
                var imagen_certificado = $(this).attr('src');//Nos traemos la imagen
                var contenido_popup = `<img src="${imagen_certificado}" alt="certificado">`;
                $('.resume__popup').html(contenido_popup);
                console.log(imagen_certificado);
                $('.resume__popup, .resume__popup-overlay').show();
            });
            //Y que se oculten al pulsar fuera de ellos.
            $('.resume__popup-overlay').on('click', function () {
                $('.resume__popup, .resume__popup-overlay').hide();
                console.log("CierrA!!!");
            });

        break;
        case "portafolio.html":
            console.log("El portafolio, muy importante");
        break;
        case "sobre-mi.html":
            console.log("Alguna información sobre mi");
        break;
        default:
            console.log("Bienvenidos a la nave el misterio, no se donde estoy, lo importante es que estamos vivos");
    }
    

})




/*
                <div class="user-info__links">
                    <ul class="links__social">
                        <li class="social__option">
                            <a href="#" class="social__link">
                                <i class="social__icon fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li class="social__option">
                            <a href="#" class="social__link">
                                <i class="social__icon fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
*/ 