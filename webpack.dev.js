const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    open: true,
    openPage: 'index.html',
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: 8080,
  },
});
