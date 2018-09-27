const path = require('path');

module.exports = {
  entry: './assets/jsm/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
