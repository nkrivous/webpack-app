var path = require('path');

const PATH = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

export default {
  entry: {
    'bundle' : path.resolve(PATH.src, 'index.js')
  },
  output: {
    path: PATH.dist,
    filename: 'js/[name].js'
   }
};