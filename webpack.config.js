const path = require('path');

module.exports = {
  entry: './assets/jsm/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'bundle.js',
  },
};
