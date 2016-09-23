angular.module("MiPrimeraApp", [])
.controller("primerController", ["$scope", function(hola){

	hola.nuevoComentario = {}; //inicializamos la variable
	hola.comentarios = [
		{
			comentario: "Me gusta!", //valores del objeto
			username: "Usuario1"
		},
		{
			comentario: "No me gusta",
			username: "Usuario2"
		}
	];

	//creamos el método, creando la funcion 
	hola.agregarComentario = function(){
		hola.comentarios.push(hola.nuevoComentario);
		//al hacer click, agregar a comentarios los datos de
		//nuevoComentario
		hola.nuevoComentario = {};
		//reinicializa el fomulario
	}
}]);
