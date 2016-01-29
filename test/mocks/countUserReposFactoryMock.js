angular.module('countUserReposMock', ['GitUserSearch'])
  .config(function($provide) {
    $provide.factory('CountUserRepos', function($q) {
      return {
        query: function(user) {
          return $q.when({ data:  1  });
        }
      };
    });
  });
