githubUserSearch.factory('CountUserRepos', ['$http', function($http) {

  var access_token = '3266211922b79b76a6e566d92a424270e6b5d0c0';

  function generateQueryUrlFromUsername(user) {
    return "https://api.github.com/users/" + user + "/repos";
  }

  function appendTransform(defaults, transform) {
    defaults = angular.isArray(defaults) ? defaults : [defaults];
    return defaults.concat(transform);
  }

  function countRepos(data) {
    return "" + data.length;
  }

  function generateLanguageReposHash(repos) {
    var languages = [];
    repos.forEach(function(reposData) {
      if (!$.inArray(reposData.language, languages)) {
        languages.push(reposData.language);
      }
    });
    return "" + data.length;
  }

  return {
    query: function(user) {
      return $http({
        url: generateQueryUrlFromUsername(user),
        method: 'GET',
        params: {
          'access_token': access_token,
          'per_page': 1000
        },
        transformResponse: appendTransform($http.defaults.transformResponse, countRepos)
      });
    }
  };
}]);
