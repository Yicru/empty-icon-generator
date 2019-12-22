const path = require('path');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');

module.exports = withOffline(
  withCSS({
    transformManifest: manifest => ['/'].concat(manifest),
    generateInDevMode: true,
    workboxOpts: {
      swDest: 'static/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'https-calls',
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    webpack: config => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, './src')
      };
      return config;
    }
  })
);
