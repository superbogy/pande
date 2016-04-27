const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-hot-middleware/client?http://localhost:8080');
    sources.push('webpack/hot/dev-server');
  }

  return sources;
}

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: './www/index.html',
    inject: 'body'
  }),
  new ExtractTextPlugin('style.css', { allChunks: true }),
];

const devPlugins = [
  new webpack.NoErrorsPlugin()
];

const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
    },
  }),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

// css local
// https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284#.c2jl6jmb8
const localIdentName =  '('+ process.env.NODE_ENV === 'development' ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]' +')';

module.exports = {
  entry: getEntrySources(['./www/index']),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  module: {
    //preLoaders: [
    //  { test: /\.js$/, loader: 'source-map-loader' },
    //  { test: /\.js$/, loader: 'eslint-loader' },
    //],
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName='+localIdentName+'!sass-loader') },
      //{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName='+localIdentName) },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'url-loader?prefix=font/&limit=5000' },
    ]
  },
  devtool: 'source-map',
  plugins: plugins,
  resolve: {
    // you can now require('file') instead of require('file.jsx')
    extensions: ['', '.js', '.json', '.jsx']
  }
};
