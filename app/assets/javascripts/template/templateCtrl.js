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
    
    if ($window.confirm("Are u sure you want do delete this template?") == true) {
        templates.destroy(id, index);
    } 
  };

  $scope.toggleCreate = function(id, index){
    
    $scope.update_bool = false;
    $scope.create_bool = true;
  };


  $scope.openEdit = function(template, index){
      
      $scope.update_bool = true;
      $scope.create_bool = false;
      $scope.selected_template = template;
  };


  $scope.editTemplate = function(){
    
    $scope.update_bool = false;

    if(!$scope.selected_template.title || $scope.selected_template.title === '' ||
       !$scope.selected_template.mails || $scope.selected_template.mails === '') { return; }
    
      templates.update({
        id : $scope.selected_template.id,
        title: $scope.selected_template.title,
        mails: $scope.selected_template.mails,
      });
  };

}]);
