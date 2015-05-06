angular.module('miniMailGunner')
.controller('MainCtrl', [
'$scope',
'mlists',
'templates',
'$http',
'$modal', 
'$log',
'Auth',
function($scope, mlists, templates, $http, $modal, $log,Auth){
  
  $scope.mlists = mlists.mlists;
  $scope.templates = templates.templates;
  $scope.mpreview = { title: $scope.mlists[0].title ,mails: $scope.mlists[0].mails};
  $scope.tpreview = { title: $scope.templates[0].title ,content: $scope.templates[0].content};

  Auth.currentUser().then(function (user){
    $scope.user = user;
  });

  $scope.sendMails = function(){
    
    console.log("$scope.mails   " + $scope.mails);
    console.log("$scope.content   " + $scope.content);

    sendM({
        content: $scope.content,
        mails: $scope.mails,
    });
  }

  sendM = function() {
//     console.log("sending to /msender/send.json: ", data )
// console.log("$scope",$scope);
//     console.log("$scope.mpreview? " , {subject:$scope.tpreview.title,
//         mails:$scope.mpreview.mails,
//         content: $scope.tpreview.content,
//         user: $scope.user.username,
//         email: $scope.user.email
//       });
    return $http.post('/msender/send.json', 
      { subject:$scope.tpreview.title,
        mails:$scope.mpreview.mails,
        content: $scope.tpreview.content,
        user: $scope.user.username,
        email: $scope.user.email
      }).success(function(resp_data){
      // o.feedback.push(resp_data);
      console.log("temos resposta!")
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

    $scope.colors = [
          {name:'black', shade:'dark'},
          {name:'white', shade:'light', notAnOption: true},
          {name:'red', shade:'dark'},
          {name:'blue', shade:'dark', notAnOption: true},
          {name:'yellow', shade:'light', notAnOption: false}
        ];
    $scope.myColor = $scope.colors[2]; // red

}]);