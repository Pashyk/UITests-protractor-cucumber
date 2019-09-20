exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['./features/*.feature'],
    cucumberOpts: {
      require: ['./specs/*.js'],
      format: ['./features/support/Reporter.js'],
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://www.way2automation.com/angularjs-protractor/banking/#',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['no-sandbox', '--headless'],
        },
    },
    ignoreSynchronization: true,
    SELENIUM_PROMISE_MANAGER: false,
    suites: {
    },
};
