angular.module("CustomDirective", [])
	.controller("AppCtrl", function($scope, $http){
		$http.get("https://api.github.com/users/cgogo/repos") 				//llama la api
		.success(function(data){											//lo que hará con esa data=info del arreglo
			$scope.repos = data;
		})
		.error(function(err){												//lo que hará en caso de error
			console.log(err);
		})
	});