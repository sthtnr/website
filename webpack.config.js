const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'eval',
  devServer: {
    inline: true,
    hot: true,
    open: true,
    openPage: 'index.html',
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
