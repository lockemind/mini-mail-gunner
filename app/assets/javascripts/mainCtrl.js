angular.module('miniMailGunner')
.controller('MainCtrl', [
'$scope',
'mlists',
'templates',
function($scope, mlists, templates){
  
  $scope.mlists = mlists.mlists;
  $scope.templates = templates.templates;

  $scope.sendMails = function(){
    
    console.log("$scope.mails   " + $scope.mails);
    console.log("$scope.content   " + $scope.content);
      
  }

  $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
}]);
