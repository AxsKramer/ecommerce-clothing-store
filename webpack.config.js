const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    publicPath: '/'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
    // alias: {
    //   '@components': path.resolve(__dirname, 'src/components/'),
    //   '@pages': path.resolve(__dirname, 'src/pages/'),
    //   '@redux': path.resolve(__dirname, 'src/redux/'),
    //   '@firebase': path.resolve(__dirname, 'src/firebase/')
    // }
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
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|mp4)$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname , "src" , 'assets/img'),
          to: "assets/images" 
        }
      ]
    }),
    new Dotenv(),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }
}