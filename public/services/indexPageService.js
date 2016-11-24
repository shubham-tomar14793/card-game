(function(){
	var moduleForIndexPage = angular.module('mainModule');
	moduleForIndexPage.service('indexPageService',['$http',function($http){
		return{
			getCardColors : _cardColorProvider
		}

		function _cardColorProvider(){
			return {'color':'red'}
		}
	}]);
})();