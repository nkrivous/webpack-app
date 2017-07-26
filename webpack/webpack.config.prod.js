const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
