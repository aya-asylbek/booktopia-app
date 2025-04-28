module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest', 
    },
  
    transformIgnorePatterns: [
      '/node_modules/(?!your-package-to-transform)/',
    ],
  
    testEnvironment: 'jsdom', 
  };
  