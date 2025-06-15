// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  reporter: {
    update: (event) => {
      // Log Metro events to terminal
      if (event.type === 'initialize_started' || 
          event.type === 'initialize_done' ||
          event.type === 'bundling_error') {
        console.log(`[Metro] ${event.type}`);
      }
    },
  },
  server: {
    enhanceMiddleware: (middleware) => {
        console.log('[Metro] Enhancing middleware to block browser-based logging');
      return (req, res, next) => {
        // Block browser-based logging
        if (req.url.startsWith('/logs')) {
          res.end();
          return;
        }
        return middleware(req, res, next);
      };
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);