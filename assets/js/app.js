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

	if (contador >=1) {
		document.getElementById('boton').disabled=false;
	}
	if (contador ==0) {
		document.getElementById('boton').disabled=true;
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
		
	var textoNuevoComentario = document.createTextNode(comentario);
	var elementoContenedor = document.createElement('p');
	elementoContenedor.appendChild(textoNuevoComentario);
	nuevoComentario.appendChild(elementoContenedor);

	cont.appendChild(nuevoComentario);
})


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