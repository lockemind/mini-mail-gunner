angular.module('miniMailGunner', ['ui.router','templates','Devise'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
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
        }]
      },
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
        }, function (){ $state.go('login');
        } )
      }]
    })
    // .state('template', {
    //   url: '/template',
    //   templateUrl: '/template/_template.html',
    //   controller: 'TemplateCtrl',
    //   resolve: {
    //     postPromise: ['template', function(template){
    //       return templates.getAll();
    //     }]
    //   },
    //   onEnter: ['$state', 'Auth', function($state, Auth) {
    //     Auth.currentUser().then(function (){
    //     }, function (){ $state.go('login');
    //     } )
    //   }]
    // })
    ;

  $urlRouterProvider.otherwise('home');
}]);