const path = require('path');

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './build/counter-wc.js',
  output: {
    filename: 'counter-wc-webpack.bundled.js',
    path: path.resolve(__dirname, './dist-webpack'),
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