angular.module('miniMailGunner')
.factory('templates', [
	'$http',
	function($http){
  
  var o = {
    templates: []
  };

  o.getAll = function() {
    console.log("template factory going to get");
    return $http.get('/templates.json').success(function(data){
      angular.copy(data, o.templates);
    });
  };

  o.create = function(templates) {
    return $http.post('/templates.json', templates).success(function(data){
      o.templates.push(data);
    });
  };

  return o;
}]);