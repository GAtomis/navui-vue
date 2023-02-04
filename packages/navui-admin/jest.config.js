 export default {


  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }], ['@babel/preset-typescript']],
        plugins: ['@vue/babel-plugin-jsx'],
      },
    ],
  },

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/**/*.spec.(ts|tsx)'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },

};
