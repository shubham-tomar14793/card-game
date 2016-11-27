(function(){
	var moduleForIndexPage = angular.module('mainModule');	
	moduleForIndexPage.controller('indexPageController',['$scope','$timeout','indexPageService','$route',function($scope,$timeout,indexPageService,$route){				
		/*############## variable declaration ######### */
		var actualCardArray = indexPageService.getCardColors();
		var ref_identifier = 0;
		var ref_objectId = 'object';
		$scope.achievedScore = 0;
		$scope.remainingScore = 50;
		$scope.toastMessage = '';
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

			function checkForFirstClick(referenceData,refObjectData){
				if(referenceData==0 && refObjectData=='object'){
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
			function setTheReferenceData(comingData,objectId){
				ref_identifier = comingData;
				ref_objectId = objectId;
				console.log("reference , objectId " + ref_identifier+" "+ ref_objectId);
			}
			function dataMatched(secondClickData,secondObjData){
				if(ref_identifier == secondClickData && ref_objectId == secondObjData){
					alert('same card cannot be selected');					
					return true;					
				}
				if(ref_identifier == secondClickData && ref_objectId != secondObjData){
					$scope.achievedScore = $scope.achievedScore+20;	
					setReferenceToDefault();				
					return true;
				}
				return false;
			}
			function setReferenceToDefault(){
				ref_identifier = 0;	
				ref_objectId = 'object';			
				return;
			}
			function resultDisplay(event){
				switch(event){
					case 'win': 
					$scope.toastMessage = {'class' : 'messageIn','message' : 'You Won!!'};
					break;
					case 'loose':
					$scope.toastMessage = {'class' : 'messageIn','message' : 'You cannot make it, Try Again!!'};
					break;					
				}
			}
			function reloadGame(){
				$timeout(function () {								
					window.location.reload();
				}, 3000);
			}
			function selectCard(selector){
				var element = angular.element(document.querySelector('#card'+selector.card_id));
				console.log(element.addClass(selector.card_color));
				element.addClass('disabled');
			}
			
			$scope.checkForTheMatch = function(identifier){
				selectCard(identifier.data);
				console.log(identifier.data);
				if(checkForFirstClick(ref_identifier,ref_objectId)){
					setTheReferenceData(identifier.data.card_identifier,identifier.data.$$hashKey);					
					console.log("first time");
					return null;
				}
				else{
					console.log("second time");
					if(dataMatched(identifier.data.card_identifier,identifier.data.$$hashKey)){						
						console.log("matched");												
					}					
					else{
						if(validRemainingScore($scope.remainingScore))
						{
							$scope.remainingScore = $scope.remainingScore -20;
							setReferenceToDefault();
						}
						else{		
							resultDisplay('loose');
							reloadGame();												
						}
					}
				}
			}
	}]);
})();
