module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
    }],
  },
  devtool: 'eval-cheap-module-source-map',
};