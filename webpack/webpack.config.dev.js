import base from './webpack.config.base'

const merge = require('webpack-merge');

module.exports = {
  merge([base]);
}