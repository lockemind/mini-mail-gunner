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
  
  o.update = function(mlist) {
    return $http.patch('/mlists/'+mlist.id+'.json', mlist).success(function(data){
      
    });
  };
  
  o.destroy = function(id, index) {
    return $http.delete('/mlists/'+id+'.json').success(function(data){
      console.log("deleted");
      o.mlists.splice(index, 1);
    });
  };

  return o;
}]);