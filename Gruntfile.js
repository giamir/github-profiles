module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: './test/karma.conf.js'
      },
      run: {
      }
    },
    protractor: {
      options: {
        configFile: './test/e2e/conf.js'
      },
      run: {
      }
    },
    protractor_webdriver: {
      start: {
        options: {
          path: 'node_modules/protractor/bin/',
          command: 'webdriver-manager start'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');

  grunt.registerTask('test', ['karma', 'express', 'protractor_webdriver', 'protractor']);
  grunt.registerTask('unit', ['karma']);
  grunt.registerTask('e2e', ['protractor_webdriver', 'protractor']);

};