angular.module('miniMailGunner')
.controller('TemplateCtrl', [
'$scope',
'templates',
'$window',
function($scope, templates, $window){
  
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
  };

  $scope.deleteTemplate = function(id, index){
    
    if ($window.confirm("Are u sure you want do delete this mailing list?") == true) {
        templates.destroy(id, index);
    } 
  };
}]);
