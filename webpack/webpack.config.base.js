const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PATH = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
};

module.exports = {
  entry: {
    bundle: path.resolve(PATH.src, 'index.js'),
  },
  output: {
    path: PATH.dist,
    filename: 'js/[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
  ],
};
