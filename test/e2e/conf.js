exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: { 'browserName': 'chrome' },
  // multiCapabilities: [{'browserName': 'firefox'}, {'browserName': 'chrome'}],
  specs: ['githubProfileFeature.js'],

  jasmineNodeOpts: {
    showColors: true
  },

  onPrepare: function() {
    require('protractor-http-mock').config = {
      rootDirectory: __dirname, // default value: process.cwd()
      protractorConfig: 'conf.js' // default value: 'protractor.conf'
    };
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
      verbosity: 3,
      color: true,
      showStack: true
    }));
  }
};
