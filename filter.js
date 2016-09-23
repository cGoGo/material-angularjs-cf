angular.module("MiModulo", [])
	//Creando un filtro
	//llamamos el método filter y le pasamos dos parámetros
	// primer parámetro, nombre del filtro
	// segundo parámetro, funcion que va a evaluar el texto
	.filter("removeHtml", function(){
		return function(texto){
			return String(texto).replace(/<[^>]+>/gm, '')
		}
	})
	.controller("FiltersController", function($scope){
		$scope.mi_html = {};
		$scope.mi_html.title = "Hola";
		$scope.mi_html.body = "Hola mundo";
	})