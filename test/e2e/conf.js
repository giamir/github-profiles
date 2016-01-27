exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: { 'browserName': 'chrome' },
  // multiCapabilities: [{'browserName': 'firefox'}, {'browserName': 'chrome'}],
  specs: ['githubProfileFeature.js'],

  jasmineNodeOpts: {
    showColors: true
  },

  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
      verbosity: 3,
      color: true,
      showStack: true
    }));
  }
};
