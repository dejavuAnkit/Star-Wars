const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode:"development",
  devServer: {
    historyApiFallback: true,
    hot: true,
 },
 entry: ['babel-polyfill', './src/index.js'],
 devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
