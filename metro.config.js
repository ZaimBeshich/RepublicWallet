const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: ['.'],
  resolver: {
    blockList: [/db\.json$/],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
