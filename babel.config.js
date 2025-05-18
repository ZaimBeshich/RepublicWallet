module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@context': './src/context',
          '@services': './src/services',
          '@res': './src/res',
          '@types': './src/types',
        },
      },
    ],
    '@babel/plugin-transform-optional-catch-binding',
    '@babel/plugin-transform-numeric-separator',
    '@babel/plugin-transform-async-generator-functions',
    '@babel/plugin-transform-object-rest-spread',
  ],
};
