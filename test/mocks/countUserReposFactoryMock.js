angular.module('countUserReposMock', ['GitUserSearch'])
  .config(function($provide) {
    $provide.factory('CountUserRepos', function($q) {
      return {
        query: function(user) {
          return $q.when({ data:
            { 'totalCount':  10,
              'languages': [
                { 'name': 'Ruby', 'repoCount': 5 },
                { 'name': 'JavaScript', 'repoCount': 5 }
              ]
            }
          });
        }
      };
    });
  });
