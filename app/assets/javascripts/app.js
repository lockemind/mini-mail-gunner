angular.module('miniMailGunner', ['ui.router','templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '_home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);