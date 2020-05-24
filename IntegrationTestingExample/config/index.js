const env = process.env.NODE_ENV || 'dev';
const config = require(`./${env}`);

module.exports = config;
