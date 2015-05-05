angular.module('miniMailGunner')
.controller('MlistCtrl', [
'$scope',
'mlists',
function($scope, mlists){
  
  $scope.mlists = mlists.mlists;
  $scope.addML = function(){
    if(!$scope.title || $scope.title === '' ||
    	 !$scope.mails || $scope.mails === '') { return; }
    
      mlists.create({
        title: $scope.title,
        mails: $scope.mails,
      });

      $scope.title = '';
      $scope.mails = '';
  }
}]);
