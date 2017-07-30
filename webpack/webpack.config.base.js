const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './index.js',
    about: './about.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['about', 'index'],
    }),
  ],
};
