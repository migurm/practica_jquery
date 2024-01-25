
//LLamamos a jquery para todas las paginas.

document.addEventListener('DOMContentLoaded', function(){
	//Primer link
	let link_1 = document.createElement("script");
	link_1.setAttribute('src', 'https://code.jquery.com/jquery-3.7.1.js');
	link_1.setAttribute('integrity', 'sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=');
	link_1.setAttribute('crossorigin', 'anonymous');
	document.head.appendChild(link_1);

	//Segundo link
	let link_2 = document.createElement("script");	
	link_2.setAttribute('src', 'https://code.jquery.com/ui/1.13.2/jquery-ui.js');
	link_2.setAttribute('integrity', 'sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=');
	link_2.setAttribute('crossorigin', 'anonymous');
	document.head.appendChild(link_2);

	//Tercer link
	let link_3 = document.createElement("link");
	link_3.setAttribute('rel', 'stylesheet');
	link_3.setAttribute('href', 'https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css');
	document.head.appendChild(link_3);
});