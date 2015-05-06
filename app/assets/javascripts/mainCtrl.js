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
  $scope.mpreview = { title: $scope.mlists[0].title ,mails: $scope.mlists[0].mails};
  $scope.tpreview = { title: $scope.templates[0].title ,content: $scope.templates[0].content};
  $scope.message_sent = '';

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

    return $http.post('/msender/send.json', 
      { subject:$scope.tpreview.title,
        mails:$scope.mpreview.mails,
        content: $scope.tpreview.content,
        user: $scope.user.username,
        email: $scope.user.email
      }).success(function(resp_data){
      
        $scope.message_sent = "Message sent.";
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