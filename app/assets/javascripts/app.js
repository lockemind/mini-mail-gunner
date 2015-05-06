angular.module('miniMailGunner', ['ui.router','templates','Devise','ui.bootstrap'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('mail_lists', {
      url: '/mail_lists',
      templateUrl: 'mail_lists/_mlists.html',
      controller: 'MlistCtrl',
      resolve: {
        postPromise: ['mlists', function(mlists){
          return mlists.getAll();
        }]
      }
    })
    .state('template', {
      url: '/template',
      templateUrl: 'template/_template.html',
      controller: 'TemplateCtrl',
      resolve: {
        postPromise: ['templates', function(templates){
          return templates.getAll();
        }]
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('home', {
      url: '/home',
      templateUrl: '_home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['mlists', function(mlists){
          return mlists.getAll();
        }],
        postPromise2: ['templates', function(templates){
          return templates.getAll();
        }]

      },
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
        }, function (){ $state.go('login');
        } )
      }]
    });

  $urlRouterProvider.otherwise('home');
}]);