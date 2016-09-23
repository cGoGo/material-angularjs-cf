angular.module("MiPrimeraApp", [])
.controller("primerController", function($scope){

	$scope.nuevoComentario = {}; //inicializamos la variable
	$scope.comentarios = [
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
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		//al hacer click, agregar a comentarios los datos de
		//nuevoComentario
		$scope.nuevoComentario = {};
		//reinicializa el fomulario
	}
});
