const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /\node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.s[ac]ss$/i,
      loader: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  // resolve: {
  //   extensions: ['.js', '.scss'],
  //   modules: ['src', path.join(__dirname, 'node_modules')]
  // }
}