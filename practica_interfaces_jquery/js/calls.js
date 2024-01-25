
//Funcion para cargar los recursos necesarios de fuentes para la página - NO EFICIENTE / Descartado
function carga_fuentes(){
	let fuentes_1 = document.createElement("link");
	fuentes_1.setAttribute('rel', 'stylesheet');
	fuentes_1.setAttribute('href', 'fonts/fontawesome-free-6.1.2-web/css/all.css');
	document.head.appendChild(fuentes_1);

	//Fuentes 2/2
	let fuentes_2 = document.createElement("link");
	fuentes_2.setAttribute('rel', 'stylesheet');
	fuentes_2.setAttribute('href', 'fonts/poppins/poppins.css');
	document.head.appendChild(fuentes_2);
}
//Función para cargar los recursos necesarios de CSS - NO EFICIENTE / Descartado
function carga_css(){
	//CSS Scroll
	let scroll = document.createElement("link");
	scroll.setAttribute('rel', 'stylesheet');
	scroll.setAttribute('href', 'css/scroll.css');
	document.head.appendChild(scroll);
	
	//CSS Estilo
	let estilo = document.createElement("link");
	estilo.setAttribute('rel', 'stylesheet');
	estilo.setAttribute('href', 'css/estilos.css');
	document.head.appendChild(estilo);	
	
	//CSS Responsive
	let responsive = document.createElement("link");
	responsive.setAttribute('rel', 'stylesheet');
	responsive.setAttribute('href', 'css/responsive.css');
	document.head.appendChild(responsive);
}
























//Función para cargar los recursos necesarios de JQUERY
function carga_jquery(){
	console.log("Cargando jquery...");
	//JQuery 1/3
	let link_1 = document.createElement("script");
	link_1.setAttribute('src', 'https://code.jquery.com/jquery-3.7.1.js');
	link_1.setAttribute('integrity', 'sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=');
	link_1.setAttribute('crossorigin', 'anonymous');
	document.head.appendChild(link_1);

	//JQuery 2/3
	let link_2 = document.createElement("script");	
	link_2.setAttribute('src', 'https://code.jquery.com/ui/1.13.2/jquery-ui.js');
	link_2.setAttribute('integrity', 'sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=');
	link_2.setAttribute('crossorigin', 'anonymous');
	document.head.appendChild(link_2);

	//JQuery 3/3 (css)
	let link_3 = document.createElement("link");
	link_3.setAttribute('rel', 'stylesheet');
	link_3.setAttribute('href', 'https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css');
	document.head.appendChild(link_3);	

	//JQuery propio
	let link_4 = document.createElement("script");
	link_4.setAttribute('src', 'js/funciones_jquery.js');
	document.head.appendChild(link_4);
	

}



/*
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"></link>
<script src="js/funciones_jquery.js"></script>
*/














function carga_footer(){
//Tiene que ser el último hijo de section class="aside__user-info"
/*
Tiene que tener esta pinta:
                <footer class="user-info__footer"> 
                    &copy; 2024 Miguel A. Rueda - Interfaces
                </footer>
*/ 
	let footer = document.createElement("footer");
	footer.classList.add("user-info__footer");
	footer.textContent = "© 2024 Miguel A. Rueda - Interfaces";
	document.querySelector(".aside__user-info").appendChild(footer);

	//Le agregamos ahora la segunda clase que nos dará una apariencia de carga difuminada.
	setTimeout(function() {
		footer.classList.add('show');
	}), 100;

}














document.addEventListener('DOMContentLoaded', function(){
	carga_jquery();
	carga_footer();
});
