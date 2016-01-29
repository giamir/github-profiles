describe('factory: CountUserRepos', function() {
  beforeEach(module('GitUserSearch'));
  var count;

  beforeEach(inject(function(CountUserRepos) {
    count = CountUserRepos;
  }));

  var repos = [ { "language": "Ruby" }, { "language": "JavaScript" }, { "language": "JavaScript" } ];

  var httpBackend;

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .expectGET("https://api.github.com/users/giamir/repos?access_token=2ad1a094fd15acc8d91ad4e773d1b3d768cadaa9&per_page=1000")
      .respond(repos);
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('counts the number of repos for a given user', function() {
    count.query('giamir')
      .then(function(response) {
        expect(response.data.totalCount).toEqual(3);
      });
    httpBackend.flush();
  });
  it('return a languages statistic array for a given user', function() {
    count.query('giamir')
      .then(function(response) {
        expect(response.data.languages).toEqual([
          {'name': 'Ruby', repoCount: 1},
          {'name': 'JavaScript', repoCount: 2}
        ]);
      });
    httpBackend.flush();
  });
});
