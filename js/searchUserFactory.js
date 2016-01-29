githubUserSearch.factory('SearchUser', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  var access_token = '3266211922b79b76a6e566d92a424270e6b5d0c0';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': access_token
        }
      });
    }
  };
}]);
