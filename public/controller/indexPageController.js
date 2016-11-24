(function(){
	var moduleForIndexPage = angular.module('mainModule');	
	moduleForIndexPage.controller('indexPageController',['$scope','indexPageService',function($scope,indexPageService){		
		console.log(indexPageService.getCardColors());
	}]);
})();