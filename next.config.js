const path = require('path');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');

module.exports = withOffline(
  withCSS({
    webpack: config => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, './src')
      };
      return config;
    }
  })
);
