angular.module('miniMailGunner')
.controller('MlistCtrl', [
'$scope',
'mlists',
'$window',
function($scope, mlists, $window){
  
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

  $scope.deleteML = function(id, index){
    
    if ($window.confirm("Are u sure you want do delete this mailing list?") == true) {
        mlists.destroy(id, index);
    } 
  };

}]);