angular.module('searchFactoryMock', ['GitUserSearch'])
  .config(function($provide) {
    $provide.factory('Search', function($q) {
      var response = { data: { items: 'cat' } };
      return {
        query: function(searchTerm) {
          return $q.when(response);
        }
      };
    });
  });
