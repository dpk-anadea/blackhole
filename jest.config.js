/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true,
  projects: [
    {
      moduleNameMapper: {
        '^@factory(.*)$': '<rootDir>/database/factory$1',
        '^@server(.*)$': '<rootDir>/server$1'
      },
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/routes/api/__test__/**/*.spec.js?(x)']
    },
    {
      moduleNameMapper: {
        '@/components(.*)$': '<rootDir>/client/components/$1'
      },
      testEnvironment: 'jsdom',
      moduleFileExtensions: ['js', 'json', 'vue'],
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest'
      },
      testMatch: ['<rootDir>/client/components/**/__tests__/**/*.spec.js?(x)'],
      passWithNoTests: true
    }
  ]
}
