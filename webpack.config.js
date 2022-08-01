const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './docs'),
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, './src/index.html')
    }
  },

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(svg|png|jp?eg)/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext][query]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, './src/index.html'),
    }),

    new miniCss({
      filename: './css/style.css',
    }),
  ],
}