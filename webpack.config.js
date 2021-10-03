const prod = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

console.log('Build Mode: ', process.env.NODE_ENV || 'unknown');

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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new ESLintPlugin({
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      formatter: 'codeframe'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
};
