angular.module('miniMailGunner')
.controller('MainCtrl', [
'$scope',
'mlists',
'templates',
'$http',
function($scope, mlists, templates, $http){
  
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

}]);