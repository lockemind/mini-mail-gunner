angular.module('miniMailGunner')
.controller('MainCtrl', [
'$scope',
'mlists',
'templates',
'$http',
'Auth',
function($scope, mlists, templates, $http, Auth){
  
  $scope.mlists = mlists.mlists;
  $scope.templates = templates.templates;
  console.log("$scope.mlists.length " + $scope.mlists.length);
  if ($scope.mlists.length > 0 && $scope.templates.length > 0 ) {
    $scope.mpreview = { title: $scope.mlists[0].title ,mails: $scope.mlists[0].mails};
    $scope.tpreview = { title: $scope.templates[0].title ,content: $scope.templates[0].content};
  }

  Auth.currentUser().then(function (user){
    $scope.user = user;
  });

  $scope.sendMails = function(){
    
    sendM({
        content: $scope.content,
        mails: $scope.mails,
    });
  }

  sendM = function() {
    if(!$scope.tpreview || !$scope.mpreview) { return; }

    return $http.post('/msender/send.json', 
      { subject:$scope.tpreview.title,
        mails:$scope.mpreview.mails,
        content: $scope.tpreview.content,
        user: $scope.user.username,
        email: $scope.user.email
      }).success(function(resp_data){
        $scope.error_message = null;
        $scope.message_sent = "Message sent.";
      }).error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.message_sent = null;
        $scope.error_message = "Error: message not sent.";
      });
  };

  updateMLPreview = function(mlist) {
    console.log("updateMLPreview ", mlist )
    $scope.previewML = mlist;
  }

  updateTemplatePreview = function(template) {
    console.log("updateMLPreview ", template )
    $scope.previewTemplate = template;
  }
}]);