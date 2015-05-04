angular.module('miniMailGunner')
.controller('MainCtrl', [
'$scope',
'mlists',
function($scope, mlists){
  $scope.test = 'Hello world!';
  $scope.mlists = mlists.mlists;
  $scope.addML = function(){
    if(!$scope.title || $scope.title === '' ||
    	 !$scope.mails || $scope.mails === '') { return; }
    
      $scope.mlists.push({
        title: $scope.title,
        mails: $scope.mails,
      });
      $scope.title = '';
      $scope.mails = '';
  }
}]);
