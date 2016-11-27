(function(){
	var moduleForIndexPage = angular.module("mainModule");
	moduleForIndexPage.service("indexPageService",["$http",function($http){
		return{
			getCardColors : _cardColorProvider
		}
		/*############## function declaration ######### */
		function _cardColorProvider(cardsData){
			return [{
				"card_id" : "1",
			"card_color" : "Blue",
			"card_identifier" : "1"
		},
		{
			"card_id" : "2",
			"card_color" : "Brown",
			"card_identifier" : "2"
		},
		{
			"card_id" : "3",
			"card_color" : "BurlyWood",
			"card_identifier" : "3"
		},
		{
			"card_id" : "4",
			"card_color" : "Chartreuse",
			"card_identifier" : "4"
		},
		{
			"card_id" : "5",
			"card_color" : "Cyan",
			"card_identifier" : "5"
		},
		{
			"card_id" : "6",
			"card_color" : "DarkGoldenRod",
			"card_identifier" : "6"
		},
		{
			"card_id" : "7",
			"card_color" : "DarkKhaki",
			"card_identifier" : "7"
		},
		{
			"card_id" : "8",
			"card_color" : "DarkSlateGray",
			"card_identifier" : "8"
		},
		{
			"card_id" : "9",
			"card_color" : "Blue",
			"card_identifier" : "1"
		},
		{
			"card_id" : "10",
			"card_color" : "Brown",
			"card_identifier" : "2"
		},
		{
			"card_id" : "11",
			"card_color" : "BurlyWood",
			"card_identifier" : "3"
		},
		{
			"card_id" : "12",
			"card_color" : "Chartreuse",
			"card_identifier" : "4"
		},
		{
			"card_id" : "13",
			"card_color" : "Cyan",
			"card_identifier" : "5"
		},
		{
			"card_id" : "14",
			"card_color" : "DarkGoldenRod",
			"card_identifier" : "6"
		},
		{
			"card_id" : "15",
			"card_color" : "DarkKhaki",
			"card_identifier" : "7"
		},
		{
			"card_id" : "16",
			"card_color" : "DarkSlateGray",
			"card_identifier" : "8"
		}]
		}
	}]);
})();