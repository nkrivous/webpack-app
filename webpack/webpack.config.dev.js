const baseConfig = require('./webpack.config.base');

const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 9090,
  },
});
