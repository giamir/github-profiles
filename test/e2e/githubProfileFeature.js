var mock = require('protractor-http-mock');

describe('GitHub profile finder', function() {

  beforeEach(function() {
    mock(['githubUserSearch.js']);
  });
  afterEach(function(){
    mock.teardown();
  });

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('giami');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.getText()).toContain('giamir');
  });

});
