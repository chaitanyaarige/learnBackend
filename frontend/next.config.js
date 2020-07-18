
require('dotenv').config();

module.exports = {
  env: {
    customKey: 'my-value',
    appUrl: 'http://localhost:5200/api'
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000
  }
}
