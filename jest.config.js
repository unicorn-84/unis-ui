module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  clearMocks: true,
};
