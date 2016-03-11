const fs = require('fs');

// Use ENV vars on Travis and sauce.json locally to get credentials
if (!process.env.SAUCE_USERNAME) {
  if (!fs.existsSync('./sauce.json')) {
    console.log('Create a sauce.json with your SauceLabs credentials.');
    process.exit(1);
  } else {
    var credentials = require('./sauce');
    process.env.SAUCE_USERNAME = credentials.username;
    process.env.SAUCE_ACCESS_KEY = credentials.accessKey;
  }
}

const launchers = {
  'SL_Chrome': {
    base: 'SauceLabs',
    browserName: 'chrome'
  },
  // 'SL_InternetExplorer': {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   version: '11'
  // },
  'SL_FireFox': {
    base: 'SauceLabs',
    browserName: 'firefox',
  }
};

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
        // For travis
        'node_modules/es6-shim/es6-shim.js',
        // paths loaded by Karma
        {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false},
        {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: false},
        {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: false},
        {pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true},
        {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
        {pattern: 'karma-shim.js', included: true, watched: true},

        // paths loaded via module imports
        {pattern: 'temp/**/*.js', included: false, watched: true},

        // paths to support debugging with source maps in dev tools
        {pattern: 'src/**/*.ts', included: false, watched: false},
        {pattern: 'temp/**/*.js.map', included: false, watched: false},

        // fixtures
        {pattern: 'test/fixtures/**', watched: false, included: false, served: true},
    ],

    proxies: {
      '/assets/icons/utility-sprite/svg/symbols.svg': '/base/test/fixtures/fake.svg',
    },

    preprocessors: {'temp/**/*.js': ['sourcemap']},

    reporters: ['dots', 'saucelabs'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: process.env.TRAVIS ? Object.keys(launchers) : ['Chrome'],
    autoWatch: true,
    singleRun: false,
    captureTimeout: 120000,
    customLaunchers: launchers,
    sauceLabs: {
      connectOptions: {
        logfile: './karma-saucelabs.log',
      },
      tunnelIdentifier: 'ng-lightning',
    }
  });
};
