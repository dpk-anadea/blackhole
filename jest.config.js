/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@factory(.*)$': '<rootDir>/database/factory$1',
    '^@server(.*)$': '<rootDir>/server$1'
  },
  verbose: true
}
