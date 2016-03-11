'use strict';

const fs = require('fs');

const isLocalSaucelabsTest = process.argv.indexOf('--saucelabs') !== -1;

// Use ENV vars on Travis and sauce.json locally to get credentials
if (isLocalSaucelabsTest && !process.env.SAUCE_USERNAME) {
  if (!fs.existsSync('./sauce.json')) {
    console.log('Please, create a sauce.json with your SauceLabs credentials.');
    process.exit(1);
  } else {
    const credentials = require('./sauce');
    process.env.SAUCE_USERNAME = credentials.username;
    process.env.SAUCE_ACCESS_KEY = credentials.accessKey;
  }
}

const saucelabsLaunchers = {
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

let browsers = ['Chrome'];
let launchers = undefined;
let reporters = ['dots'];
let saucelabsConfig = undefined;
if (isLocalSaucelabsTest || process.env.TRAVIS) {
  if (isLocalSaucelabsTest || process.env.TRAVIS_PULL_REQUEST === 'false') {
    // this a repository branch test
    browsers = Object.keys(saucelabsLaunchers);
    launchers = saucelabsLaunchers;
    reporters.push('saucelabs');
    saucelabsConfig = {
      tunnelIdentifier: 'ng-lightning',
      connectOptions: {
        logfile: './karma-saucelabs.log',
      },
    };
  } else {
    // this is a pull request test
    browsers = ['Firefox'];
  }
}

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
    reporters: reporters,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: browsers,
    autoWatch: true,
    singleRun: false,
    captureTimeout: 120000,
    browserNoActivityTimeout: 120000,
    customLaunchers: launchers,
    sauceLabs: saucelabsConfig,
  });
};
