const devConfig = require('./webpack/webpack.config.dev');
const prodConfig = require('./webpack/webpack.config.prod');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = NODE_ENV === 'development'
    ? devConfig
    : prodConfig;
