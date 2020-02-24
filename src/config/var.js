require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
};
