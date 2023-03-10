const path = require('path');

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './counter-wc.ts',
  output: {
    filename: 'counter-wc.bundled.js',
    path: path.resolve(__dirname, './'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.js', '.json'],
        },
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
}