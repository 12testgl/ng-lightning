// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const isSaucelabs = process.argv.indexOf('--saucelabs') !== -1 ;

if (isSaucelabs && !process.env.SAUCE_USERNAME) {
  try {
    const credentials = require('./saucelabs.json');
    process.env.SAUCE_USERNAME = credentials.username;
    process.env.SAUCE_ACCESS_KEY = credentials.accessKey;
  } catch (err) {
    console.log('Please, create a valid "saucelabs.json" with your credentials.');
    process.exit(1);
  }
}

module.exports = function (config) {
  const cfg = {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-sauce-launcher'),
      require('karma-ie-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage'),
      reports: ['text-summary', 'html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'coverage-istanbul'],
    port: 23011,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,

    files: [
      '../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css',
      '../../node_modules/@angular/cdk/overlay-prebuilt.css',
      // fixtures
      { pattern: 'test/fixtures/**', watched: false, included: false, served: true },
    ],
    proxies: {
      // Avoid 404 warnings for images during testing
      '/assets/icons/utility-sprite/svg/symbols.svg': '/base/test/fixtures/fake',
      '/mypath/utility-sprite/svg/symbols.svg': '/base/test/fixtures/fake',
      '/mypath/standard-sprite/svg/symbols.svg': '/base/test/fixtures/fake',
      '/mypath/custom-sprite/svg/symbols.svg': '/base/test/fixtures/fake',
      '/image1.jpg': '/base/test/fixtures/fake',
    },
  };

  if (isSaucelabs) {
    cfg.customLaunchers = require('./test/browser-providers');
    cfg.browsers = Object.keys(cfg.customLaunchers);
    cfg.reporters.push('saucelabs');
    cfg.sauceLabs = {
      tunnelIdentifier: 'ng-lightning',
    };
    cfg.captureTimeout = 180000;
    cfg.browserDisconnectTimeout = 180000;
    cfg.browserDisconnectTolerance = 3;
    cfg.browserNoActivityTimeout = 180000;
    cfg.angularCli = {
      environment: 'dev'
    };
  }

  config.set(cfg);
};
