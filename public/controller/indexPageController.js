(function(){
	var moduleForIndexPage = angular.module('mainModule');	
	moduleForIndexPage.controller('indexPageController',['$scope','indexPageService',function($scope,indexPageService){				
		/*############## variable declaration ######### */
		var actualCardArray = indexPageService.getCardColors();
		var ref_identifier = 0;
		$scope.achievedScore = 0;
		$scope.remainingScore = 50;
		$scope.cardData = shuffle(actualCardArray);

		console.log($scope.cardData);
		/*############## function declaration ######### */
		    /**********this function randomizes the object coming from the backend **********/
			function shuffle(array) {
			  var copy = [], n = array.length, i;		  
			  while (n) {		  
			    i = Math.floor(Math.random() * array.length);		  
			    if (i in array) {
			      copy.push(array[i]);
			      delete array[i];
			      n--;
			    }
			  }
			  return copy;
			};

			function checkForFirstClick(referenceData){
				if(referenceData==0){
					return true;
				}
				return false;
			}
			function validRemainingScore(score){
				if(score>15){
					return true;
				}
				return false;
			}
			function setTheReferenceData(comingData){
				ref_identifier = comingData;
				console.log("reference set to " + ref_identifier);
			}
			function dataMatched(secondClickData){
				if(ref_identifier == secondClickData){
					return true;
				}
				return false;
			}
			function setReferenceToDefault(){
				ref_identifier = 0;
				return;
			}
			$scope.checkForTheMatch = function(identifier){
				console.log(identifier.data);
				if(checkForFirstClick(ref_identifier)){
					setTheReferenceData(identifier.data.card_identifier);					
					console.log("first time");
					return null;
				}
				else{
					console.log("second time");
					if(dataMatched(identifier.data.card_identifier)){
						console.log("matched");
						$scope.achievedScore =$scope.achievedScore+20;
						setReferenceToDefault();
					}
					else{
						$scope.remainingScore = $scope.remainingScore -20;
						setReferenceToDefault();
					}
				}
			}

	}]);
})();