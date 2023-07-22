const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    popup: './src/Popup.jsx',
    googleplugintest: './src/contentScript/googleplugintest.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // With this, Webpack can understand how to read React files to transform them into JS files
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }],
  },
  /*
  * HtmlWebpackPlugin add out html to build files
  * CopyPlugin copies all files in a directory to build files
  */
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public' }
      ],
    }),
  ]
}