angular.module('miniMailGunner')
.controller('MainCtrl', [
'$scope',
'mlists',
'templates',
'$http',
'$modal', 
'$log',
function($scope, mlists, templates, $http, $modal, $log){
  
  $scope.mlists = mlists.mlists;
  $scope.templates = templates.templates;

  $scope.sendMails = function(){
    
    console.log("$scope.mails   " + $scope.mails);
    console.log("$scope.content   " + $scope.content);

    sendM({
        content: $scope.content,
        mails: $scope.mails,
    });
  }

  sendM = function(data) {
    console.log("sending to /msender/send.json: ", data )
    return $http.post('/msender/send.json', data).success(function(resp_data){
      // o.feedback.push(resp_data);
      console.log("temos resposta!")
    });
  };

  $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };

}]);