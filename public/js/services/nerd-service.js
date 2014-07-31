angular.module('NerdService', []).factory('Nerd', ['$http', function($http){
	return {
		get: function () {
			return $http.get('api/nerds');
		},
		create: function (nerdData) {
			return $http.post('api/nerds', geekData);
		},
		delete: function (id) {
			return $http.delete('api/nerds', id)
		}
	};
}]);