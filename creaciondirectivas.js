angular.module("CustomDirective", [])
.directive("backImg", function(){
	return function(scope, element, attrs){
		attrs.$observe('backImg', function(value){ //value=url img
			//Js tradicional
			element.css({
				"background": "url("+value+")",
				"background-size": "cover",
				"background-position": "center"
			});
		});
	}
})

.controller("AppCtrl", function($scope, $http){
	$http.get("https://api.github.com/users/cgogo/repos") 				//llama la api
	.success(function(data){											//lo que hará con esa data=info del arreglo
		$scope.repos = data;
	})
	.error(function(err){												//lo que hará en caso de error
		console.log(err);
	})
});