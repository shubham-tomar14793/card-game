(function(){
	var mainModule = angular.module('mainModule',['ngRoute']);
	mainModule.config(function($routeProvider){
		$routeProvider.when('/',{
			templateUrl : 'partial-views/card-game.html'
		})
		.otherwise({redirectTo : '/'});
	});
})();