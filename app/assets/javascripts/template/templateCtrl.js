angular.module('miniMailGunner')
.controller('TemplateCtrl', [
'$scope',
'templates',
function($scope, templates){
  
  $scope.templates = templates.templates;
  $scope.addTemplate = function(){
    if(!$scope.title || $scope.title === '' ||
    	 !$scope.content || $scope.content === '') { return; }
    
      templates.create({
        title: $scope.title,
        content: $scope.content,
      });

      $scope.title = '';
      $scope.content = '';
  }
}]);
