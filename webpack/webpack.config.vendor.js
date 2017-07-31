const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../external'),
  entry: {
    vendor: ['./external-global.js', './external-no-export.js', './user.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
  }
};
