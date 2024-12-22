/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  coverageReporters: ['json', 'json-summary', 'lcov', 'text', 'clover'],
};
