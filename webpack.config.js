
const path = require('path')
const webpack = require('webpack')
const html = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          'babel-loader',
        ],
        include: [
          path.resolve(__dirname, 'src'),
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        include: [
          path.resolve(__dirname, 'node_modules'),
        ]
      },
    ]
  },
  resolve: {
    modules: [ 'src', 'node_modules' ],
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
    symlinks: false,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new html({
      meta: {
        charset: 'utf-8',
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  }
};

