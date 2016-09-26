angular.module("ToDoList", ["LocalStorageModule"])
.factory("miServicio", function(localStorageService){
	/*Esta funcion representa el servicio
	Dentro de esta funcion podemos armar un objeto y
	retornarlo
	- Los servicios pueden inyectar otros servicios (como
	localStorageService, $http, $rootScope) en vez de inyectarlo al controlador
	*/
	var servicio = {};
	servicio.key = "nombreClave";

	if(localStorageService.get(servicio.key)){
		servicio.activities = localStorageService.get(servicio.key);
	}
	//si no, "todo" es un arreglo vacío
	else {
		servicio.activities = [];
	}

	servicio.add = function(newActv){
		servicio.activities.push(newActv);
		servicio.updaLocalStorage();
	};
	servicio.updaLocalStorage = function(){
		localStorageService.set(servicio.key, servicio.activities);
	};
	servicio.clean = function(){
		servicio.activities = [];
		servicio.updaLocalStorage();
	};
	servicio.getAll = function(){
		return servicio.activities;
	}
	servicio.removeItem = function(item){
		servicio.activities = servicio.activities.filter(function(activty){
			return activty !== item;
		});
		servicio.updaLocalStorage();
		return servicio.getAll();
	}
	return servicio;	
})

.controller("ToDoController", function($scope, miServicio){

	$scope.todo = miServicio.getAll();
	$scope.newActv = {};

	$scope.addActv = function(){
		miServicio.add($scope.newActv);
		$scope.newActv = {};
	}
	$scope.removeActv = function(item){
		$scope.todo = miServicio.removeItem(item);
	}
	$scope.clean = function(){
		$scope.todo = miServicio.clean();
	}
});