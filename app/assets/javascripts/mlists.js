angular.module('miniMailGunner')
.factory('mlists', [function(){
  var o = {
    mlists: [
	    {title: 'clients', mails: 'ricardo@ua.pt, irorenne-6658@yopmail.com, jeffippinny-8371@yopmail.com'},
		  {title: 'publicity', mails: 'jeffippinny-8371@yopmail.com'},
		  {title: 'online press', mails: 'qafinnudaj-9518@yopmail.com,ricardo@ua.pt, irorenne-6658@yopmail.com'},
		  {title: 'traditional press', mails: 'qafinnudaj-9518@yopmail.com,ricardo@ua.pt, irorenne-6658@yopmail.com,qafinnudaj-9518@yopmail.com,ricardo@ua.pt, irorenne-6658@yopmail.com,qafinnudaj-9518@yopmail.com,ricardo@ua.pt, irorenne-6658@yopmail.com'},
		  {title: 'family', mails: 'ennabimiw-2320@yopmail.com,pedr.amaral@gmail.com'}]
  };
  return o;
}]);