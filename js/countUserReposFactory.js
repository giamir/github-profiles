githubUserSearch.factory('CountUserRepos', ['$http', function($http) {

  var access_token = '3266211922b79b76a6e566d92a424270e6b5d0c0';

  function generateQueryUrlFromUsername(user) {
    return "https://api.github.com/users/" + user + "/repos";
  }

  function appendTransform(defaults, transform) {
    defaults = angular.isArray(defaults) ? defaults : [defaults];
    return defaults.concat(transform);
  }

  function generateReposHash(reposData) {
    var repos = { 'totalCount': reposData.length };
    var languages = [];
    reposData.forEach(function(repoData) {
      if(repoData.language === null) { repoData.language = 'Unknown'; }
      if (languages.length === 0) {
        languages.push({ 'name': repoData.language, 'repoCount': 0 });
      }
      languages.some(function(language, index) {
        if(language.name === repoData.language) { return language.repoCount++; }
        if(index !== languages.length - 1 ) { return false; }
        languages.push({ 'name': repoData.language, 'repoCount': 1 });
      });
    });
    repos.languages = languages;
    return repos;
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
        transformResponse: appendTransform($http.defaults.transformResponse, generateReposHash)
      });
    }
  };
}]);
