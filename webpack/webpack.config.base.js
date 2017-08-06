const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './index.js',
    about: './about.ts',
    'webpack-page': './webpack-page/webpack-page'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      user: path.resolve(__dirname, '../external/user.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'assets/[name].[ext]'
          }
        }
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
