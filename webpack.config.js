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
      test: /\.ttf|eot|woff|woff2$/,
      exclude: /\node_modules/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      exclude: /\node_modules/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/'
      }
    },
    {
      test: /\.html$/,
      loader: 'html-loader',

    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'resolve-url-loader',
          options: {
            debug: true
          }
        },

        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }

      ],
    }

    ]
  },
  // resolve: {
  //   extensions: ['.js', '.scss'],
  //   modules: ['src', path.join(__dirname, 'node_modules')]
  // }
}