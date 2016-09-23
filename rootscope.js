angular.module("miApp",[])
	.run(function($rootScope){
		$rootScope.nombre = "Emilia";
	})
	.controller("miControl", function($scope){
		$scope.nombre = "Guillermo";
	})

/*
	Podemos usar nombre declarado en rootScope dentro del
	controlador porque la variable queda global.

	Estamos sobreescribiendo la variable dentro del controlador
	solo para usarla dentro de ese controlador. Fuera de él
	la variable va a mantener el valor de $rootScope

	En html, al escribir $parent.nombre dentro del controlador
	estamos llamando al valor de la varible contenida en el 
	padre y no desde dentro del controlador
*/
	.controller("controladorHijo", function($scope){

	});