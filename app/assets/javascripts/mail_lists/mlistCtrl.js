angular.module('miniMailGunner')
.controller('MlistCtrl', [
'$scope',
'mlists',
'$window',
function($scope, mlists, $window){
  
  $scope.create_bool = false;
  $scope.update_bool = false;
  
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

  $scope.toggleCreate = function(id, index){
    
    $scope.update_bool = false;
    $scope.create_bool = true;
  };


  $scope.openEdit = function(mlist, index){
      console.log("openEdit " , mlist);
      $scope.update_bool = true;
      $scope.create_bool = false;
      $scope.selected_mlist = mlist;
  };


  $scope.editML = function(){
    console.log("editML ");
    $scope.update_bool = false;

    if(!$scope.selected_mlist.title || $scope.selected_mlist.title === '' ||
       !$scope.selected_mlist.mails || $scope.selected_mlist.mails === '') { return; }
    
      mlists.update({
        id : $scope.selected_mlist.id,
        title: $scope.selected_mlist.title,
        mails: $scope.selected_mlist.mails,
      });

  };

}]);