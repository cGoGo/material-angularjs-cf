angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
	//en este if estamos usando local storage
	//si dentro de local storage hay datos entonces agregar
	//la info dentro de "todo"
	if(localStorageService.get("nombreClave")){
		$scope.todo = localStorageService.get("nombreClave");
	}
	//si no, "todo" es un arreglo vacío
	else {
		$scope.todo = [];
	}
	/*
		{
			descripcion: 	"Terminar tareas",
			fecha: 		"3-03-15 2:00pm"
		}
	*/
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
		//actualizar nuestro local storage
		localStorageService.set("nombreClave",$scope.todo);
	}
	//para limpiar nuestra lista de tareas
	$scope.clean = function(){
		$scope.todo = [];
		localStorageService.set("nombreClave",$scope.todo);	
	}
});