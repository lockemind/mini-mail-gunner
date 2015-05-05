angular.module('miniMailGunner')
.factory('mlists', [
	'$http',
	function($http){
  
  var o = {
    mlists: []
  };

  o.getAll = function() {
    return $http.get('/mlists.json').success(function(data){
      angular.copy(data, o.mlists);
    });
  };

  o.create = function(mlist) {
    return $http.post('/mlists.json', mlist).success(function(data){
      o.mlists.push(data);
    });
  };

  return o;
}]);