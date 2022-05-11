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
      testMatch: ['<rootDir>/server/**/?(*.)+(spec).[jt]s?(x)']
    },
    {
      moduleNameMapper: {
        '@/(.*)$': '<rootDir>/client/$1',
        '@/components(.*)$': '<rootDir>/client/components/$1',
        '@/views(.*)$': '<rootDir>/client/components/$1',
        '@/api(.*)$': '<rootDir>/client/api/$1',
        '^@factory(.*)$': '<rootDir>/database/factory$1',
        '^@server(.*)$': '<rootDir>/server$1'
      },
      testEnvironment: 'jsdom',
      moduleFileExtensions: ['js', 'json', 'vue'],
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|webp)$':
          'jest-transform-stub'
      },
      passWithNoTests: true,
      testMatch: ['<rootDir>/client/**/?(*.)+(spec).[jt]s?(x)']
    }
  ]
}
