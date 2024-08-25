import type { Config } from 'jest';

const config: Config = {
  // Specify the root directory for Jest to look for tests
  roots: ['<rootDir>/src'],

  // Jest transform options
  

  // Transform TypeScript files using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // File extensions to consider as test files
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Setup files that Jest should run before executing the tests
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  // Ensure this is set to jsdom for React components

  // Coverage report settings (optional)
  coverageDirectory: 'coverage',

  // Test environment
  testEnvironment: 'jsdom',

  // Additional paths to ignore
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

export default config;
