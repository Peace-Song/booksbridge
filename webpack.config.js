const prod = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

console.log('Build Mode: ', process.env.NODE_ENV || 'unknown')

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  resolve: {
    alias: {
      '@booksbridge': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      }
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
