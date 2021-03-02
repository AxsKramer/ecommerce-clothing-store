const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "esmodules": true
                  }
                }
              ],
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(s*)css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].ext'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
    historyApiFallback: true,
    open: true,
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/index.css'
    })
  ]
}