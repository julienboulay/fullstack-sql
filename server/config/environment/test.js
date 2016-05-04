'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  sequelize: {
    uri: 'sqlite://',
    // uri: 'postgres://postgres:postgres@localhost:5432/postgres',
    options: {
      logging: false,
      storage: 'test.sqlite',
      define: {
        timestamps: false
      }
    }
  }
};
