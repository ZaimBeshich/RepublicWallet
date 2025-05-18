module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-size-matters|@react-navigation|react-native-safe-area-context|react-native-fast-image)/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^react-native$': '<rootDir>/__mocks__/react-native.js',
    '^react-native-safe-area-context$':
      '<rootDir>/__mocks__/react-native-safe-area-context.js',
    '^@react-navigation/native$':
      '<rootDir>/__mocks__/@react-navigation/native.js',
    '^@react-navigation/native-stack$':
      '<rootDir>/__mocks__/@react-navigation/native-stack.js',
    '^@react-navigation/bottom-tabs$':
      '<rootDir>/__mocks__/@react-navigation/bottom-tabs.js',
    '^react-native-fast-image$':
      '<rootDir>/__mocks__/react-native-fast-image.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {rootMode: 'upward'}],
  },
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
