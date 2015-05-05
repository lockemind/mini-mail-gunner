angular.module('miniMailGunner')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){

		$scope.login = function() {
		   Auth.login($scope.user).then(function(){
		     $state.go('home');
		   },
		   function(par){ 
		   	$scope.errors = par.data.error;
		   	console.log('login failed ', par.data.error);}
		   );
		 };

		 $scope.register = function() {
	 	 	console.log('register running ' , $scope.user);
		  Auth.register($scope.user).then(
		  	function(){
		   		console.log('trying to go home ');
		      $state.go('home');	
		    },
		    function(par){ 
		   		$scope.errors = par.data.errors;
		   	
		   	 	console.log('register failed ', par.data.errors);},
		    function(par){
		   		console.log('warnings ', par);
		    }
		 	);
		 };
}]);