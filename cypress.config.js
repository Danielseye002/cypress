const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
})


