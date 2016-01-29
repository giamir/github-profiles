describe('GitUserSearchController', function() {
  var ctrl;
  var scope;

  beforeEach(module('GitUserSearch', 'searchFactoryMock', 'countUserReposMock'));

  beforeEach(inject(function($controller, $rootScope) {
    ctrl = $controller('GitUserSearchController');
    scope = $rootScope;
  }));

  it('initializes with an empty search result and term', function() {
    expect(ctrl.githubUserData).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    it('displays search results', function() {
      ctrl.searchTerm = 'giamir';
      ctrl.getGithubData();
      scope.$digest();
      expect(ctrl.githubUserData).toEqual([{
        "login": "giamir",
        'repos': { 'totalCount':  10,
                   'languages': [
                     { 'name': 'Ruby', 'repoCount': 5 },
                     { 'name': 'JavaScript', 'repoCount': 5 }
                   ]
                 }
      }]);
    });

    it("includes user repos count in user data", function() {
     ctrl.searchTerm = 'giamir';
     ctrl.getGithubData();
     scope.$digest();
     expect(ctrl.githubUserData[0].repos.totalCount).toEqual(10);
   });

   it("includes user repos languages data statistic in user data", function() {
      ctrl.searchTerm = 'giamir';
      ctrl.getGithubData();
      scope.$digest();
      expect(ctrl.githubUserData[0].repos.languages).toEqual(
        [
          { 'name': 'Ruby', 'repoCount': 5 },
          { 'name': 'JavaScript', 'repoCount': 5 }
        ]
      );
    });

  });
});
