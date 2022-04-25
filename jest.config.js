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
    '^@server(.*)$': '<rootDir>/server$1',
    '@/components(.*)$': '<rootDir>/client/components/$1'
  },
  verbose: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  }
}
