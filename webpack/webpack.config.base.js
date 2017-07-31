const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.resolve(__dirname, '../src'),
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      user: path.resolve(__dirname, '../external/user.js')
    }
  },
  entry: {
    index: './index.js',
    about: './about.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.ProvidePlugin({
      User: path.resolve(__dirname, '../external/user')
    })/* ,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['about', 'index']
    })*/
  ]
};
