const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {    
    devServer: {
       // stats: 'errors-only',
        contentBase: "./dist",
        port: 9000
    }
  });