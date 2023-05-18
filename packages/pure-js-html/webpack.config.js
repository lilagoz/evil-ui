const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
  // entry: "./src/index.js",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
});
