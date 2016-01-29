githubUserSearch.controller('GitUserSearchController', ['SearchUser', 'CountUserRepos', function(SearchUser, CountUserRepos) {
  var self = this;
  self.searchTerm     = undefined;
  self.githubUserData = undefined;

  self.getGithubData = function() {
    doSearch(function(data) {
      self.githubUserData = data;
      data.forEach(function(userData) {
        getUserRepoCount(userData.login, function(count) {
          userData.repoCount = count;
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

  // self.doSearch = function() {
  //   SearchUser.query(self.searchTerm)
  //     .then(function(response) {
  //       self.searchResult = response.data;
  //       for (var i in self.searchResult.items) {
  //         var user = self.searchResult.items[i];
  //         user.repos_count = 0;
  //         CountUserRepos.query(user)
  //           .then(function(response) {
  //             var reposCount = CountUserRepos.reposCounter(response.data);
  //             if (reposCount === 0) return;
  //             for (var i in self.searchResult.items) {
  //               var user = self.searchResult.items[i];
  //               if (user.id === response.data[0].owner.id) {
  //                 user.repos_count = reposCount;
  //               }
  //             }
  //           });
  //       }
  //     });
  // };

}]);
