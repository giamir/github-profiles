angular.module('searchFactoryMock', ['GitUserSearch'])
  .config(function($provide) {
    $provide.factory('SearchUser', function($q) {
      return {
        query: function(searchTerm) {
          return $q.when({ data: {
            items: [{ "login": "giamir"}]
          }
          });
        }
      };
    });
  });
