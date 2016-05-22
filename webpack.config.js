'use strict';

const webpack = require('webpack');

const fs = require('fs');
const file = fs.readFileSync('./.babelrc');
const babelConfig = JSON.parse(file);

module.exports = {
  entry: {
    app: './_assets/js/app.js'
  },
  output: {
    path: './assets/js',
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: babelConfig
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    loaders: []
  },
  plugins: [
   // new webpack.optimize.UglifyJsPlugin({ comments: false })
  ]
};
