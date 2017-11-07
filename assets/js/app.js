//para que el boton inicie deshabilitado
document.getElementById('boton').disabled=true;

//para obtener el valor del texto ingresado
var comentario = document.getElementById('twit');
comentario.addEventListener('keyup', function(){
	//crear una variable en donde quede la longitud del comentario que se ingresa a textarea
	var longitudComentario = comentario.value.length;
	var contador = longitudComentario;
	var maxCharacter = 140;
	//cuenta en forma regresiva
	maxCharacter = 140 - contador;
	//para que aparezca en el html
	document.getElementById('contCharacter').innerHTML=maxCharacter;
	//condiciones que se tiene que cumplir para habilitar o deshabilitar el boton y que cambie de color el contador
	if (contador >=1) {
		document.getElementById('boton').disabled=false;
	}
	if (contador ===0 || contador > 140) {
		document.getElementById('boton').disabled=true;
	}
	if(contador >= 120 && contador< 130){
		document.getElementById('contCharacter').style.color = "yellow";
	}
	if (contador >= 130 && contador<= 140) {
		document.getElementById('contCharacter').style.color = "red";
	}

})

	
var boton = document.getElementById('boton');
boton.addEventListener('click', function(){
	//texto ingresado
	var comentario = document.getElementById('twit').value;
	//limpiar el textarea
	document.getElementById('twit').value = '';
	//contenedor que esta en el html
	var cont = document.getElementById('cont');
	//el div que contiene cada comentario
	var nuevoComentario = document.createElement('div');

	//creo un nodo tipo texto	
	var textoNuevoComentario = document.createTextNode(comentario);
	//creo un parrafo
	var elementoContenedor = document.createElement('p');
	elementoContenedor.appendChild(textoNuevoComentario);
	nuevoComentario.appendChild(elementoContenedor);

	cont.appendChild(nuevoComentario);
})

//para que textarea crezca de acuerdo al tamaño del texto
var textarea = document.querySelector('textarea');
//se crea un evento 
textarea.addEventListener('keydown', function autosize(){
	var size = this;
	//setTimeout se ejecute dentro de un período de tiempo determinado
	setTimeout(function(){
	  	size.style.cssText = 'height:auto; padding:2';
	  	//scrollHeight devuelve la altura completa de un elemento en píxeles, incluido el relleno, pero no el borde, 
	  	//la barra de desplazamiento o el margen.
    	size.style.cssText = 'height:' + size.scrollHeight + 'px';
  	},0);

})

//Las propiedades scrollWidth y scrollHeight devuelven la altura y el ancho completos de un elemento, 
//incluidos el alto y el ancho que no se pueden ver (debido al desbordamiento).         
/*
var textarea = document.getElementsByTagName(textarea).value;
textarea.addEventListener('onkeyup', function(){
	//texto ingresado
	if (textarea.value.length !== 0 || !== null ) {
		document.getElementById('boton').disabled = false;
	}
	if (textarea.value.length === 0) {
		document.getElementById('boton').disabled=true;
	}
})
*/
//evento de click para el boton


//para que el boton inicie desactivado
//document.getElementById('boton').disabled = true;




/*textarea.addEventListener('keyup', function(){
	var twitLength = textarea.length;
		if (twitLength >=1){
		document.getElementById('boton').disabled = false;
	}
		if(twitLength === 0){
		document.getElementById('boton').disabled = true;
	}
})
*/

/*
para deshabilitar boton
document.getElementById("myBtn").disabled = true;
*/