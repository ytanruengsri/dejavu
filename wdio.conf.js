exports.config = {

    /**
     * server configurations
     */
    host: '0.0.0.0',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        'webdriverio/tests/**'
    ],
    exclude: [],

    /**
     * capabilities
     */
    capabilities: [
        {
            browserName: 'chrome',
        },
    ],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'webdriverio/screenshots',
    baseUrl: 'https://www.zalando.de',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 300000,
    },
};