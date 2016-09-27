/*TodoList realizado con Service*/

angular.module("ToDoList", ["LocalStorageModule"])
.service("miServicio", function(localStorageService){

	this.key = "nombreClave";

	if(localStorageService.get(this.key)){
		this.activities = localStorageService.get(this.key);
	}

	else {
		this.activities = [];
	}

	this.add = function(newActv){
		this.activities.push(newActv);
		this.updaLocalStorage();
	};
	this.updaLocalStorage = function(){
		localStorageService.set(this.key, this.activities);
	};
	this.clean = function(){
		this.activities = [];
		this.updaLocalStorage();
		return this.getAll();
	};
	this.getAll = function(){
		return this.activities;
	}
	this.removeItem = function(item){
		this.activities = this.activities.filter(function(activty){
			return activty !== item;
		});
		this.updaLocalStorage();
		return this.getAll();
	}	
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