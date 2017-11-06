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
