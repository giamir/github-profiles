githubUserSearch.controller('GitUserSearchController', ['SearchUser', 'CountUserRepos', function(SearchUser, CountUserRepos) {
  var self = this;
  self.searchTerm     = undefined;
  self.githubUserData = undefined;

  self.getGithubData = function() {
    doSearch(function(data) {
      self.githubUserData = data;
      data.forEach(function(userData) {
        getUserRepoCount(userData.login, function(repos) {
          userData.repos = repos;
        });
      });
    });
  };

  function getUserRepoCount(username, callback) {
    CountUserRepos.query(username)
      .then(function(response) {
        callback(response.data);
      });
  }

  function doSearch(callback) {
    SearchUser.query(self.searchTerm)
      .then(function(response) {
        callback(response.data.items);
      });
  }

}]);
