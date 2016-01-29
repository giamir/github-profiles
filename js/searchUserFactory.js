githubUserSearch.factory('SearchUser', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  var access_token = '2ad1a094fd15acc8d91ad4e773d1b3d768cadaa9';
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
