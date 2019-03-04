const path = require('path');
const webpack = require('webpack');

// For styles
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [autoprefixer({ browsers: 'last 3 versions' }), cssnano({})];
    }
  }
};

const styles = {
  test: /\.(scss)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    'css-loader?sourceMap',
    postcss,
    'sass-loader?sourceMap'
  ]
};

const plugins = [
  // new CleanWebpackPlugin([path.join(__dirname, '_site', 'assets', 'dist')]),
  new AssetsPlugin({
    path: path.join(__dirname, '_data'),
    filename: 'assets.json'
  }),
  new MiniCssExtractPlugin({ filename: '[name]-[contenthash].css' })
];

const config = {
  entry: {
    App: './src/webpack-entry.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '_site', 'assets', 'dist'),
    filename: '[name]-[hash].bundle.js'
  },

  module: {
    rules: [styles]
  },

  plugins: plugins
};

module.exports = config;
