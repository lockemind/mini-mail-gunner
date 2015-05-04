angular.module('miniMailGunner', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.addML = function(){
    if(!$scope.title || $scope.title === '' ||
    	 !$scope.mails || $scope.mails === '') { return; }
    
      $scope.mlists.push({
        title: $scope.title,
        mails: $scope.mails,
      });
      $scope.title = '';
      $scope.mails = '';
  };

  $scope.mlists = [
  {title: 'clients', mails: 'ricardo@ua.pt, irorenne-6658@yopmail.com, jeffippinny-8371@yopmail.com'},
  {title: 'publicity', mails: 'jeffippinny-8371@yopmail.com'},
  {title: 'online press', mails: 'qafinnudaj-9518@yopmail.com,ricardo@ua.pt, irorenne-6658@yopmail.com'},
  {title: 'traditional press', mails: 'qafinnudaj-9518@yopmail.com,ricardo@ua.pt, irorenne-6658@yopmail.com,qafinnudaj-9518@yopmail.com,ricardo@ua.pt, irorenne-6658@yopmail.com,qafinnudaj-9518@yopmail.com,ricardo@ua.pt, irorenne-6658@yopmail.com'},
  {title: 'family', mails: 'ennabimiw-2320@yopmail.com,pedr.amaral@gmail.com'}];
}]);