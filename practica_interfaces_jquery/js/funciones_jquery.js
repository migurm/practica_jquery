
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


function volver_arriba(){
    $('body').append('<button id="volver-arriba">Volver arriba</button>');

    // Cuando el usuario hace scroll de 20px desde la parte superior del documento, muestra el botón
    $('.content__page').scroll(function() {
        console.log("Estamos scroleando amigos");
        if ($(this).scrollTop() > 20) {
            console.log("Debería aparecer el botoncito");
            $('#volver-arriba').fadeIn();
        } else {
            $('#volver-arriba').fadeOut();
        }
    });

    // Cuando el usuario hace clic en el botón, desplaza el documento hasta la parte superior
    $('#volver-arriba').click(function() {
        $('.content__page').animate({scrollTop: 0}, 800);
        return false;
    });
}


function menu_hamburguesa(){
    var toggleButtomMenu = $('#menu_hamburguesa');
    var menuLeft = $('.layout__menu');
    var overlay = $('#overlay');
    
    toggleButtomMenu.on("click", function () {
        console.log("pulso el menu");
        if (toggleButtomMenu.hasClass("fa-close")) {
            menuLeft.hide();
        } else {
            menuLeft.show();
        }
    });
    
    overlay.on("click", function () {
        menuLeft.hide();
    });
}

function transicion(){
    $('a.transicion').on('click', function(event) {
        event.preventDefault();
        var nueva_pagina = this.href;
        console.log("Salta el evento de transicion");
        $('body').fadeOut(500, function(){
            window.location = nueva_pagina;
        });
    });

    $('body').hide().fadeIn(500);
}



//Cuando todo esté listo:

$(document).ready(function(){
    volver_arriba();
    transicion();
    menu_hamburguesa();
    
    var modo_oscuro_activo = sessionStorage.getItem('modo_oscuro') === 'true'; //Vemos el modo en el que andamos
    if(!modo_oscuro_activo) cambio_vista(); //Aplicamos el estilo
    $('#cambio_vista').on('click', cambio_vista); //Asignamos el evento al botón de cambio de vistaç
    console.log("Cargando jquery propio...");
    console.log("Hola desde jquery!");
    //Actuaciones jQuery generales.
    //domotica(); Fue demasiado ambicioso.
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
            $(document).ready(function(){
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                      },
                      navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      },
                });

                console.log("Agregando pop ups");
                // Agregamos los pop ups para las imágenes de los artículos.
                $('.article__image').on('click', function(){
                    var imagen_articulo = $(this).attr('src'); // Nos traemos la imagen
                    var contenido_popup = `<img src="${imagen_articulo}" alt="Imagen del blog">`;
                    $('.blog__popup').html(contenido_popup);
                    console.log(imagen_articulo);
                    $('.blog__popup, .blog__popup-overlay').show();
                });
                // Y que se oculten al pulsar fuera de ellos.
                $('.blog__popup-overlay').on('click', function () {
                    $('.blog__popup, .blog__popup-overlay').hide();
                    console.log("Cierra!!!");
                });
            });
            

        break;
        case "contacto.html":
            console.log("Página para contactar conmigo");
            //Agregamos el selector de fecha jquery
            $(".selector_fecha").datepicker({
                dateFormat: 'dd-mm-yy'
            });
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
            $(document).ready(function() {
                $("#div_acordeon").accordion();
            });
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