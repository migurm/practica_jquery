
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


//Cuando todo esté listo:

$(document).ready(function(){
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