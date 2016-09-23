angular.module("miModulo",[])
	/*.controller("controlador", function($scope){
		$scope.nombre = "Emilia";
		setTimeout(function(){
			$scope.nombre = "Guillermo";
			console.log($scope.nombre);
		}, 2000);

		Acá no se actualiza en la vista porque el angular context con expera
		que se actualice la vista y no existe sincronización
	});*/

	.controller("controlador", function($scope){
		$scope.nombre = "Emilia";
		setTimeout(function(){

			/*Solucion sencilla, llamar a $digest
			Esta va a ir por todos los watchers revisando si hay cambios
			para luego actualizalos

			$scope.$digest();

			Tambien podemos usar $apply, ya que este llama a
			$digest 

			$scope.$apply();
			*/

			$scope.$apply(function(){
				$scope.nombre = "Guillermo";
			});

			/*
			La forma correcta de hacerlo es pasar es pasar
			una funcion a $apply como parametro y actualizar ahí la vista
			Así $apply ejecuta el cambio y luego llama a $digest 
			para que actualice la vista*/
		}, 2000);
	});